import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  light?: boolean;
  /** Left-align instead of the default SEEED-style centered intro. */
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-green-400" : "text-green-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-[1.9rem] font-black leading-[1.3] tracking-[0.01em] sm:text-4xl lg:text-[2.7rem] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-loose ${
            centered ? "mx-auto max-w-2xl" : "max-w-3xl"
          } ${light ? "text-white/70" : "text-navy-900/60"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
