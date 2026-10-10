'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, ExternalLink, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/lib/site';

type Repo = {
  name: string;
  html_url: string;
  description?: string | null;
  stars?: number;
  language?: string | null;
  pushedAt?: string | null;
};

type GithubProfile = {
  ok: boolean;
  username: string;
  publicRepoCount: number;
  followers: number;
  lastPushedLabel: string;
  topRepos: Repo[];
  rateLimited?: boolean;
  error?: string;
};

// Real repositories used only if the GitHub API is unreachable (e.g. rate limit).
const fallbackRepos: Repo[] = [
  {
    name: 'Threavix-AI',
    html_url: 'https://github.com/sumansingh20/Threavix-AI',
    description:
      'Agentic AI cybersecurity platform for security log analysis, threat intelligence, and incident investigation.',
    stars: 0,
    language: 'Python',
  },
  {
    name: 'NexaMind-AI',
    html_url: 'https://github.com/sumansingh20/NexaMind-AI',
    description:
      'Agentic RAG platform for intelligent document research and knowledge automation.',
    stars: 0,
    language: 'Python',
  },
  {
    name: 'Synthera-AI',
    html_url: 'https://github.com/sumansingh20/Synthera-AI',
    description:
      'Multi-agent AI research platform that automates web research, source verification, and report generation.',
    stars: 0,
    language: 'Python',
  },
  {
    name: 'Aegis-Offensive-Security-Framework',
    html_url:
      'https://github.com/sumansingh20/Aegis-Offensive-Security-Framework',
    description: 'Offensive security framework and ethical hacking tooling.',
    stars: 1,
    language: 'TypeScript',
  },
  {
    name: 'Ai-Driven-Zero-Trust-Security',
    html_url:
      'https://github.com/sumansingh20/Ai-Driven-Zero-Trust-Security',
    description: 'AI-driven zero-trust security platform.',
    stars: 1,
    language: 'TypeScript',
  },
  {
    name: 'kavach-infinity',
    html_url: 'https://github.com/sumansingh20/kavach-infinity',
    description:
      'AI-powered critical infrastructure protection with real-time monitoring and anomaly detection.',
    stars: 1,
    language: 'Python',
  },
];

const languageColors: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Scala: '#c22d40',
  HTML: '#e34c26',
  'Jupyter Notebook': '#DA5B0B',
};

export default function Github() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch('/api/profile/github');
        const data: GithubProfile = await res.json();
        if (!mounted) return;
        if (data?.ok) {
          setProfile(data);
          setError(null);
        } else {
          setError(data?.error ?? 'Live GitHub data unavailable');
        }
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message ?? 'Live GitHub data unavailable');
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const repoCount = profile?.publicRepoCount;
  const followers = profile?.followers;
  const topRepos = profile?.topRepos?.length ? profile.topRepos : fallbackRepos;

  const stats = [
    {
      value: loading ? '—' : repoCount != null ? `${repoCount}` : '—',
      label: 'Public Repositories',
      color: 'text-cyber-cyan',
    },
    {
      value: loading ? '—' : followers != null ? `${followers}` : '—',
      label: 'Followers',
      color: 'text-cyber-purple',
    },
    {
      value: loading ? '—' : profile?.lastPushedLabel ?? '—',
      label: 'Last Push',
      color: 'text-cyber-emerald',
    },
  ];

  return (
    <section id="github" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          title="GitHub Activity"
          subtitle="Live data pulled straight from my GitHub profile — repositories, activity, and open-source work."
        />

        <motion.div
          className="card-surface p-8 rounded-3xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-cyber-cyan flex items-center gap-2 section-title">
              <GithubIcon size={28} />@{site.githubUsername}
            </h3>
            <motion.a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-sm font-inter"
              whileHover={{ scale: 1.05 }}
            >
              Visit Profile
              <ExternalLink size={16} />
            </motion.a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-3xl font-bold mb-2 section-title ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-body font-inter text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-cyber-cyan/10">
            {error ? (
              <p className="text-body font-inter text-center text-sm opacity-80">
                Live GitHub API is rate-limited right now — showing a curated
                selection of my repositories below.
              </p>
            ) : (
              <p className="text-body font-inter text-center text-sm opacity-80">
                Active contributor to open-source security, AI, and developer
                tooling. Check my GitHub for the latest repositories.
              </p>
            )}
          </div>

          <div className="mt-6">
            <div className="text-body font-inter text-sm mb-3 opacity-80">
              Recently active repositories
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {topRepos.map((r) => (
                <motion.a
                  key={r.html_url}
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition-all hover:-translate-y-0.5 hover:border-cyber-cyan/40"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="section-title text-white font-bold">
                      {r.name}
                    </div>
                    {typeof r.stars === 'number' && r.stars > 0 && (
                      <div className="flex items-center gap-1 text-cyber-cyan text-sm font-semibold">
                        <Star size={13} className="fill-cyber-cyan/40" />
                        {r.stars}
                      </div>
                    )}
                  </div>
                  {r.description && (
                    <div className="text-body text-sm mt-1 line-clamp-2">
                      {r.description}
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between gap-2">
                    {r.language && (
                      <span className="flex items-center gap-2 text-xs text-white/70">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              languageColors[r.language] ?? '#8b949e',
                          }}
                        />
                        {r.language}
                      </span>
                    )}
                    <span className="flex items-center gap-2 text-cyber-cyan/80 group-hover:text-cyber-cyan transition-colors text-xs">
                      View
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
