import SectionWrapper from "../components/SectionWrapper";
import profilePhoto from "../assets/photo.jfif";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="min-h-screen flex items-center justify-center">
        {/* Container stays centered */}
        <div className="flex flex-col items-center max-w-4xl">

          {/* Profile Photo */}
          <img
            src={profilePhoto}
            alt="Ukjin An profile"
            className="w-40 h-40 rounded-full object-cover mb-10 shadow-sm"
          />

          {/* Headline (left-aligned but visually centered by width) */}
          <h1 className="text-4xl font-bold mb-8 leading-tight text-left w-full">
            Hi, Im Andy.
            <br /><br />
            A Business Analyst bridging business needs and technology through structured problem-solving
          </h1>

          {/* About Paragraph */}
          <p className="text-lg leading-relaxed text-slate-700 text-left w-full">
            I am an upcoming Business Analyst with a strong foundation in both business and technology. I enjoy working at the intersection of data, systems, and process improvement to transform ambiguous business problems into clear, structured, and actionable solutions.
            <br /><br />
            I have studied information systems and computer science with a strong background in mathematics which allows me to understand not only what the business needs, but also how systems work underneath. This enables me to communicate effectively with both technical and non-technical stakeholders and design solutions that are practical, scalable, and aligned with business objectives.
            <br /><br />
            What motivates me most is understanding how an organisation operates, identifying inefficiencies, and using data and technology to drive meaningful improvements.
          </p>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
