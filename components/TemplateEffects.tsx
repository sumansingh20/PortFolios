
'use client';

import { useEffect, useMemo } from 'react';

function usePrefersReducedMotion() {
  const query = useMemo(() => '(prefers-reduced-motion: reduce)', []);
  // SSR-safe: default false until mounted
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const get = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };
  return get();
}

export default function TemplateEffects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cursor
    const isTouch =
      'ontouchstart' in window ||
      (navigator as any).maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;

    const cursor = document.getElementById('cursor') as HTMLDivElement | null;
    const ring = document.getElementById('cursor-ring') as HTMLDivElement | null;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      raf = window.requestAnimationFrame(animateRing);
    };

    if (!prefersReducedMotion && !isTouch && cursor && ring) {
      window.addEventListener('mousemove', onMove, { passive: true });
      raf = window.requestAnimationFrame(animateRing);

      const interactive = document.querySelectorAll(
        'a,button,[role="button"],[style*="cursor:none"],[class*="btn"],.proj-card'
      );

      interactive.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width = '16px';
          cursor.style.height = '16px';
          ring.style.width = '60px';
          ring.style.height = '60px';
          ring.style.borderColor = 'rgba(0,245,255,0.8)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.width = '8px';
          cursor.style.height = '8px';
          ring.style.width = '40px';
          ring.style.height = '40px';
          ring.style.borderColor = 'rgba(0,245,255,0.5)';
        });
      });
    }


    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preloader
    const statuses = [
      '[ LOADING MODULES... ]',
      '[ INITIALIZING SECURITY... ]',
      '[ BUILDING INTERFACE... ]',
      '[ SYSTEM READY. ]',
    ];

    const statusEl = document.getElementById('preload-status');
    let si = 0;
    const statusInterval = window.setInterval(() => {
      si++;
      if (!statusEl) return;
      if (si < statuses.length) statusEl.textContent = statuses[si];
      else window.clearInterval(statusInterval);
    }, 500);

    const hidePreloader = () => {
      const pl = document.getElementById('preloader');
      if (!pl) return;
      pl.style.transition = 'opacity .6s';
      pl.style.opacity = '0';
      window.setTimeout(() => {
        pl.style.display = 'none';
      }, 600);
    };

    // Hide preloader after 2.5s regardless of page load
    const preloaderTimer = window.setTimeout(hidePreloader, 2500);

    // Also hide on window load
    window.addEventListener('load', hidePreloader);

    return () => {
      window.clearInterval(statusInterval);
      window.clearTimeout(preloaderTimer);
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll progress bar
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.transform = `scaleX(${progress / 100})`;
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion) return;

    // Spotlight cards follow the pointer (event delegation)
    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.('.spotlight') as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion) return;

    // Typed text
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
      const roles = [
        'Ethical Hacker',
        'AI/ML Engineer',
        'Offensive Security Researcher',
        'Security Automation Developer',
        'Cybersecurity Analyst',
        'Full Stack Engineer',
        'AI Security Innovator',
        'Startup Builder',
      ];

      let ri = 0;
      let ci = 0;
      let deleting = false;

      const step = () => {
        const word = roles[ri];

        if (!deleting) {
          typedEl.textContent = word.slice(0, ci + 1);
          ci++;
          if (ci === word.length) {
            deleting = true;
            window.setTimeout(step, 2000);
            return;
          }
        } else {
          typedEl.textContent = word.slice(0, ci - 1);
          ci--;
          if (ci === 0) {
            deleting = false;
            ri = (ri + 1) % roles.length;
          }
        }

        window.setTimeout(step, deleting ? 60 : 100);
      };

      window.setTimeout(step, 1800);
    }

    // Scroll reveal

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion) return;

    // HERO CANVAS — grid + particles
    const canvas = document.getElementById('heroCanvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust particle count for perf
      particles.length = 0;
      const w = window.innerWidth;
      const count = w < 768 ? 60 : w < 1024 ? 90 : 120;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.3,
          alpha: Math.random() * 0.6 + 0.1,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      const gs = 60;
      ctx.strokeStyle = 'rgba(0,245,255,0.035)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gs) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gs) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Scanline
      const sy = ((time * 0.3) % canvas.height) as number;
      const sg = ctx.createLinearGradient(0, sy - 40, 0, sy + 40);
      sg.addColorStop(0, 'rgba(0,245,255,0)');
      sg.addColorStop(0.5, 'rgba(0,245,255,0.04)');
      sg.addColorStop(1, 'rgba(0,245,255,0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 40, canvas.width, 80);

      // Particles + connections
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,245,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Hex nodes (static positions)
      const hexes = [
        { x: 0.15, y: 0.2 },
        { x: 0.85, y: 0.3 },
        { x: 0.1, y: 0.75 },
        { x: 0.92, y: 0.7 },
        { x: 0.5, y: 0.9 },
        { x: 0.5, y: 0.05 },
      ];
      hexes.forEach((h, i) => {
        const hx = h.x * canvas.width;
        const hy = h.y * canvas.height;
        const pulse = Math.sin(time * 0.02 + i * 1.3) * 0.5 + 0.5;

        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const ang = (a * Math.PI) / 3 - Math.PI / 6;
          ctx.lineTo(hx + 16 * Math.cos(ang), hy + 16 * Math.sin(ang));
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0,245,255,${0.08 + pulse * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(hx, hy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${0.3 + pulse * 0.4})`;
        ctx.fill();
      });

      // Vignette
      const rg = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.height * 0.1,
        canvas.width / 2,
        canvas.height / 2,
        canvas.height * 0.8
      );
      rg.addColorStop(0, 'rgba(5,5,5,0)');
      rg.addColorStop(1, 'rgba(5,5,5,0.7)');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time++;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Cursor elements */}
      <div id="cursor" />
      <div id="cursor-ring" />

      {/* Scroll progress */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Preloader */}
      <div id="preloader">
        <div className="logo-text">SK</div>
        <div className="bar-wrap">
          <div className="bar" />
        </div>
        <div className="status" id="preload-status">
          [ INITIALIZING SECURITY... ]
        </div>
      </div>

      {/* Global inline styles for template effects (cursor/preloader/reveal/animations) */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        #cursor {
          position: fixed;
          width: 8px;
          height: 8px;
          background: var(--cyan, #00f5ff);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          display: none;
          transform: translate(-50%, -50%);
          transition: width 0.15s, height 0.15s, opacity 0.15s;
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.4), 0 0 60px rgba(0, 245, 255, 0.15);
        }
        #cursor-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(0, 245, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          display: none;
          transform: translate(-50%, -50%);
          transition: transform 0.08s linear, width 0.2s, height 0.2s,
            border-color 0.2s;
        }
        #scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: 0 50%;
          background: linear-gradient(90deg, #00f5ff, #3b82f6, #8b5cf6);
          box-shadow: 0 0 12px rgba(0, 245, 255, 0.6);
          z-index: 99997;
          pointer-events: none;
        }
        @media (hover: hover) and (pointer: fine) {
          #cursor,
          #cursor-ring {
            display: block;
          }
        }
        #preloader {
          position: fixed;
          inset: 0;
          background: #050505;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        #preloader .logo-text {
          font-family: Orbitron, monospace;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #00f5ff, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.3em;
        }
        #preloader .bar-wrap {
          width: 260px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        #preloader .bar {
          height: 100%;
          background: linear-gradient(90deg, #00f5ff, #3b82f6, #8b5cf6);
          width: 0;
          animation: loadbar 2s ease-out forwards;
        }
        #preloader .status {
          font-family: JetBrains Mono, monospace;
          font-size: 0.7rem;
          color: #00f5ff;
          opacity: 0.7;
          letter-spacing: 0.1em;
        }
        @keyframes loadbar {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </>
  );
}

