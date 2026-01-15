import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="py-24 flex flex-col items-center text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-[#0F172A]">
          Contact
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 max-w-2xl mb-12">
          I’m always open to discussing new opportunities, collaborations,
          or roles where I can contribute as a Business Analyst.
        </p>

        {/* Contact Card */}
        <div className="rounded-2xl bg-white/70 border border-slate-200 shadow-sm p-10 max-w-xl w-full">

          {/* Email */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-slate-500 mb-2">
              Email
            </p>
            <a
              href="mailto:andyukjin@gmail.com"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              andyukjin@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-slate-500 mb-2">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/ukjin-an-58aa36251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              linkedin.com/in/ukjin-an-58aa36251
            </a>
          </div>

          {/* CTA */}
          <p className="text-slate-600 mt-6">
            Feel free to reach out if you’d like to talk about data,
            systems, or how technology can better support business needs.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;