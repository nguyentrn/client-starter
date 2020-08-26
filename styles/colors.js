const mainColors = [
  {
    primary: "#00334e",
    secondary: "#74b3f4",
    neutral: "#5588a3",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
  {
    primary: "#4e0033",
    secondary: "#741453",
    neutral: "#a35588",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
  {
    primary: "#334e00",
    secondary: "#537414",
    neutral: "#88a355",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
  {
    primary: "#4e3300",
    secondary: "#745314",
    neutral: "#a38855",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
  {
    primary: "#33004e",
    secondary: "#531474",
    neutral: "#8855a3",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
  {
    primary: "#004e33",
    secondary: "#147453",
    neutral: "#55a388",
    gradient:
      "radial-gradient(farthest-side ellipse at 10% 0,hsl(300, 100%, 95%),hsl(190, 50%, 70%) 80%, hsl(226, 40%, 60%) 120% )",
  },
];

const bwColors = {
  white: "#ffffff",
  black: "#000000",
  light: "#f6f8fa",
  dark: "#555555",
  lighter: "#e8e8e8",
  darker: "#37474f",
  absoluteWhite: "#ffffff",
  absoluteDark: "#333333",
};

const supportColors = {
  red: "#ff4d4f",
  blue: "#1890ff",
  green: "#52c41a",
  yellow: "#ffe78f",
};

const colors = mainColors.map((mainColor) => ({
  ...mainColor,
  ...supportColors,
  ...bwColors,
}));

export default colors;
