# Web Development for Dummies

Welcome! This guide explains how each version of our application is built and run, in simple terms. Think of this as your "User Manual" for understanding the code.


# Terms

*   **Entry Point**: The first file that the browser loads to start running your code.
*   **Build**: The process of converting code from one format to another (e.g., from TypeScript to JavaScript).
*   **Run**: The process of executing code in a browser or on a device.
*   **Server**: A computer that runs a program called a "web server" to serve files to other computers (like your browser).
*   **Local Server**: A server that runs on your computer, so you can test your code without connecting to the internet.
*   **CDN**: A Content Delivery Network is a system of computers that store copies of files and serve them to users based on their location.
*   **Package Manager**: A tool that helps you install and manage packages (libraries) that you need for your project.
*   **npm**: The Node Package Manager is a package manager for JavaScript packages.
*   **Node.js**: A runtime environment that allows you to run JavaScript code on your computer.
*   **TypeScript**: A programming language that is a superset of JavaScript and adds optional static typing.
*   **React**: A JavaScript library for building user interfaces.
*   **Angular**: A JavaScript framework for building web applications.
*   **Next.js**: A React framework for building server-rendered web applications.
*   **React Native**: A framework for building mobile applications using React.
*   **Expo**: A framework for building mobile applications using React.
*   **JS** - JavaScript
*   **TS** - TypeScript
*   **HTML** - HyperText Markup Language
*   **CSS** - Cascading Style Sheets
*   **UI** - User Interface
*   **UX** - User Experience
*   **SSR** - Server-Side Rendering
*   **RSC** - React Server Component
*   **CLI** - Command Line Interface
*   **DOM**: Document Object Model. The tree structure of the HTML page that the browser creates.
*   **SPA**: Single Page Application. A website that loads a single HTML page and dynamically updates that page as the user interacts with the app (used in React, Angular, etc.).
*   **Component**: A reusable piece of code that represents a part of the user interface (like a button or a card).
*   **JSX/TSX**: A syntax extension for JavaScript/TypeScript that looks like HTML, used in React to describe what the UI should look like.
*   **Hooks**: Functions that let you "hook into" React state and lifecycle features from function components (e.g., `useState`).
*   **Props**: Short for "properties". Data passed from a parent component to a child component.
*   **State**: Data that is managed within a component and can change over time (like a counter value).
*   **Transpiling**: The process of converting source code from one language to another (e.g., TypeScript to JavaScript, or modern JS to older JS).

---

## 1. Vanilla JavaScript (The Basics)
**What is it?**
The simplest way to build a website. Just plain code that the browser understands directly. No "compiling" or "building" needed.

**Where is the entry point?**
*   **File**: `javascript/index.html`
*   **How it works**: When you open this file in Chrome or Firefox, the browser reads the HTML to draw the page and then loads `scripts.js` to make it interactive.

**How to run it?**
*   Double-click `index.html` to open it in your browser.
*   OR run a simple server (like `python -m http.server`) and go to `http://localhost:8000`.

---

## 2. jQuery (The Helper)
**What is it?**
Just like Vanilla JS, but we use a library called "jQuery" that makes writing code shorter and easier (e.g., `$('#id')` instead of `document.getElementById('id')`).

**Where is the entry point?**
*   **File**: `jquery/index.html`
*   **How it works**: The HTML file loads the jQuery library from the internet (CDN) and then loads our `main.js`.

**How to run it?**
*   Same as Vanilla JS: Open `index.html` in your browser.

---

## 3. TypeScript (The Strict Teacher)
**What is it?**
JavaScript with "types". It checks your code for errors *before* you run it. Browsers can't read TypeScript, so we have to translate (compile) it into JavaScript first.

**Where is the entry point?**
*   **Source**: `typescript/src/main.ts` (This is where we write code).
*   **Browser Entry**: `typescript/index.html` (This loads the *translated* code).

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
*   **File**: `angular/src/index.html` (The main container).
*   **Logic**: `angular/src/main.ts` (Starts the "Angular machine").
*   **App**: `angular/src/app/app.component.ts` (The root component).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `ng serve`.
3.  **View**: Go to `http://localhost:4200`.

---

## 5. React (The Lego Builder)
**What is it?**
A library by Meta (Facebook) for building user interfaces. You build small "components" (like Lego blocks) and stick them together.

**Where is the entry point?**
*   **File**: `react/index.html` (The empty box).
*   **Logic**: `react/src/main.tsx` (Puts the React app into the box).
*   **App**: `react/src/App.tsx` (The main collection of blocks).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:5173`.

---

## 6. Next.js (The Modern Web)
**What is it?**
A framework built *on top of* React. It adds "Server-Side Rendering" (SSR), which means the server builds the page before sending it to you. It's faster and better for SEO.

**Where is the entry point?**
*   **File**: `nextjs/app/layout.tsx` (The outer shell of every page).
*   **Home**: `nextjs/app/page.tsx` (The home page content).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:3000`.

---

## 7. Vue.js (The Progressive Framework)
**What is it?**
A framework that is designed to be incrementally adoptable. It focuses on the view layer and is very easy to pick up. It uses a template syntax that looks like HTML.

**Where is the entry point?**
*   **File**: `vue/index.html` (The entry HTML).
*   **Logic**: `vue/src/main.ts` (Initializes the Vue app).
*   **App**: `vue/src/App.vue` (The main component).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npm run dev`.
3.  **View**: Go to `http://localhost:5173`.

---

## 8. React Native (The Mobile App)
**What is it?**
React, but for phones (iOS and Android). Instead of HTML tags like `<div>`, we use mobile tags like `<View>`.

**Where is the entry point?**
*   **File**: `react-native/app/index.tsx` (The first screen you see).
*   **Config**: `react-native/app.json` (Settings for the app name, icon, etc.).

**How to run it?**
1.  **Install**: `npm install`.
2.  **Run**: `npx expo start`.
3.  **View**: Scan the QR code with your phone (using the Expo Go app).
