import type { FC, ReactNode } from "react";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "start";
  as?: "h2" | "h3";
  className?: string;
  light?: boolean;
};

const SectionHead: FC<SectionHeadProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className = "",
  light = false,
}) => {
  const Heading = as;
  const isCenter = align === "center";

  return (
    <div
      className={`section-head ${isCenter ? "section-head--center" : "section-head--start"} ${light ? "section-head--light" : ""} ${className}`.trim()}
      data-aos='fade-up'
    >
      <span className='section-head__eyebrow'>{eyebrow}</span>
      <Heading className='section-head__title splitTextStyleOne'>{title}</Heading>
      {description ? <p className='section-head__desc'>{description}</p> : null}
    </div>
  );
};

export default SectionHead;
