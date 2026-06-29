/**
 * ROOTA brand colors for Tailwind CSS v3 (tailwind.config.js).
 * Merge into theme.extend.colors. Usage example: bg-roota-green, text-navy, border-border.
 *
 *   const roota = require("./design-tokens/tailwind.v3.cjs");
 *   module.exports = {
 *     theme: { extend: { colors: roota.colors, fontFamily: roota.fontFamily } },
 *   };
 */
module.exports = {
  colors: {
    "roota-green": {
      DEFAULT: "#2e9e6b", // primary
      strong: "#1f7a50",
      500: "#34ac75",
      400: "#55c191",
      tint: "#e8f4ee",
    },
    navy: {
      DEFAULT: "#0f1f3d", // canonical navy / headings
      tint: "#eaedf4",
      950: "#0b1730",
      900: "#0f1f3d",
      800: "#16294d",
      700: "#1d3461",
      600: "#294a82",
    },
    body: "#5b6577", // body text
    mist: "#f4f6fb", // alt section background
    "green-band": "#f0f8f4", // green-500 @ 8% over white
    border: "#e3e8ef",
    warning: {
      DEFAULT: "#f4a23b", // "開発予定" badge ONLY
      text: "#5a3508",
    },
  },
  fontFamily: {
    sans: [
      "Inter",
      "Noto Sans JP",
      "Hiragino Kaku Gothic ProN",
      "Yu Gothic",
      "Meiryo",
      "ui-sans-serif",
      "system-ui",
      "sans-serif",
    ],
  },
};
