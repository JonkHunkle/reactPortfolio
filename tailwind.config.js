module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        megaspin: {
          '0% 100%': {
            transform: 'scaleX(1)'
          }, '50%': {
            transform: 'scaleX(-1)'
          }

        }

      }
    }, animation: {
      megaspin: 'megaspin 3s infinite'
    }

  },
  plugins: [require("daisyui")],
}
