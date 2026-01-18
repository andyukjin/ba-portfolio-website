# Personal Portfolio Website

This is a single-page personal portfolio website designed to clearly present my background, skills, and experience as an aspiring **Business Analyst** at the intersection of business and technology.

The site follows a **minimal, information-first design** and is built to be easy to navigate, fast to load, and recruiter-friendly.

---

## 🌐 What This Website Does

The website is a **single-page application (SPA)** with a fixed sidebar and scrollable content sections.  
It allows visitors to quickly understand who I am, what I can do, and what I’ve worked on.

### Key Features

- **Fixed Sidebar Navigation**
  - Always visible on the left
  - Highlights the currently active section using scroll detection
  - Smooth scrolling between sections

- **Structured Content Sections**
  - **About** – My mindset, background, and approach to problem-solving
  - **Skills** – Business analysis, data analytics, technical, tools, and languages
  - **Portfolio** – Selected projects demonstrating data-driven and analytical work
  - **Experience** – Academic and industry journey
  - **Contact** – How to get in touch

- **Clean, Professional Design**
  - Minimal animations
  - Information-first layout
  - Pastel blue → white background gradient
  - Responsive and readable on different screen sizes

---

## 🧠 Design Philosophy

- Minimal and professional
- Optimised for recruiters and hiring managers
- Clear separation of content
- Emphasis on **problem-solving**, **data**, and **business–technology alignment**
- No unnecessary visual noise or heavy animations

---

## 🛠 Tech Stack

### Frontend
- **React** – Component-based UI development
- **TypeScript** – Type safety and maintainable code
- **Vite** – Fast development server and build tooling

### Styling
- **Tailwind CSS**
  - Utility-first styling
  - Consistent spacing, typography, and layout
- Custom colour system:
  - Background gradient: `#B3EBF2 → #FFFFFF`
  - Sidebar styling with soft shadows and rounded corners

### Architecture & Features
- Component-based section structure
- Reusable `SectionWrapper` for consistent layout
- Intersection Observer API for active sidebar state
- Smooth scroll behaviour for navigation

### Deployment
- **Vercel**
  - Fast global CDN
  - Automatic builds on GitHub push
  - Optimised for Vite + React applications

---

## 📁 Project Structure (Simplified)

src/
├── components/

│ ├── Sidebar.tsx

│ └── SectionWrapper.tsx

├── sections/

│ ├── About.tsx

│ ├── Skills.tsx

│ ├── Portfolio.tsx

│ ├── Experience.tsx

│ └── Contact.tsx

├── App.tsx

├── main.tsx

└── index.css

---