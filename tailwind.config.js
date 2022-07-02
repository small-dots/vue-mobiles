/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 14:58:03
 * @Description: 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],//移除生产环境下没有使用到的样式声明
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
