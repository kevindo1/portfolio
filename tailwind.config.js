module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/banner.png')",
        arrow: "url('/public/assets/arrow.png')",
        profile: "url('/public/assets/profile.png')",
      },
      animation: {
        bounce: 'bounce 2.2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
