module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/assets/banner.png')",
        arrow: "url('/public/assets/arrow.png')",
        profile: "url('/public/assets/profile.png')",
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
