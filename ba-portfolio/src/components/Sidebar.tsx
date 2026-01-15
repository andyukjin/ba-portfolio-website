import { useEffect, useState } from "react";

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
      { threshold: 0.6 }
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
    bg-[#77CBDA]
    rounded-2xl
    shadow-xl
    flex
    flex-col
    px-6
    py-8
  "
    >
      {/* Name / Role */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0F172A]">
          Ukjin An
        </h1>
        <p className="text-base mt-2 text-slate-700 leading-snug">
          Business Analyst <br />
          Info sys/Comp Sci Graduate <br />
          University of New South Whales
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-300/70 mb-6" />

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-base font-semibold">
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
    </aside>
  );
};

export default Sidebar;
