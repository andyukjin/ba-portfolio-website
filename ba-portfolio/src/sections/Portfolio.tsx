import SectionWrapper from "../components/SectionWrapper";
import airbrbImg from "../assets/airbrb.png";
import powerbiImg from "../assets/PowerBI.png";

import itilImg from "../assets/ITIL.png";
import psmImg from "../assets/PSM.png";
import sqlImg from "../assets/SQL.png";

import itilPdf from "../assets/ITIL.pdf";
import psmPdf from "../assets/PSM.pdf";
import sqlPdf from "../assets/SQL.pdf";

const projects = [
  {
    title: "Airbrb – Full-Stack Web Application",
    description:
      "A React-based accommodation booking platform focusing on user flows, authentication, and clean UI design.",
    image: airbrbImg,
    link: "https://airbrb-deploy-blush.vercel.app/login",
    tag: "Web Application",
  },
  {
    title: "PostgreSQL & Power BI – Data Analytics Project",
    description:
      "End-to-end data analytics project using PostgreSQL for data modeling and Power BI for interactive dashboards and business insights.",
    image: powerbiImg,
    link: "https://github.com/andyukjin/PostgreSQL_PowerBI_Project",
    tag: "Data & Analytics",
  },
];

const certifications = [
  {
    name: "ITIL 4 Foundation",
    image: itilImg,
    pdf: itilPdf,
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    image: psmImg,
    pdf: psmPdf,
  },
  {
    name: "SQL Certification",
    image: sqlImg,
    pdf: sqlPdf,
  },
];

const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio">
      <div className="py-24 flex flex-col items-center">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-14 text-[#0F172A]">
          Portfolio
        </h2>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mb-24">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <span className="text-sm font-medium text-slate-500">
                  {project.tag}
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3 text-[#0F172A]">
                  {project.title}
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-6xl w-full">
          <h3 className="text-3xl font-bold mb-10 text-[#0F172A] text-center">
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-200 bg-white/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Certificate Preview */}
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Label */}
                <div className="p-4 text-center">
                  <p className="font-semibold text-[#0F172A]">
                    {cert.name}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Click to view certificate
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Portfolio;