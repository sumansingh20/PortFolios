import { NextResponse } from 'next/server';

const USERNAME = 'sumansingh20';

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };

    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    // Core endpoints
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(USERNAME)}`, {
        headers,
        next: { revalidate: 300 },
      }),
      fetch(`https://api.github.com/users/${encodeURIComponent(USERNAME)}/repos?per_page=100`, {
        headers,
        next: { revalidate: 300 },
      }),
    ]);

    if (!userRes.ok) {
      const t = await userRes.text().catch(() => '');
      return NextResponse.json(
        { ok: false, error: `GitHub user fetch failed: ${userRes.status}`, details: t },
        { status: userRes.status }
      );
    }

    if (!reposRes.ok) {
      const t = await reposRes.text().catch(() => '');
      return NextResponse.json(
        { ok: false, error: `GitHub repos fetch failed: ${reposRes.status}`, details: t },
        { status: reposRes.status }
      );
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    // Approx contributions for public-only approach.
    // True contributions typically requires authenticated GraphQL.
    // We'll provide safe/accurate-at-rest data: public repos, followers, and last push time.
    const publicRepoCount = user.public_repos ?? repos.length;
    const followers = user.followers ?? 0;

    const lastPushedAt = Array.isArray(repos)
      ? repos
          .map((r: any) => r?.pushed_at as string | undefined)
          .filter((v: string | undefined): v is string => Boolean(v))
          .sort((a, b) => (a < b ? 1 : -1))[0]
      : undefined;


    const lastPushedLabel = lastPushedAt
      ? new Date(lastPushedAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })
      : undefined;

    const topRepos = Array.isArray(repos)
      ? repos
          .filter((r: any) => !r.fork)
          .sort((a: any, b: any) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
          .slice(0, 6)
          .map((r: any) => ({
            name: r.name,
            html_url: r.html_url,
            description: r.description,
            stars: r.stargazers_count ?? 0,
            language: r.language ?? null,
          }))
      : [];

    return NextResponse.json({
      ok: true,
      username: USERNAME,
      publicRepoCount,
      followers,
      lastPushedLabel: lastPushedLabel ?? '—',
      lastPushedAt: lastPushedAt ?? null,
      topRepos,
      // rate-limit hint for UI/diagnostics
      rateLimited: false,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: 'Internal error', details: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}

