# Config Editor Web App website Preview link ( https://website-config-visual-editor-77cn.vercel.app/)

## Project Overview

This web application is designed to help non-technical users configure their website metadata (screens, sections, content, etc.) without writing any code. It provides a  form-based UI for creating, viewing, editing, and deleting website configurations. The app does not include any backend functionality, as this is a dummy project. 

**Objective:** Simplify website configuration for non-tech users by offering an intuitive UI with strict validations.

---

## Features

### Core Features
1. **Form-Based UI:** Non-technical users can configure website metadata easily.
2. **Configurable Fields:** Users can modify screens, sections, and content.
3. **Validation Rules:**
    - Non-empty `id` and `title` fields.
    - Restriction on roles: `rolesAllowed` must be one of `guest`, `member`, or `admin`.
    - Limit screens to a maximum of 5.
4. **Reset Functionality:** Users can revert the configuration and UI to the original state.
5. **Responsive UI:** Built for desktops and tablets.

### Additional Features
1. **Live Preview:** Users can preview the configuration.
2. **Undo/Redo:** Provides a history of actions.
3. **Tooltips:** Explains functionality for non-tech users.
4. **Inline Warnings:** Highlights validation issues in real time.

---

## Tech Stack

### Frontend
- **Next.js 14+ (App Router):** For the overall application framework.
- **React 18+:** For building reusable components.
- **TypeScript:** Enforces strict type checking and helps maintain a clean codebase.
- **Shadcn UI:** Provides modern, customizable UI components.
- **TailwindCSS:** Simplifies styling and ensures consistency.

### Development Tools
- **ESLint and Prettier:** Ensures code quality and formatting.

---

## Validations

1. **Field Validations:**
    - `id` and `title` must not be empty.
    - `rolesAllowed` is restricted to a predefined set (`guest`, `member`, `admin`).
    - A screen or section cannot be added without all mandatory fields being filled.

2. **Screen Count Limit:**
    - Users cannot create more than 5 screens.

3. **Reset Validation:**
    - Reverts all changes made to the configuration and UI to the initial state.

---

## Folder Structure
```
project-root
├── public
│   ├── assets
│   │   └── icons
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── ConfigEditor.tsx
│   │   │   ├── ScreenCard.tsx
│   │   │   └── SectionEditor.tsx
│   │   ├── pages
│   │   │   └── index.tsx
│   │   ├── styles
│   │   │   └── globals.css
│   │   └── utils
│   │       └── validations.ts
│   └── types
│       └── config.ts
├── .eslintrc.js
├── .prettierrc
├── tailwind.config.js
└── tsconfig.json
```

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js 18+
- npm or yarn

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-root
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app at `http://localhost:3000`.

---

## Components

### 1. ConfigEditor.tsx
- Main UI component for editing configuration.
- Integrates drag-and-drop functionality and form-based inputs.

### 2. ScreenCard.tsx
- Represents a screen in the configuration.
- Provides options to add, edit, and delete screens.

### 3. SectionEditor.tsx
- Handles the addition and modification of sections within screens.

---

## User Flow

1. **Initial Configuration:**
   - Users are presented with a preloaded configuration.
2. **Editing Configuration:**
   - Add, edit, or delete screens and sections.
   - Real-time validation ensures proper configuration.
3. **Preview and Reset:**
   - View a live preview of the configuration.
   - Reset changes to return to the initial state.

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



