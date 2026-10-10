'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { site } from '@/lib/site';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[rgba(9,12,22,0.72)] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/15">
            <img src="/suman.png" alt={site.name} className="h-full w-full object-cover" />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyber-cyan/40" />
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-white sm:block">
            Suman<span className="text-cyber-cyan">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-cyber-cyan/25 bg-cyber-cyan/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-cyber px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 sm:inline-flex"
          >
            <Download size={15} />
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-cyber-cyan md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[rgba(9,12,22,0.92)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === item.href
                      ? 'bg-cyber-cyan/10 text-cyber-cyan'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-cyber px-4 py-3 text-sm font-bold text-black"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
