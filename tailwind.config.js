module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
      container: {
          padding: {
              DEFAULT: '12rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
          },
      },
      extend: {
        fontSize: {
          '10xl': '10rem',
        },
        letterSpacing: {
          tightest: '-.06em',
        },
        gradientColorStops: {
            'gradient-1-start': '#FF4D4D',
            'gradient-1-end': '#F9CB28',
            'gradient-2-start': '#7928CA',
            'gradient-2-end': '#FF0080',
            'gradient-3-start': '#007CF0',
            'gradient-3-end': '#00DFD8',
          },
          keyframes: {
            'gradient-foreground-1': {
              'from, 16.667%, to': {
                opacity: 1,
              },
              '33.333%, 83.333%': {
                opacity: 0,
              },
            },
            'gradient-background-1': {
              'from, 16.667%, to': {
                opacity: 0,
              },
              '25%, 91.667%': {
                opacity: 1,
              },
            },
            'gradient-foreground-2': {
              'from, to': {
                opacity: 0,
              },
              '33.333%, 50%': {
                opacity: 1,
              },
              '16.667%, 66.667%': {
                opacity: 0,
              },
            },
            'gradient-background-2': {
              'from, to': {
                opacity: 1,
              },
              '33.333%, 50%': {
                opacity: 0,
              },
              '25%, 58.333%': {
                opacity: 1,
              },
            },
            'gradient-foreground-3': {
              'from, 50%, to': {
                opacity: 0,
              },
              '66.667%, 83.333%': {
                opacity: 1,
              },
            },
            'gradient-background-3': {
              'from, 58.333%, 91.667%, to': {
                opacity: 1,
              },
              '66.667%, 83.333%': {
                opacity: 0,
              },
            },
          },
          animation: {
            'gradient-background-1': 'gradient-background-1 4s infinite',
            'gradient-foreground-1': 'gradient-foreground-1 4s infinite',
            'gradient-background-2': 'gradient-background-2 4s infinite',
            'gradient-foreground-2': 'gradient-foreground-2 4s infinite',
            'gradient-background-3': 'gradient-background-3 4s infinite',
            'gradient-foreground-3': 'gradient-foreground-3 4s infinite',
          }
      },
  },
  daisyui: {
      darkTheme: "customBlack",
      themes: [{
          customBlack: {
              "primary": "#343232",
              "primary-focus": "#2a2828",
              "primary-content": "#d8d4d4",
              "secondary": "#343232",
              "secondary-focus": "#2a2828",
              "secondary-content": "#d8d4d4",
              "accent": "#343232",
              "accent-focus": "#2a2828",
              "accent-content": "#d8d4d4",
              "neutral": "#272626",
              "neutral-focus": "#343232",
              "neutral-content": "#d5d3d3",
              "base-100": "#000000",
              "base-200": "#0d0d0d",
              "base-300": "#1a1919",
              "base-content": "#cccccc",
              "info": "#0000ff",
              "info-content": "#ccccff",
              "success": "#008000",
              "success-content": "#b3ffb3",
              "warning": "#ffff00",
              "warning-content": "#333300",
              "error": "#ff0000",
              "error-content": "#ffcccc"
          },
        }
      ],
  },
};