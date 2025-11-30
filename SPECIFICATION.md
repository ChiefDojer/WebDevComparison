# Web Mobile Development Architecture Specification

## Role
You are a frontend architect designing a comparative study of frontend technologies.

## Objective
Implement three simple apps — World Clock, Timer, and Countdown — with *identical UX and feature parity* across multiple frontend technologies:

- JavaScript (Vanilla)
- jQuery
- TypeScript
- Angular
- React (Web)
- Next.js (Web - App Router)
- React Native (Expo)

Each implementation must live under its own folder (/javascript, /jquery, /typescript, /angular, /react, /nextjs, /react-native).

## Tasks
1) Scaffold the minimal project for the given technology.
2) Implement all three apps (world-clock, timer, countdown) with the same UX logic.
3) Provide:
   - Source code (file-by-file)
   - Instructions to run and build
   - Metrics checklist (setup time, LoC, bundle size, performance, etc.)
4) Maintain parity:
   - No external time/date libs
   - No state management or UI frameworks unless intrinsic (Angular, React)
   - Consistent styling and UX behavior across all stacks

## Deliverables
- Source code and minimal README per technology
- `metrics.json` conforming to the shared schema
- Notes on trade-offs (setup, development, DX, performance)

## UX Requirements (Apply exactly)
- **World Clock**: Add/remove timezones (IANA), local pinned, 24h with seconds.
- **Timer**: Start/Stop/Reset, `Space` toggles, `R` resets.
- **Countdown**: Input future datetime, count down, “Done” flash when zero.

## Project Scope Summary

### Goal
Compare frontend technologies by implementing the **same three small apps** (World Clock, Timer, Countdown) using **different stacks**, analyzing real-world differences in setup, complexity, and developer experience.

---

## Technologies & Platforms

| Technology               | Output Type                     | Platform Target | Build Mode                          |
| ------------------------ | ------------------------------- | --------------- | ----------------------------------- |
| **JavaScript (Vanilla)** | ✅ Single Page Application (SPA) | Web             | Static (no bundler)                 |
| **jQuery**               | ✅ SPA                           | Web             | Static (no bundler, direct browser) |
| **TypeScript**           | ✅ SPA                           | Web             | Static (compiled TS → JS via `tsc`) |
| **Angular**              | ✅ SPA                           | Web             | Built with Angular CLI              |
| **React**                | ✅ SPA                           | Web             | Built with Vite or CRA              |
| **Next.js**              | ✅ SPA / SSR                     | Web             | Built with Next.js (App Router)     |
| **React Native (Expo)**  | ✅ Mobile Application            | iOS / Android   | Built via Expo CLI                  |

---

## Implementation Consistency

All web stacks (JS → React) should:

* Use **identical routing structure** (e.g. `/world-clock`, `/timer`, `/countdown`).
* Be packaged as **Single Page Applications** (SPA):
  * Client-side navigation
  * Shared layout (simple navbar or tabs)
  * Common styling baseline (no external CSS frameworks)
* Use **pure frontend logic only** — no backend or API calls.
* Stay **framework-pure** — don’t mix stacks (e.g., don’t use React inside Angular).

React Native will:

* Follow the same **app navigation structure** (3 screens).
* Use **mobile-optimized layout and touch interactions**.
* Run inside Expo for parity of developer setup and testing.

---

## Unified App Trio

| App             | Key Features (Same in All Stacks)                                                           |
| --------------- | ------------------------------------------------------------------------------------------- |
| **World Clock** | Add/remove timezones (IANA), local timezone pinned, 24h with seconds, smooth tick updates.  |
| **Timer**       | Count up from 00:00.00, Start/Stop/Reset, shortcuts (`Space`, `R`), continuous rendering.   |
| **Countdown**   | Input future local time, live remaining `DD:HH:MM:SS`, visual flash + “Done” label at zero. |

---

## Repo Structure (Finalized)

```
/frontend-comparison
  /javascript        # Vanilla JS SPA
  /jquery            # jQuery SPA
  /typescript        # TS SPA
  /angular           # Angular SPA
  /react             # React SPA
  /nextjs            # Next.js App (SSR/RSC)
  /react-native      # Mobile app (Expo)
  /backend           # Backend API (Node.js) [Placeholder]
  /database          # Database Schemas [Placeholder]
  /shared
    ui-guidelines.md
    metrics.schema.json
    prompts/
  README.md          # High-level comparison summary
```

---

## Comparison Framework (applies to each tech)

| Category                 | Metrics                                            |
| ------------------------ | -------------------------------------------------- |
| **Setup & Tooling**      | Setup Time, Build Steps, Dependencies              |
| **Development**          | Implementation Speed, Code Complexity (LoC, files) |
| **Performance**          | Load Time (or Cold Start), Runtime Smoothness      |
| **Maintainability**      | Readability, Scalability                           |
| **Developer Experience** | Tooling, Hot Reload, Error Feedback                |
| **Learning Curve**       | Subjective (1–5)                                   |
| **Bundle Size**          | Production build output (KB/MB)                    |

---

## Output Format per Technology Folder

* `/world-clock`, `/timer`, `/countdown` apps implemented as SPA modules or routes
* `README.md` — explains:
  * How to install / run / build
  * Recorded metrics
  * Observations (pros, cons, DX)
* `metrics.json` — values for setup time, LoC, bundle size, etc.
* Optional: screenshots or GIFs for visual comparison.

---

## Final Summary

* **All Web stacks → SPA**
* **React Native → Mobile App**
* **Same UX, same app trio, same evaluation criteria**
* **Repo organized by technology**
* **jQuery included as a legacy reference point**

---

## Folder Structures per Technology

### 1️⃣ JavaScript (Vanilla SPA)

**No build tools** — static, browser-native.

```
/javascript
  index.html                # Root SPA entry with navbar and route placeholders
  styles.css                # Shared global styles
  scripts.js                # Router + app initializer
  /apps
    /world-clock
      world-clock.js
      world-clock.html
    /timer
      timer.js
      timer.html
    /countdown
      countdown.js
      countdown.html
  README.md
  metrics.json
```

> **Routing**: simple hash-based routing (e.g. `#/timer`, `#/countdown`).
>
> **Run**: open `index.html` directly in browser or via `python -m http.server`.

---

### 2️⃣ jQuery (Legacy SPA)

**Static, with jQuery CDN.**

```
/jquery
  index.html                # Includes jQuery via CDN
  styles.css
  main.js                   # Initializes router + loads modules dynamically
  /apps
    /world-clock
      world-clock.js
      world-clock.html
    /timer
      timer.js
      timer.html
    /countdown
      countdown.js
      countdown.html
  README.md
  metrics.json
```

> **Routing**: hash-based (like Vanilla).
>
> **Run**: open directly or via static server.

---

### 3️⃣ TypeScript (Compiled SPA, no bundler)

**Use `tsc` only — compile ES modules to `/dist`.**

```
/typescript
  index.html                # References compiled JS from /dist
  styles.css
  tsconfig.json
  /src
    main.ts                 # Router + entry point
    /apps
      /world-clock
        world-clock.ts
        world-clock.html
      /timer
        timer.ts
        timer.html
      /countdown
        countdown.ts
        countdown.html
  /dist                     # Output folder from tsc
  README.md
  metrics.json
```

> **Run**: compile → serve `/dist` + root HTML using `python -m http.server`.

---

### 4️⃣ Angular (Framework SPA, via Angular CLI)

**Generated using `ng new angular` + standalone components.**

```
/angular
  angular.json
  package.json
  tsconfig.json
  /src
    main.ts
    app/
      app.component.ts
      app.component.html
      app.component.css
      app-routing.module.ts
      /world-clock/
        world-clock.component.ts
        world-clock.component.html
        world-clock.component.css
      /timer/
        timer.component.ts
        timer.component.html
        timer.component.css
      /countdown/
        countdown.component.ts
        countdown.component.html
        countdown.component.css
  README.md
  metrics.json
```

> **Routing**: standard Angular Router.
>
> **Run**: `ng serve`
> **Build**: `ng build --configuration production`.

---

### 5️⃣ React (Web SPA, Vite or CRA)

**Modern hooks-based SPA.**

```
/react
  package.json
  vite.config.ts
  index.html
  /src
    main.tsx               # Entry point
    App.tsx                # Router + layout
    /apps
      /WorldClock/
        index.tsx
        styles.css
      /Timer/
        index.tsx
        styles.css
      /Countdown/
        index.tsx
        styles.css
    /ui
      Navbar.tsx
      Layout.tsx
  /public
    favicon.ico
  README.md
  metrics.json
```

> **Routing**: React Router (client-side navigation).
> **Run**: `npm run dev`
> **Build**: `npm run build`

---

### 6️⃣ Next.js (Modern React Framework)

**App Router, Server Components, Server Actions.**

```
/nextjs
  package.json
  next.config.js
  /app
    layout.tsx              # Root layout
    page.tsx                # Home / Dashboard
    /world-clock
      page.tsx
    /timer
      page.tsx
    /countdown
      page.tsx
  /public
  README.md
  metrics.json
```

> **Routing**: File-system based routing (App Router).
> **Run**: `npm run dev`
> **Build**: `npm run build`

---

### 7️⃣ React Native (Mobile, Expo)

**Expo app with 3 screens, navigation stack.**

```
/react-native
  app.json
  package.json
  babel.config.js
  /app
    index.tsx               # Entry / router
    /world-clock/
      index.tsx
      styles.ts
    /timer/
      index.tsx
      styles.ts
    /countdown/
      index.tsx
      styles.ts
  /assets
    icon.png
    splash.png
  README.md
  metrics.json
```

> **Routing**: Expo Router or `react-navigation`.
> **Run**: `npx expo start`
> **Build**: via Expo Go or EAS (`eas build --profile preview`).

---

## Future Expansion (Placeholders)

### 🔌 Backend (Node.js)
*   **Location**: `/backend`
*   **Goal**: Provide a unified API for data persistence (optional).
*   **Tech**: Node.js + Express/Fastify.

### 🗄️ Database
*   **Location**: `/database`
*   **Goal**: SQL/NoSQL schemas and migration scripts.
*   **Tech**: PostgreSQL / SQLite / MongoDB.

---

## Shared Resources

```
/shared
  ui-guidelines.md        # Common UX rules & design system
  metrics.schema.json     # JSON schema for all metrics.json files
  prompts/                # Copilot/ChatGPT ready-to-use generation prompts
  comparison-table.md     # Master table comparing all stacks
```

---

## Definition of Done (per app, any stack)
- Passes manual functional checks (UX Requirements).
- No console errors/warnings during normal use.
- Responsive/minimal layout; simple, consistent styling.
- README explains run/build steps precisely.
- Metrics recorded and committed (Optional).
