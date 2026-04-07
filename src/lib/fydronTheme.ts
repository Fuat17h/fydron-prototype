import { createLightTheme, BrandVariants, Theme } from "@fluentui/react-components";
import { webLightTheme } from "@fluentui/react-components";

// Extract these directly from Figma Dev Mode (color ramp, radii, shadows, fonts)
const brand: BrandVariants = {
  10: "#0A2540",
  20: "#123456",
  30: "#1A3D5C",
  40: "#1F4462",
  50: "#0066B3",
  60: "#245B78",
  70: "#2A628E",
  80: "#2F69A4",
  90: "#3470BA",
  100: "#0078D4",   // your primary blue
  110: "#0066B3",
  120: "#4385FC",
  130: "#488CFF",
  140: "#4D93FF",
  150: "#529AFF",
  160: "#57A1FF",

// 10: "#0A2540",
//   20: "#123456",
//   50: "#0066B3",
//   100: "#0078D4",   // primary blue from logo & buttons
//   110: "#0066B3",
//   120: "#005295",
//   130: "#003D7A",
//   140: "#002A5C",
//   150: "#001A3D",
//   160: "#00102A",


};

export const fydronTheme: Theme = {
  ...webLightTheme,
  ...createLightTheme(brand),

  // Exact matches from your Figma design
  borderRadiusMedium: "12px",           // cards & inputs
  borderRadiusLarge: "16px",
  shadow4: "0 10px 25px -5px rgb(10 37 64 / 0.12), 0 4px 6px -2px rgb(10 37 64 / 0.08)",
  fontFamilyBase: "Inter, system-ui, sans-serif",
  fontSizeBase300: "15px",
  fontSizeBase400: "17px",
  fontWeightSemibold: 600,
  fontWeightBold: 700,

  // Add any other tokens you need (colorBrandBackground, colorNeutralForeground1, etc.)
  colorBrandBackground: "#0078D4",
  colorBrandBackgroundHover: "#0066B3",
  colorBrandBackgroundPressed: "#005295",
  colorBrandForeground1: "#0078D4",
  colorNeutralForeground1: "#09090B",      // main text from SVG
  colorNeutralForeground2: "#64748B",      // secondary text
  colorNeutralBackground1: "#FFFFFF",      // card bg
  colorNeutralStroke1: "#E4E4E7",          // card border from SVG
  colorNeutralStroke2: "#F4F4F5",          // page bg
  colorPaletteRedBackground3: "#FEE2E2",   // error background
  colorPaletteRedForeground3: "#E03C3C",   // error text
};