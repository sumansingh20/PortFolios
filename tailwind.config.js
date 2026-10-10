/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#05060b',
        'cyber-navy': '#0a0d18',
        'cyber-cyan': '#22d3ee',
        'cyber-blue': '#5b8def',
        'cyber-purple': '#a855f7',
        'cyber-emerald': '#34d399',
        'cyber-pink': '#f472b6',
        'dark-bg': '#0b0e18',
        'card-dark': '#111527',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'satoshi': ['var(--font-space-grotesk)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'jetbrains': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.35)',
        'glow-blue': '0 0 30px rgba(91, 141, 239, 0.35)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.35)',
        'glow-emerald': '0 0 30px rgba(52, 211, 153, 0.35)',
      },
      backgroundImage: {
        'gradient-cyber':
          'linear-gradient(120deg, #22d3ee 0%, #5b8def 45%, #a855f7 100%)',
        'gradient-dark':
          'linear-gradient(160deg, #05060b 0%, #0a0d18 55%, #0b1024 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'drift': 'drift 16s ease-in-out infinite',
        'aurora': 'aurora 18s ease-in-out infinite alternate',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 24px rgba(34, 211, 238, 0.28)' },
          '50%': { 'box-shadow': '0 0 50px rgba(34, 211, 238, 0.55)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(40px, -30px) scale(1.06)' },
          '50%': { transform: 'translate(0, 40px) scale(0.98)' },
          '75%': { transform: 'translate(-40px, -10px) scale(1.04)' },
        },
        aurora: {
          '0%': { transform: 'translate3d(-8%, -4%, 0) rotate(0deg) scale(1.1)' },
          '50%': { transform: 'translate3d(6%, 5%, 0) rotate(8deg) scale(1.2)' },
          '100%': { transform: 'translate3d(-4%, 6%, 0) rotate(-6deg) scale(1.15)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
