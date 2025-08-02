# 🏈 HuddleHub

Welcome to **HuddleHub**—your cozy corner for tracking local sports teams! This project is built with Next.js, TypeScript, Tailwind CSS, Zustand, Framer Motion, and tested end-to-end with Cypress.

---

## 🎯 Features

- **League & Team Dashboard**
  Browse teams in your favorite league using the [balldontlie](https://www.balldontlie.io/) API (NBA, NFL, MLB, EPL).
- **Favorites**
  Mark teams as favorites; state managed by Zustand.
- **Animated UI**
  Card flips and entrance animations powered by Framer Motion.
- **Responsive Design**
  Mobile-first layout styled entirely with Tailwind CSS.
- **End-to-End Testing**
  Smoke tests with Cypress to ensure core functionality.

---

## 🚀 Getting Started

Follow these steps to get HuddleHub running on your local machine.

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Git**

(Optional) **nvm** for managing Node versions

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/[actual-username]/huddle-hub.git
   cd huddle-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Verify Node version**

   ```bash
   node -v   # should be v18.x.x
   ```

---

## 🏃‍♂️ Development

Start the Next.js development server:

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Testing with Cypress

HuddleHub includes a basic smoke test to verify the home page renders correctly.

1. **Start the app**

   ```bash
   npm run dev
   ```

2. **Open Cypress UI**

   ```bash
   npm run cy:open
   ```

3. **Run headless tests**

   ```bash
   npm run cy:run
   ```

---

## 📦 Production

Build and start the optimized production bundle:

```bash
npm run build
npm run start
```

---

## 🗂 Project Structure

```
huddle-hub/
├── cypress/             # E2E tests
│   └── e2e/home.cy.ts
├── public/              # Static assets
├── src/
│   └── app/
│       ├── globals.css  # Tailwind directives
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # Home page
├── cypress.config.ts    # Cypress configuration
├── postcss.config.js    # PostCSS + Tailwind plugin
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project metadata & scripts
└── README.md            # This file
```

---

## 💻 Built With

- [Next.js](https://nextjs.org/) & TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [Cypress](https://www.cypress.io/)
- [balldontlie API](https://www.balldontlie.io/)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> **Teamwork makes the dream work!** 🏆
