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
      animation: {
        bounce: 'bounce 2.2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
