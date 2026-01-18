import SectionWrapper from "../components/SectionWrapper";
import profilePhoto from "../assets/photo.jfif";
import resumePdf from "../assets/resume.pdf";

import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.jpg";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="py-20 flex items-center justify-center">
        {/* Container */}
        <div className="flex flex-col items-center max-w-4xl w-full">

          {/* Profile Photo */}
          <img
            src={profilePhoto}
            alt="Ukjin An profile"
            className="w-40 h-40 rounded-full object-cover mb-10 shadow-sm"
          />

          {/* Headline */}
          <h1 className="text-4xl font-bold mb-4 leading-tight text-left w-full">
            Hi, I’m Andy.
          </h1>

          {/* Sub-header */}
          <h2 className="text-2xl font-medium mb-8 text-slate-600 text-left w-full">
            I am an upcoming Business Analyst bridging business needs and technology through
            structured problem-solving.
          </h2>

          {/* About Paragraph */}
          <p className="text-lg leading-relaxed text-slate-700 text-left w-full mb-10">
            I am a university graduate with a strong foundation in both
            business and technology. I enjoy working at the intersection of
            data, systems, and process improvement to transform ambiguous
            business problems into clear, structured, and actionable solutions.
            <br /><br />
            I have studied information systems and computer science with a strong
            background in mathematics which allows me to understand not only
            what the business needs, but also how systems work underneath. This
            enables me to communicate effectively with both technical and
            non-technical stakeholders and design solutions that are practical,
            scalable and aligned with business objectives.
          </p>

          <div className="w-full flex items-end gap-4">
            {/* Resume Button */}
            <a
              href={resumePdf}
              download
              className="
      inline-flex
      items-center
      rounded-xl
      bg-blue-600
      px-8
      py-4
      text-white
      font-semibold
      shadow-sm
      hover:bg-blue-700
      transition-colors
    "
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex items-end gap-3">
              <a
                href="https://www.linkedin.com/in/ukjin-an-58aa36251/"
                target="_blank"
                rel="noopener noreferrer"
                className="
        p-2
        rounded-lg
        border
        border-blue-200
        bg-blue-50
        hover:bg-blue-100
        transition
      "
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/andyukjin"
                target="_blank"
                rel="noopener noreferrer"
                className="
        p-2
        rounded-lg
        border
        border-blue-200
        bg-blue-50
        hover:bg-blue-100
        transition
      "
              >
                <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/ukjin.an/"
                target="_blank"
                rel="noopener noreferrer"
                className="
        p-2
        rounded-lg
        border
        border-blue-200
        bg-blue-50
        hover:bg-blue-100
        transition
      "
              >
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/00_auj/"
                target="_blank"
                rel="noopener noreferrer"
                className="
        p-2
        rounded-lg
        border
        border-blue-200
        bg-blue-50
        hover:bg-blue-100
        transition
      "
              >
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
