# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Extra Features](#extra-features) 🆕
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [Installation & Setup](#installation--setup)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Extra Features
- Products are rendered dynamically, **NOT** hard-coded. The data lives in `./src/constants/index.ts`
- By simply adding other **Product objects** to the array, you'll have multiple products rendered with individual states.
- Users can add, and manage multiple products in their cart.
- This project features many reusable components. Therefore, future expansion/completion is made easy.

### Screenshot

#### Default Desktop view

![](./demo/default-desktop.png)

#### Multi-product cart view

![](./demo/cart-view.png)

#### Mobile view

![](./demo/nav-mobile.png)
![](./demo/product-in-cart-mobile.png)



### Links

-  Solution URL: [Repo URL](https://github.com/corneliusweb/sneakers)
-  Live Site URL: [Sneakers](https://cornelius-sneakers.vercel.app/)

## Installation & Setup

### Prerequisites

-  Node.js (v20 or higher)
-  pnpm (v10 or higher) or npm (v10 or higher)
-  Git

### Environment Setup

-  This project was created with pnpm, but you can use any package manager:

1. Clone the repository:

   ```bash
   git clone https://github.com/corneliusweb/sneakers.git
   cd sneakers
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

In the project directory, you can run:

-  `pnpm dev` or `npm run dev`

   -  Runs the app in development mode
   -  Open [http://localhost:5173](http://localhost:5173) to view it in the browser
   -  The page will reload when you make changes

-  `pnpm build` or `npm run build`

   -  Builds the app for production to the `dist` folder
   -  It correctly bundles React in production mode and optimizes the build for the best performance
   -  The build is minified and the filenames include the hashes

-  `pnpm preview` or `npm run preview`

   -  Locally preview the production build
   -  Serves the built files from the `dist` folder

-  `pnpm lint` or `npm run lint`
   -  Runs ESLint to check for code quality issues

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript v5.8.3](https://typescript.org) - A JavaScript subset
- [Tailwindcss v4.1](https://tailwindcss.com/) - CSS framework
- Semantic HTML5 markup
- Mobile-first workflow


### What I learned

I learned how to leverage on `useContext` to provide, and access values across the entire product.

This project also thought me the importance of building a product from the visionary point of view. What this means is that, I built this project by have in mind, the possibility of wanting to expand this project later on in my learning journey, which made me to build it in that respect.

This project also helped me to build my TypeScript muscle memory and practice type safety as much as possible.

### Continued development

I am 100% positive that I want to extend this project in the nearest future. I want to build the page for all of the links in the top navigation.

Due to the structuring of the project, building the remaining pages will be very easy and a cool experience. I just can't wait to work on this as soon as I can.


### Useful resources

- [Total TypeScript](https://totaltypescript.com) - This helped me to browse the types to use and in which scenario to do so.

## Author

-  Website - [corneliusweb](https://github.com/corneliusweb)
-  Twitter(X) - [@corneliusweb](https://x.com/corneliusweb_)