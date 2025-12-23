# 🧭 GitPeek — Read Your GitHub Story

![React](https://img.shields.io/badge/React-18.0+-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0+-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Enabled-ff69b4?logo=framer)
![License](https://img.shields.io/badge/License-MIT-green.svg)

> **GitPeek** is a modern web application that goes beyond searching GitHub profiles.  
> It interprets public GitHub data to help you understand **how a developer works**, not just what they’ve built.

---

🔗 **Live Demo:** https://git-peek.netlify.app 

📦 **Source Code:** https://github.com/your-username/gitpeek

---

## 📌 Why GitPeek Exists

GitHub profiles are powerful, but they’re noisy.

Recruiters, collaborators, and even developers themselves often struggle to quickly understand:
- What kind of developer is this?
- Are they consistent or experimental?
- Do they maintain projects or start many and abandon them?

**GitPeek was built to answer those questions clearly and visually**, using public GitHub data and a clean, focused interface.

---

## ✨ What GitPeek Does

GitPeek fetches public GitHub data and presents it in a way that is:
- Easy to scan
- Insight-focused
- Human-readable

Instead of dumping raw data, GitPeek emphasizes **patterns, behavior, and trends**.

---

## 🚀 Core Features

- 🔍 **Instant GitHub User Search**  
  Search any public GitHub profile by username.

- 👤 **Developer Profile Overview**  
  View avatar, bio, followers, following, and location.

- 📦 **Repository Exploration**  
  Browse public repositories with stars, forks, languages, and last activity.

- 🧠 **Developer Insights**  
  Analyze repository activity to surface:
  - Active vs inactive projects  
  - Dominant technologies  
  - Maintenance habits  

- ⚡ **Fast & Responsive UI**  
  Built with performance and accessibility in mind.

- 🎬 **Smooth UI Animations**  
  Subtle animations powered by Framer Motion.

- 🚫 **Error & Rate-Limit Handling**  
  Clear feedback for invalid users or GitHub API limits.

---

## 🧩 How It Works

1. User enters a GitHub username  
2. GitPeek fetches public data using the **GitHub REST API**  
3. Data is processed and normalized client-side  
4. The UI renders:
   - Profile overview  
   - Repository insights  
   - Activity indicators  

All analysis is done in the browser using JavaScript.

---

## 🧱 Tech Stack

| Category | Technology |
|--------|------------|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| API | GitHub REST API |
| Deployment | Netlify |

---

## 📂 Project Structure

```text
GitPeek/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── UserCard.jsx
│   │   ├── RepoList.jsx
│   │   ├── PersonaCard.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Profile.jsx
│   ├── services/
│   │   └── github.js
│   ├── utils/
│   │   ├── metrics.js
│   │   └── persona.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```
---

## 🧪 Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
git clone https://github.com/your-username/gitpeek.git
cd gitpeek
npm install
npm run dev

```

---

## 🤝 Contributing

### Contributions are welcome.
- Fork the repository
- Create a feature branch
- Commit your changes
- Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

GitHub REST API

React & Vite communities

Tailwind CSS documentation


