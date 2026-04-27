module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          slate: '#050814',
          night: '#070a13',
          neon: '#22d3ee',
          emerald: '#10b981',
          glow: '#7dd3fc',
          portal: '#0f172a'
        }
      },
      boxShadow: {
        panel: '0 24px 120px rgba(0, 0, 0, 0.45)',
        neon: '0 0 40px rgba(34, 211, 238, 0.22), 0 0 18px rgba(16, 185, 129, 0.12)'
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle at top, rgba(34, 211, 238, 0.15), transparent 28%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 16%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 40%)'
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        flicker: 'flicker 3.5s linear infinite',
        pulse: 'pulseGlow 2.7s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '0.98', filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.32)) drop-shadow(0 0 24px rgba(16,185,129,0.14))' },
          '20%, 24%, 55%': { opacity: '0.4', filter: 'none' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,211,238,0.18)' },
          '50%': { boxShadow: '0 0 28px 10px rgba(16,185,129,0.16)' }
        }
      }
    }
  },
  plugins: []
};
