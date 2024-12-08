import fs from "fs";
import path from "path";

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomPixels() {
  return `${Math.floor(Math.random() * 100)}px`;
}

function randomPercentage() {
  return `${Math.floor(Math.random() * 100)}%`;
}

function randomString(length = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function generateRandomSelector() {
  const types = [
    () => `.${randomString()}`,
    () => `#${randomString()}`,
    () => randomString(),
    () => `${randomString()}.${randomString()}`,
    () => `.${randomString()}-${randomString()}`,
    () => `${randomString()}[${randomString()}]`,
    () => `.${randomString()}:${["hover", "active", "focus"][Math.floor(Math.random() * 3)]}`,
    () => `.${randomString()} > .${randomString()}`,
    () => `.${randomString()} .${randomString()}`,
    () => `.${randomString()} + .${randomString()}`,
  ];

  return types[Math.floor(Math.random() * types.length)]();
}

function randomValue(property) {
  switch (property) {
    case "color":
    case "background-color":
    case "border-color":
      return randomColor();
    case "width":
    case "height":
    case "margin":
    case "padding":
      return Math.random() > 0.5 ? randomPixels() : randomPercentage();
    case "font-size":
      return `${Math.floor(Math.random() * 32 + 8)}px`;
    case "border-width":
      return `${Math.floor(Math.random() * 10 + 1)}px`;
    case "opacity":
      return Math.random().toFixed(2);
    default:
      return randomPixels();
  }
}

const cssProperties = ["color", "background-color", "width", "height", "margin", "padding", "font-size", "border-color", "border-width", "opacity"];

function generateRandomCSS(numRules = 50) {
  let css = "";

  for (let i = 0; i < numRules; i++) {
    const selector = generateRandomSelector();
    const numProperties = Math.floor(Math.random() * 5) + 1;

    css += `${selector} {\n`;

    for (let j = 0; j < numProperties; j++) {
      const property = cssProperties[Math.floor(Math.random() * cssProperties.length)];
      const value = randomValue(property);
      css += `    ${property}: ${value};\n`;
    }

    css += "}\n\n";
  }

  return css;
}

const srcDir = path.join(process.cwd(), "src");
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

const cssContent = generateRandomCSS(500);
const cssPath = path.join(srcDir, "index.css");

fs.writeFileSync(cssPath, cssContent);
console.log(`Random CSS has been generated and written to ${cssPath}`);
