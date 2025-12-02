# Web Development for Dummies

Welcome! This guide explains how each version of our application is built and run, in simple terms. Think of this as your "User Manual" for understanding the code.


# Terms

- **Entry Point**: The first file that the browser loads to start running your code.
- **Build**: The process of converting code from one format to another (e.g., from TypeScript to JavaScript).
- **Run**: The process of executing code in a browser or on a device.
- **Server**: A computer that runs a program called a "web server" to serve files to other computers (like your browser).
- **Local Server**: A server that runs on your computer, so you can test your code without connecting to the internet.
- **CDN**: A Content Delivery Network is a system of computers that store copies of files and serve them to users based on their location.
- **Package Manager**: A tool that helps you install and manage packages (libraries) that you need for your project.
- **npm**: The Node Package Manager is a package manager for JavaScript packages.
- **Node.js**: A runtime environment that allows you to run JavaScript code on your computer.
- **TypeScript**: A programming language that is a superset of JavaScript and adds optional static typing.
- **React**: A JavaScript library for building user interfaces.
- **Angular**: A JavaScript framework for building web applications.
- **Next.js**: A React framework for building server-rendered web applications.
- **React Native**: A framework for building mobile applications using React.
- **Expo**: A framework for building mobile applications using React.
- **JS**: JavaScript
- **TS**: TypeScript
- **HTML**: HyperText Markup Language
- **CSS**: Cascading Style Sheets
- **UI**: User Interface
- **UX**: User Experience
- **SSR**: Server-Side Rendering
- **RSC**: React Server Component
- **CLI**: Command Line Interface
- **DOM**: Document Object Model. The tree structure of the HTML page that the browser creates.
- **SPA**: Single Page Application. A website that loads a single HTML page and dynamically updates that page as the user interacts with the app (used in React, Angular, etc.).
- **Component**: A reusable piece of code that represents a part of the user interface (like a button or a card).
- **JSX/TSX**: A syntax extension for JavaScript/TypeScript that looks like HTML, used in React to describe what the UI should look like.
- **Hooks**: Functions that let you "hook into" React state and lifecycle features from function components (e.g., `useState`).
- **Props**: Short for "properties". Data passed from a parent component to a child component.
- **State**: Data that is managed within a component and can change over time (like a counter value).
- **Transpiling**: The process of converting source code from one language to another (e.g., TypeScript to JavaScript, or modern JS to older JS).


## Base Tags
- **DOCTYPE**: Technically a declaration, not a tag. It tells the browser which version of HTML the page is written in. In modern web development, `<!DOCTYPE html>` triggers "standard mode" for HTML5.
- **html**: Root element of an HTML page. It is the container for all other elements on the page.
- **head**: Contains meta information, title, and links to external resources.
- **meta**: Provides metadata about the document, such as character encoding, description, and viewport settings.
- **title**: Specifies a title for the document, which is displayed in the browser tab.
- **link**: Establishes a relationship between the current document and an external resource, such as a stylesheet or favicon.
- **body**: Contains all visible content of a web page. Everything you see on a screen—text, images, buttons, and videos—must be placed inside this tag.
- **nav**: A semantic tag used specifically for a block of navigation links. It tells screen readers and search engines that this section contains the primary menu or links to navigate the site.
- **main**: Specifies the dominant content of the `<body>`. There should generally be only one `<main>` tag per page, and it should exclude repeated content like sidebars, navigation bars, or footers.
- **script**: Used to embed or reference executable code, typically JavaScript. This adds interactivity to the page. It can contain code directly between the tags or link to an external `.js` file via the `src` attribute.

## jQuery & TypeScript (Special Cases)
These tools do not technically introduce new "tags" in the UI sense, but they modify how tags are handled.

- **`$(selector)`**: (jQuery) Not a tag, but a wrapper function. While jQuery doesn't create `<jquery>` tags, it wraps existing HTML tags (e.g., `$('div')`) to give them extra functionality.
- **`<script lang="ts">`**: (TypeScript in Vue/Svelte) Standard HTML tags modified with attributes. This tells the build tool to treat the code inside the script tag as TypeScript rather than standard JavaScript.
- **Generics `<T>`**: (TypeScript) Syntactically looks like a tag, but is used in code logic to define types (e.g., `Array<string>`). It is stripped out during compilation and never appears in the browser.

## Vue.js & Angular
These frameworks often use "Single File Components" or templates that introduce unique structural tags.

- **`<template>`**: (Vue.js) The wrapper tag that holds the HTML structure of a Vue component. In Vue 3, this can hold multiple root nodes.
- **`<slot>`**: (Vue.js / Web Components) A placeholder inside a component that allows you to pass in content from the parent. It acts as an outlet for "content projection."
- **`<router-link>`**: (Vue.js) The Vue equivalent of an anchor tag. It enables navigation between pages without reloading the browser.
- **`<ng-container>`**: (Angular) A grouping element that does not get rendered in the DOM. It is useful for applying logic (like `*ngIf` or `*ngFor`) without adding extra `<div>` elements to your layout.
- **`<ng-content>`**: (Angular) Similar to the Vue `<slot>`, this tag is used to project content from a parent component into the view of a child component.
- **`<router-outlet>`**: (Angular) A placeholder tag that marks the spot in the template where the router should display the components for the current URL.

## React & Next.js Ecosystem
React uses JSX (JavaScript XML), which allows you to write HTML-like syntax in JavaScript. Next.js extends React with server-side features.

- **`<Fragment>`** or **`<>`**: (React) A "ghost" tag that lets you group a list of children without adding extra nodes (like an unnecessary `<div>`) to the DOM.
- **`<Suspense>`**: (React) Allows you to display a fallback UI (like a loading spinner) while the component tree inside it is finishing loading (fetching data or code).
- **`<StrictMode>`**: (React) A tool for development only. It creates a wrapper around components to highlight potential problems, activating additional checks and warnings.
- **`<Link>`**: (Next.js) Replaces the standard HTML `<a>` tag for client-side transitions. It prefetches linked pages in the background to make navigation instant.
- **`<Image>`**: (Next.js) A replacement for the `<img>` tag. It automatically resizes, optimizes, and serves images in modern formats (like WebP) to improve page load speed.
- **`<Head>`**: (Next.js Pages Router) A built-in component that allows you to append elements (like `<title>` or `<meta>`) to the `<head>` of the page from within a component body.

## React Native (Mobile Development)
React Native does not use HTML tags. It uses native primitives that map to iOS and Android UI views.

- **`<View>`**: (React Native) The fundamental building block of the UI, similar to an HTML `<div>`. It is a container that supports layout with Flexbox, styling, and touch handling.
- **`<Text>`**: (React Native) The only component used to display text. Unlike the web, you cannot place text directly inside a `<View>`; it must be wrapped in `<Text>`.
- **`<ScrollView>`**: (React Native) A generic scrolling container. Unlike web browsers where pages scroll by default, in mobile apps, you must explicitly use this tag to enable scrolling.
- **`<TouchableOpacity>`**: (React Native) A wrapper for making views respond properly to touches. It reduces the opacity of the wrapped view when pressed (creating a button-like effect).

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <a href="#/world-clock">World Clock</a>
        <a href="#/timer">Timer</a>
        <a href="#/countdown">Countdown</a>
    </nav>
    <main id="app"></main>
    <script src="scripts.js"></script>
</body>
</html>

```

---

## 1. Vanilla JavaScript (The Basics)
**What is it?**
The simplest way to build a website. Just plain code that the browser understands directly. No "compiling" or "building" needed.

**Where is the entry point?**
- **File**: `javascript/index.html`
- **How it works**: When you open this file in Chrome or Firefox, the browser reads the HTML to draw the page and then loads `scripts.js` to make it interactive.

**How to run it?**
- Double-click `index.html` to open it in your browser.
- OR run a simple server (like `python -m http.server`) and go to `http://localhost:8000`.

---

## 2. jQuery (The Helper)
**What is it?**
Just like Vanilla JS, but we use a library called "jQuery" that makes writing code shorter and easier (e.g., `$('#id')` instead of `document.getElementById('id')`).

**Where is the entry point?**
- **File**: `jquery/index.html`
- **How it works**: The HTML file loads the jQuery library from the internet (CDN) and then loads our `main.js`.

**How to run it?**
- Same as Vanilla JS: Open `index.html` in your browser.

---

## 3. TypeScript (The Strict Teacher)
**What is it?**
JavaScript with "types". It checks your code for errors *before* you run it. Browsers can't read TypeScript, so we have to translate (compile) it into JavaScript first.

**Where is the entry point?**
- **Source**: `typescript/src/main.ts` (This is where we write code).
- **Browser Entry**: `typescript/index.html` (This loads the *translated* code).

**How to run it?**
1.  **Install**: `npm install` (gets the tools).
2.  **Compile**: `npm run build` (translates TS to JS in the `/dist` folder).
3.  **Run**: Open `index.html` in your browser.

> [!NOTE]
> **Troubleshooting**: If you see an error like `File ... cannot be loaded because running scripts is disabled`, run this command in PowerShell once:
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`


---

## 4. Angular (The Factory)
**What is it?**
A massive, all-in-one framework by Google. It has strict rules and provides everything you need (routing, styling, logic) out of the box.

**Where is the entry point?**
- **File**: `angular/src/index.html` (The main container).
- **Logic**: `angular/src/main.ts` (Starts the "Angular machine").
- **App**: `angular/src/app/app.component.ts` (The root component).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `ng serve`.
3.  **View**: Go to `http://localhost:4200`.

---

## 5. React (The Lego Builder)
**What is it?**
A library by Meta (Facebook) for building user interfaces. You build small "components" (like Lego blocks) and stick them together.

**Where is the entry point?**
- **File**: `react/index.html` (The empty box).
- **Logic**: `react/src/main.tsx` (Puts the React app into the box).
- **App**: `react/src/App.tsx` (The main collection of blocks).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:5173`.

---

## 6. Next.js (The Modern Web)
**What is it?**
A framework built *on top of* React. It adds "Server-Side Rendering" (SSR), which means the server builds the page before sending it to you. It's faster and better for SEO.

**Where is the entry point?**
- **File**: `nextjs/app/layout.tsx` (The outer shell of every page).
- **Home**: `nextjs/app/page.tsx` (The home page content).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:3000`.

---

## 7. Vue.js (The Progressive Framework)
**What is it?**
A framework that is designed to be incrementally adoptable. It focuses on the view layer and is very easy to pick up. It uses a template syntax that looks like HTML.

**Where is the entry point?**
- **File**: `vue/index.html` (The entry HTML).
- **Logic**: `vue/src/main.ts` (Initializes the Vue app).
- **App**: `vue/src/App.vue` (The main component).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:5173`.

---

## 8. React Native (The Mobile App)
**What is it?**
React, but for phones (iOS and Android). Instead of HTML tags like `<div>`, we use mobile tags like `<View>`.

**Where is the entry point?**
- **File**: `react-native/app/index.tsx` (The first screen you see).
- **Config**: `react-native/app.json` (Settings for the app name, icon, etc.).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npx expo start`.
3.  **View**: Scan the QR code with your phone (using the Expo Go app).
