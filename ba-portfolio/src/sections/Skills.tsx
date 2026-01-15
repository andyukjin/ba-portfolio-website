import SectionWrapper from "../components/SectionWrapper";

type Skill = {
  name: string;
  usage: string;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Data & Analytics",
    description:
      "Using data to validate assumptions, identify patterns, and support business decision-making.",
    skills: [
      {
        name: "SQL (PostgreSQL, MySQL)",
        usage:
          "Used to validate data, analyse trends, and extract insights from relational databases for reporting and decision support.",
      },
      {
        name: "Power BI / Tableau",
        usage:
          "Built interactive dashboards to translate raw data into decision-ready insights for stakeholders.",
      },
      {
        name: "Excel",
        usage:
          "Performed data analysis, modelling, and stakeholder reporting for both operational and strategic use cases (e.g. KPIs, summaries).",
      },
    ],
  },
  {
    title: "Business Analysis",
    description:
      "Bridging business needs and technical solutions through structured analysis and communication.",
    skills: [
      {
        name: "Requirements Analysis",
        usage:
          "Gathered, clarified, and documented business and functional requirements by working closely with stakeholders.",
      },
      {
        name: "Business Process Analysis (BPMN)",
        usage:
          "Mapped current-state processes, identified inefficiencies, and proposed future-state improvements.",
      },
      {
        name: "Agile / Scrum",
        usage:
          "Worked in Agile environments to deliver incremental, value-driven outcomes with cross-functional teams.",
      },
      {
        name: "Stakeholder Communication",
        usage:
          "Translated business needs into clear, actionable requirements for both technical and non-technical stakeholders.",
      },
    ],
  },
  {
    title: "Technical",
    description:
      "Understanding how systems work underneath to design practical and scalable solutions.",
    skills: [
      {
        name: "HTML / CSS / Tailwind CSS",
        usage:
          "Built structured, responsive, and user-friendly interfaces with a focus on clarity and usability.",
      },
      {
        name: "JavaScript (React, Node) / TypeScript",
        usage:
          "Developed interactive front-end logic and maintained scalable, type-safe codebases.",
      },
      {
        name: "Java / C++",
        usage:
          "Gained university-level understanding of object-oriented design, system logic, and problem-solving.",
      },
      {
        name: "Git / GitHub",
        usage:
          "Used version control to manage code changes and collaborate effectively on projects.",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Supporting analysis, documentation, and collaboration in real-world environments.",
    skills: [
      {
        name: "Microsoft 365 (Excel, PowerPoint, Word, Teams)",
        usage:
          "Created business analysis documentation, presentations, and collaborated with stakeholders.",
      },
      {
        name: "Jira & Confluence",
        usage:
          "Managed requirements, tasks, and documentation in Agile project environments.",
      },
      {
        name: "Salesforce",
        usage:
          "Worked with CRM workflows and customer data to understand business processes and user journeys.",
      },
      {
        name: "Figma",
        usage:
          "Created wireframes to communicate design ideas and system flows clearly.",
      },
      {
        name: "Google Workspace / Notion",
        usage:
          "Used for documentation, collaboration, and knowledge organisation.",
      },
    ],
  },
  {
    title: "Languages",
    description:
      "Communicating effectively across different cultures and stakeholder groups.",
    skills: [
      {
        name: "English",
        usage:
          "Used professionally and academically to communicate with stakeholders and produce documentation.",
      },
      {
        name: "Korean",
        usage:
          "Used fluently in professional and everyday contexts, including cross-border collaboration.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="min-h-screen flex flex-col items-center justify-center">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 text-center text-[#0F172A]">
          Skills
        </h2>

        {/* Skills Content */}
        <div className="space-y-12 max-w-6xl w-full">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-slate-200 rounded-xl p-8 bg-white/70 text-left"
            >
              <h3 className="text-2xl font-bold mb-2">
                {category.title}
              </h3>

              <p className="mb-6 text-slate-600 max-w-3xl">
                {category.description}
              </p>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <p className="font-semibold">
                      {skill.name}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {skill.usage}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>

  );
};

export default Skills;
