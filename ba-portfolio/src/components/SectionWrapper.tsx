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
      className="min-h-screen px-12 py-20 text-primaryText"
    >
      {title && (
        <h2 className="text-3xl font-bold mb-10">{title}</h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;