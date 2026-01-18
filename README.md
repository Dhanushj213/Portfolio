# PineappleOS Developer Portfolio

A macOS-inspired developer portfolio built with React and Vite, featuring a custom windowing system, Dock, Finder, and interactive developer tools. Showcases your skills, projects, and apps in a unique desktop-like experience.

## 🚀 Live Demo

[portfolio-tawny-nine-1d4s9pnkdr.vercel.app](https://portfolio-tawny-nine-1d4s9pnkdr.vercel.app/?_vercel_share=JzVF0Rnc5vPbQZCBhntGfS4k2nDqnIb7)

---

## 📦 Features

- macOS-inspired UI: Menu bar, Dock, draggable/resizable windows, traffic light controls
- Custom apps: Finder, System Settings, TextEdit, Terminal, Xcode, Keychain Access, JSON Formatter
- Live developer tools: CodePad, API Playground, Cybersecurity Toolkit, JSON Formatter
- Frosted glass effects, magnifying Dock icons, Pineapple branding
- Responsive design for desktop and mobile
- Vercel Speed Insights analytics integration

---

## 🖼️ Screenshots

> Add screenshots of your UI, Dock, and apps here.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Dhanushj213/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🐳 Docker Usage

Build and run the app in a container:

```bash
docker build -t portfolio-app .
docker run -p 4173:4173 portfolio-app
```

App will be available at [http://localhost:4173](http://localhost:4173).

---

## ☁️ Deployment

### Vercel

1. Push your code to GitHub.
2. Import the repo in Vercel.
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Netlify

1. Push your code to GitHub.
2. Import the repo in Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

---

## 🗂️ Project Structure

```
src/
	components/         # UI components and apps
	pineappleos/        # PineappleOS core (Dock, MenuBar, WindowManager)
	assets/             # Images, icons, videos
	App.jsx             # Main app logic
	main.jsx            # Entry point
public/               # Static files
Dockerfile            # Container setup
vite.config.js        # Vite config
tailwind.config.js    # Tailwind CSS config
```

---

## ⚙️ Tech Stack

- React
- Vite
- Tailwind CSS
- Docker
- Vercel Speed Insights

---

## 🧩 Apps Included

- **Finder**: Projects browser with GitHub links
- **System Settings**: Skills and categories
- **TextEdit**: README.md summary
- **Terminal**: API Playground
- **Xcode**: Mini web compiler (JS editor)
- **Keychain Access**: Cybersecurity toolkit (hashing, encoding, password analyzer)
- **JSON Formatter**: Format and view JSON data

---

## 📊 Analytics

[Vercel Speed Insights](https://vercel.com/docs/speed-insights) integrated for performance analytics.

---

## 🎓 Education

**B.E in Computer Science & Engineering with specialization in Cybersecurity, 2022-2026**  
M.S.Ramaiah Institute of Technology, Bengaluru

---

## 📄 License

This project is licensed under the MIT License.

---

Feel free to copy and customize this README.md for your project!
