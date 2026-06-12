import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconSearch = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const IconPen = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1.4" />
  </svg>
);

export const IconClipboard = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4a3 3 0 0 1 6 0" />
    <path d="M8.5 11h7M8.5 15h5" />
  </svg>
);

export const IconKey = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="8" r="4" />
    <path d="M11 11l9 9M17 17l2-2M14 14l2-2" />
  </svg>
);

export const IconCheckBadge = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 8.5l1.5-1.5 1 1L13 4.5" />
    <path d="M5 12h6M5 16h9" />
    <path d="M18 12.5l1.6 1.6 3-3.4" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export const IconDatabase = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
    <path d="M5 5.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
    <path d="M5 11.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
  </svg>
);

export const IconMic = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0" />
    <path d="M12 17v4M9 21h6" />
  </svg>
);

export const IconBrain = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5a2.5 2.5 0 0 0-5 .3A2.6 2.6 0 0 0 5 8a2.6 2.6 0 0 0 .7 4.2A2.6 2.6 0 0 0 7 17a2.4 2.4 0 0 0 5 .3Z" />
    <path d="M12 5a2.5 2.5 0 0 1 5 .3A2.6 2.6 0 0 1 19 8a2.6 2.6 0 0 1-.7 4.2A2.6 2.6 0 0 1 17 17a2.4 2.4 0 0 1-5 .3Z" />
  </svg>
);

export const IconRobot = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="8" width="14" height="11" rx="2.5" />
    <path d="M12 8V5M12 5a1.4 1.4 0 1 0 0-2.8" />
    <circle cx="9.5" cy="13" r="1" />
    <circle cx="14.5" cy="13" r="1" />
    <path d="M3 12v3M21 12v3" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6a3 3 0 0 1 0 6M20.5 19a5.5 5.5 0 0 0-3.5-5.1" />
  </svg>
);

export const IconServer = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="6" rx="1.5" />
    <rect x="4" y="14" width="16" height="6" rx="1.5" />
    <path d="M7.5 7h.01M7.5 17h.01" />
  </svg>
);

export const IconEyeOff = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 3l18 18" />
    <path d="M10.6 6.2A9.7 9.7 0 0 1 12 6c5 0 9 6 9 6a16 16 0 0 1-2.3 2.9M6.2 6.6A16 16 0 0 0 3 12s4 6 9 6a9.4 9.4 0 0 0 3.4-.6" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
);

export const IconQuote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7.5 6C5 6 3.2 8 3.2 10.6c0 2.3 1.6 3.9 3.6 3.9.2 0 .5 0 .7-.1-.4 1.6-1.8 2.9-3.4 3.4l.6 1.7c2.9-.9 5.1-3.6 5.1-7.2C9.8 8.4 8.9 6 7.5 6Zm9 0C14 6 12.2 8 12.2 10.6c0 2.3 1.6 3.9 3.6 3.9.2 0 .5 0 .7-.1-.4 1.6-1.8 2.9-3.4 3.4l.6 1.7c2.9-.9 5.1-3.6 5.1-7.2C18.8 8.4 17.9 6 16.5 6Z" />
  </svg>
);

export const IconGift = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="9" width="16" height="11" rx="1.5" />
    <path d="M4 13h16M12 9v11" />
    <path d="M12 9C9 9 7.5 7.5 8.2 6 9 4.6 11 5.5 12 9c1-3.5 3-4.4 3.8-3 .7 1.5-.8 3-3.8 3Z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconGoogleG = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <path
      fill="currentColor"
      d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z"
    />
    <path
      fill="currentColor"
      d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.9 5.9 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z"
      opacity="0.7"
    />
    <path
      fill="currentColor"
      d="M6.5 14.1a6 6 0 0 1 0-3.8V7.7H3.2a10 10 0 0 0 0 9l3.3-2.6Z"
      opacity="0.5"
    />
    <path
      fill="currentColor"
      d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.2 7.7l3.3 2.6A5.9 5.9 0 0 1 12 6.1Z"
      opacity="0.85"
    />
  </svg>
);
