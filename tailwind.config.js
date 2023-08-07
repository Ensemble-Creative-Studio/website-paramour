/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        screen: ['100vh ', '100vh'],
      },
      fontSize: {
        'h1-mobile': ['4.2rem', {
      lineHeight:'83%',
          fontWeight: '300',
        }],
    
        'p-bigger-font-size': ['clamp(13px, calc(14px + 0.38vw), 21px)', {
      
          fontWeight: '400',
        }],
    
      },
    },

  },
  plugins: [],
}
