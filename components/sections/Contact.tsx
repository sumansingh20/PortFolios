'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; detail: string }
  | { status: 'error'; detail: string };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  const emailTo = 'sumantech07@gmail.com';

  const isEmailValid = useMemo(() => {
    const v = formData.email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [formData.email]);

  const errors = useMemo(() => {
    const e: string[] = [];
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) e.push('Your name is required.');
    if (name && name.length < 2) e.push('Your name must be at least 2 characters.');

    if (!email) e.push('Your email is required.');
    if (email && !isEmailValid) e.push('Enter a valid email address.');

    if (!message) e.push('Message is required.');
    if (message && message.length < 10) e.push('Message must be at least 10 characters.');

    return e;
  }, [formData.email, formData.message, formData.name, isEmailValid]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState.status !== 'idle') setFormState({ status: 'idle' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (errors.length) {
      setFormState({ status: 'error', detail: errors[0] ?? 'Please check your input.' });
      return;
    }

    setFormState({ status: 'submitting' });

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Real behavior without backend: open mail draft with subject/body.
    const subject = `Security Collaboration: ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
      '',
      '— Sent from portfolio contact form',
    ].join('\n');

    const href = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // This navigates to the mail client.
    window.location.href = href;

    // Keep UI consistent. User sees email draft.
    setFormState({ status: 'success', detail: 'Opening your email client with a pre-filled message…' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sumantech07@gmail.com',
      description: 'Best for project briefs, internships, and serious collaboration.',
      link: `mailto:${emailTo}`,
      accent: 'from-cyan-400/20 to-cyan-400/5',
      color: 'text-cyber-cyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/sumankumar-',
      description: 'Professional updates, networking, and role discussions.',
      link: 'https://www.linkedin.com/in/sumankumar-/',
      accent: 'from-blue-400/20 to-blue-400/5',
      color: 'text-cyber-blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'sumansingh20',
      description: 'Code, systems, and security-focused projects.',
      link: 'https://github.com/sumansingh20',
      accent: 'from-purple-400/20 to-purple-400/5',
      color: 'text-cyber-purple',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: 'sumansingh20',
      description: 'Problem solving, consistency, and interview prep.',
      link: 'https://leetcode.com/u/sumansingh20/',
      accent: 'from-emerald-400/20 to-emerald-400/5',
      color: 'text-cyber-emerald',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Patna, Bihar, India',
      description: 'Open to remote, hybrid, and on-site opportunities.',
      link: 'https://www.google.com/maps/search/Patna,+Bihar,+India',
      accent: 'from-amber-400/20 to-amber-400/5',
      color: 'text-cyber-emerald',
    },
  ];

  const responseHighlights = [
    {
      icon: Sparkles,
      label: 'Response style',
      value: 'Direct, clear, and action-oriented',
    },
    {
      icon: ShieldCheck,
      label: 'Focus areas',
      value: 'Security engineering, full-stack, and secure systems',
    },
    {
      icon: MessageSquare,
      label: 'Best for',
      value: 'Internships, freelance work, and collaboration ideas',
    },
  ];

  return (
    <section id="contact" className="section-shell w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          title="Let's Connect"
          subtitle="If you want to build something secure, test an idea, or discuss an opportunity, this is the fastest way to reach me."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-glass p-6 sm:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-kicker">
                  <Sparkles size={14} />
                  Direct Contact
                </span>
                <span className="badge-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  Open to security and full-stack opportunities
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="section-title text-3xl md:text-4xl text-white">
                  Fast, professional communication for projects that matter.
                </h3>
                <p className="text-body max-w-2xl leading-8">
                  I keep communication simple: concise project context, clear scope, and a direct next step.
                  If you are hiring, collaborating, or reviewing a portfolio project, reach out through the
                  channel that fits best.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {responseHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="card-surface rounded-2xl border border-white/8 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="section-number mb-1">{item.label}</p>
                          <p className="text-body text-sm leading-6">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const isEmail = method.link.startsWith('mailto:');

                  return (
                    <motion.a
                      key={method.label}
                      href={method.link}
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-[1px] transition-transform duration-300 hover:-translate-y-1"
                      whileHover={{ y: -4 }}
                    >
                      <div
                        className={`h-full rounded-2xl bg-gradient-to-br ${method.accent} p-5`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="rounded-2xl bg-black/20 p-3 backdrop-blur-sm transition-all group-hover:scale-105">
                              <Icon className={method.color} size={22} />
                            </div>
                            <div>
                              <p className="section-number mb-2">{method.label}</p>
                              <h4 className="section-title text-xl text-white">
                                {method.value}
                              </h4>
                            </div>
                          </div>
                          <ArrowUpRight
                            className="mt-1 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            size={18}
                          />
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-6 text-white/78">
                          {method.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-glass p-6 sm:p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
            <div className="relative space-y-6">
              <div className="space-y-2">
                <span className="section-kicker">
                  <Send size={14} />
                  Send a Message
                </span>
                <h3 className="section-title text-3xl md:text-4xl text-white">
                  Tell me what you are building.
                </h3>
                <p className="text-body leading-8">
                  Share the role, idea, or problem statement. If you want a faster reply, include the timeline,
                  stack, and what success looks like.
                </p>
              </div>

              {formState.status === 'error' && (
                <div
                  className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                  role="alert"
                >
                  {formState.detail}
                </div>
              )}

              {formState.status === 'success' && (
                <div
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100"
                  role="status"
                >
                  {formState.detail}
                </div>
              )}

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-cyber-cyan"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cyan-400/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 transition-all focus:border-cyan-300/40 focus:outline-none"
                    placeholder="Suman Kumar"
                    required
                    minLength={2}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-cyber-cyan"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-cyan-400/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 transition-all focus:border-cyan-300/40 focus:outline-none"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-cyber-cyan"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-cyan-400/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 transition-all focus:border-cyan-300/40 focus:outline-none"
                    placeholder="Tell me about the role, project, or problem you want to solve..."
                    required
                    minLength={10}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-cyber px-4 py-3 font-bold text-black transition-all hover:shadow-glow-cyan disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={formState.status === 'submitting' ? undefined : { scale: 1.01 }}
                  whileTap={formState.status === 'submitting' ? undefined : { scale: 0.98 }}
                >
                  {formState.status === 'submitting' ? 'Preparing…' : 'Send Message'}
                  <ArrowUpRight
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    size={18}
                  />
                </motion.button>

                <p className="text-body text-xs leading-6 opacity-80">
                  No backend needed — submits by opening your email client with a pre-filled message.
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

