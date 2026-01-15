import { useEffect, useState } from "react";

import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.jpg";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
    fixed
    left-6
    top-1/2
    -translate-y-1/2
    w-72
    min-h-[480px]
    max-h-[70vh]
    bg-white/70
    backdrop-blur-md
    border
    border-slate-200
    rounded-2xl
    shadow-xl
    flex
    flex-col
    px-6
    py-8
  "
    >
      {/* Social Icons */}
      <div className="flex items-center gap-3 mb-10">
        <a
          href="https://www.linkedin.com/in/ukjin-an-58aa36251/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/80 hover:bg-white transition"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/andyukjin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/80 hover:bg-white transition"
        >
          <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
        </a>

        <a
          href="https://www.facebook.com/ukjin.an/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/80 hover:bg-white transition"
        >
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
        </a>

        <a
          href="https://www.instagram.com/00_auj/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/80 hover:bg-white transition"
        >
          <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-base font-semibold flex-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`
              transition-all duration-150
              ${active === s.id
                ? "text-[#0F172A] font-bold translate-x-1"
                : "text-slate-700 hover:text-[#0F172A] hover:translate-x-1"
              }
            `}
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="text-xs text-slate-700 text-center mt-6">
        Made by Ukjin An
      </div>
    </aside>
  );
};

export default Sidebar;