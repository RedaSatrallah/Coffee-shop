/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require("tailwindcss/defaultTheme");
export default { 
content: [ 
"./src/**/*.{html,ts}", 
], 
theme: { 
extend: {
    fontFamily: {
        "instrument-serif": ["Instrument Serif", ...defaultTheme.fontFamily.serif],
        "instrument-sans": ["Instrument Sans", ...defaultTheme.fontFamily.sans],
}, 
 colors: {
        'peach': '#E6C7B3',
        "peach-light":"#FFF3EB"
      },
}, 
plugins: [], 
}
}