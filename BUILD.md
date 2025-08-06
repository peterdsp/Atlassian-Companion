# Build Instructions – Atlassian Companion

This document explains how to build and prepare the **Atlassian Companion** extension for distribution on the Opera Add-ons platform.

---

## 🖥️ Environment Setup

### Operating System
- macOS Ventura 13.6 or later **or**
- Windows 10+ (64-bit)

### Required Tools

| Tool     | Version   | Installation Notes                        |
|----------|-----------|-------------------------------------------|
| Node.js  | `>=18.0.0` | https://nodejs.org/                       |
| npm      | `>=9.0.0`  | Comes with Node.js                        |
| Yarn     | `>=1.22`   | `npm install --global yarn` (optional)   |
| Zip CLI  | Built-in   | For packaging the final build             |

_If no build tooling is needed (i.e., static files only), you may skip Node/npm._

---

## 📁 Directory Structure

```

Atlassian-Companion-main/
├── manifest.json
├── sidebar.html
├── icons/
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-128.png
├── LICENSE
├── PRIVACY.md
└── README.md

````

---

## 🛠️ Build Steps

If this is a static extension (HTML, JSON, icons only), follow these steps:

### ✅ Step-by-Step CLI Instructions

```bash
# 1. Clone the repository
git clone https://github.com/peterdsp/Atlassian-Companion.git
cd Atlassian-Companion-main

# 2. (Optional) If there are any dependencies (not needed for pure HTML/CSS/JS)
npm install
# or
yarn install

# 3. Validate your manifest.json
# Use Opera's extension validator or load it manually via developer mode

# 4. Package the extension
# Select the required files and create a ZIP archive
zip -r Atlassian-Companion-main.zip manifest.json sidebar.html icons LICENSE README.md PRIVACY.md
````

You now have `jira-sidebar-companion.zip`, ready for submission to the [Opera Add-ons Developer Portal](https://addons.opera.com/developer/).

---

## ✅ Test in Opera (Before Publishing)

1. Open Opera browser.
2. Navigate to `opera://extensions`.
3. Enable "Developer Mode" (top right).
4. Click **"Load unpacked"** and select the `Atlassian-Companion-main` folder.
5. Test the extension functionality.

---

## 📦 Build Notes

* No compilation or transpilation is required for this extension.
* If future updates include React, TypeScript, or bundling (e.g., with Webpack or Vite), this file should be updated accordingly.

---

## 🧪 (Optional) Lint & Format (if using JS/TS)

```bash
npm run lint
npm run format
```

---

## 👨‍💻 Maintainer

**Petros Dhespollari**
Email: [info@peterdsp.dev](mailto:info@peterdsp.dev)
GitHub: [https://github.com/peterdsp](https://github.com/peterdsp)
