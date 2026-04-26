/** @type {import('tailwindcss').Config} */

/*
  Keyla Paguaga Jarquin

  Tailwind configuration file.
  Extended with custom colours and fonts
  from Assignment 1 design system.
*/

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {

      /* Custom colours from Assignment 1 */
      colors: {
        primary: '#2D2D2D',
        secondary: '#9CA3AF',
        accent: '#F97B6B',
        background: '#FAFAFA',
        surface: '#F3F4F6',
        textmain: '#111827',
      },

      /* Custom fonts from Assignment 1 */
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },

    },
  },

  plugins: [],
};