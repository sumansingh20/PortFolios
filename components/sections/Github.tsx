'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type GithubProfile = {
  ok: boolean;
  username: string;
  publicRepoCount: number;
  followers: number;
  lastPushedLabel: string;
  topRepos: Array<{
    name: string;
    html_url: string;
    description?: string;
    stars?: number;
    language?: string | null;
  }>;
  rateLimited?: boolean;
  error?: string;
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
          setError(data?.error ?? 'Failed to load GitHub profile');
        }
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message ?? 'Failed to load GitHub profile');
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

  const repoCount = profile?.publicRepoCount ?? 20;
  const followers = profile?.followers ?? 100;
  const topRepos = profile?.topRepos ?? [];

  return (

    <section id="github" className="section-shell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          title="GitHub Activity"
          subtitle="A snapshot of open-source work and the collaboration trail behind it."
        />

        <motion.div
          className="card-surface p-8 rounded-3xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-cyber-cyan flex items-center gap-2 section-title">
              <GithubIcon size={28} />
              Open Source Contributions
            </h3>
            <motion.a
              href="https://github.com"
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
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-cyber-cyan mb-2 section-title">
                {loading ? '—' : `${repoCount}+`}
              </div>
              <div className="text-body font-inter">Repositories</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-cyber-purple mb-2 section-title">
                {loading ? '—' : 'Live'}
              </div>
              <div className="text-body font-inter">Collaboration</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-cyber-emerald mb-2 section-title">
                {loading ? '—' : `${followers}+`}
              </div>
              <div className="text-body font-inter">Followers</div>
            </motion.div>
          </div>

          <div className="mt-8 pt-8 border-t border-cyber-cyan/10">
            {error ? (
              <p className="text-body font-inter text-center text-red-300">
                {error}
              </p>
            ) : (
              <p className="text-body font-inter text-center">
                Active contributor to open-source security projects, AI frameworks, and developer tools.
                Last push: <span className="text-white/90">{loading ? '—' : (profile?.lastPushedLabel ?? '—')}</span>.
                Check my GitHub for the latest repositories and contributions.
              </p>
            )}
          </div>

          {topRepos.length > 0 && (
            <div className="mt-6">
              <div className="text-body font-inter text-sm mb-3 opacity-80">
                Top repositories (by stars)
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {topRepos.map((r) => (
                  <motion.a
                    key={r.html_url}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition-all hover:-translate-y-0.5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="section-title text-white font-bold">
                          {r.name}
                        </div>
                        {r.description && (
                          <div className="text-body text-sm mt-1 line-clamp-2">
                            {r.description}
                          </div>
                        )}
                      </div>
                      <div className="text-cyber-cyan text-sm font-semibold">
                        ★ {r.stars ?? 0}
                      </div>
                    </div>
                    {r.language && (
                      <div className="mt-3 text-xs text-white/70">
                        Language: <span className="text-white/90">{r.language}</span>
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-cyber-cyan/80 group-hover:text-cyber-cyan transition-colors">
                      View
                      <ExternalLink size={14} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
