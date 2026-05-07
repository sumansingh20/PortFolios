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
        'cyber-black': '#050505',
        'cyber-navy': '#0B1120',
        'cyber-cyan': '#00F5FF',
        'cyber-blue': '#3B82F6',
        'cyber-purple': '#8B5CF6',
        'cyber-emerald': '#10B981',
        'dark-bg': '#0F0F1E',
        'card-dark': '#1A1A2E',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00F5FF 0%, #3B82F6 50%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #050505 0%, #0B1120 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 245, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 245, 255, 0.6)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(30px) translateY(-20px)' },
          '50%': { transform: 'translateX(0) translateY(30px)' },
          '75%': { transform: 'translateX(-30px) translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
