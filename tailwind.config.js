module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/banner.png')",
        arrow: "url('/public/assets/arrow.png')",
        profile: "url('/public/assets/profile.png')",
        whitecoat: "url('/public/assets/whitecoat.png')",
        sky: "url('/public/assets/sky.png')",
        mountain: "url('/public/assets/mountain.jpg')",
        bridge: "url('/public/assets/bridge.png')",
        alaska: "url('/public/assets/alaska.png')",
        reflection: "url('/public/assets/reflection.png')",
        valley: "url('/public/assets/valley.png')",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%': {
            opacity: '.3',
          },
          '100%': {
            opacity: '.3',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
      animation: {
        bounce: 'bounce 2.2s infinite',
        'fade-in-down': 'fade-in-down 4s ease-out',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
