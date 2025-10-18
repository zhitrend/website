# Tank Helper Website

This is the official website for Tank Helper, a WOTBot assistant for World of Tanks.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design that works on all devices
- Modern UI with dark mode support
- Smooth animations and transitions
- SEO optimized
- Easy to customize and extend

## Customization

### Colors

Edit the `tailwind.config.js` file to change the color scheme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Change this to your primary color
          dark: '#2563eb',
        },
        // ...
      },
    },
  },
}
```

### Content

- Update the homepage content in `src/pages/index.js`
- Add new pages in the `src/pages` directory
- Customize the layout in `src/components/Layout.jsx`
- Update styles in `src/styles/globals.css`

## Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

Deploy to Vercel, Netlify, or any other static hosting service.

## License

MIT
