import SectionWrapper from "../components/SectionWrapper";

import unswImg from "../assets/UNSW.png";
import talentImg from "../assets/Talent100.jpg";
import kyoboImg from "../assets/Kyobo.png";
import ftgImg from "../assets/FTG.jfif";
import bellepupImg from "../assets/Bellepup.png";
import baImg from "../assets/BA.png";

const experiences = [
  {
    period: "2019 – 2020",
    title: "Commerce / Law",
    description:
      "Began my academic journey in Commerce and Law, where I developed a strong foundation in business, economics, and structured thinking. Through this experience, I realised that I was more interested in analytical problem-solving than legal memorisation while actively working as a mathematics tutor for Year 10–12 students.",
    image: unswImg,
  },
  {
    period: "2021 – 2022",
    title: "Transition to Information Systems & Computer Science",
    description:
      "Transitioned into Commerce and Computer Science with a major in Information Systems. This period marked my discovery of how business needs can be translated into technical solutions, driving my interest in data-driven analysis, systems thinking, and process optimisation.",
    image: talentImg,
  },
  {
    period: "2022 – 2023",
    title: "Insurance Systems Intern – Kyobo Life Insurance",
    description:
      "Travelled to Korea to gain hands-on experience working closely with business stakeholders and developers. Analysed requirements, documented system changes, and supported system testing, gaining exposure to real-world enterprise systems and reinforcing my interest in Business Analysis.",
    image: kyoboImg,
  },
  {
    period: "2023 – 2024",
    title: "Service Desk Analyst – FTG Australia",
    description:
      "Delivered IT support following ITIL-based processes while analysing incident trends and improving documentation. Collaborated with stakeholders to refine workflows, contributing to faster resolution times and improved service quality.",
    image: ftgImg,
  },
  {
    period: "2024 – 2025",
    title: "Founder – Bellepup.com",
    description:
      "During recovery from a rare condition (Transverse Myelitis), I focused on building an e-commerce platform selling puppy clothing. Identified a blue-ocean niche in the Australian market and worked with friends to develop and operate Bellepup.com, gaining hands-on experience in e-commerce, problem-solving, and resilience.",
    image: bellepupImg,
  },
  {
    period: "Present",
    title: "Aspiring Business Analyst",
    description:
      "Currently combining academic knowledge and industry experience to pursue a Business Analyst role focused on delivering data-driven, stakeholder-aligned solutions and continuous improvement.",
    image: baImg,
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="py-24 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 text-[#0F172A]">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative max-w-5xl w-full">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-300" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />

                {/* Card */}
                <div className="rounded-2xl bg-white/70 border border-slate-200 p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 items-start">

                    {/* Image */}
                    <div className="flex justify-center md:justify-start">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <span className="text-sm font-semibold text-blue-600">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-bold mt-2 mb-3 text-[#0F172A]">
                        {exp.title}
                      </h3>

                      <p className="text-slate-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;