import type { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, children }: Props) => {
  return (
    <section
      id={id}
      className="px-12 text-primaryText"
    >
      {title && (
        <h2 className="text-4xl font-bold mb-12 text-[#0F172A] text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
