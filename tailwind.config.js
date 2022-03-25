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
        alaska: "url('/public/assets/alaska.jpeg')",
        reflection: "url('/public/assets/reflection.png')",
        valley: "url('/public/assets/valley.png')",
        ak: "url('/public/photography/ak.jpeg')",
        az: "url('/public/photography/az.jpeg')",
        co: "url('/public/photography/co.jpeg')",
        hi: "url('/public/photography/hi.jpeg')",
        pr: "url('/public/photography/pr.jpeg')",
        ut: "url('/public/photography/ut.jpeg')",
        wa: "url('/public/photography/wa.jpeg')",
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
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.3',
          },
        },
      },
      animation: {
        bounce: 'bounce 2.2s infinite',
        'fade-in-down': 'fade-in-down 4s ease-out',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) 5;',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
