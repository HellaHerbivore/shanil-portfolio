// Generates themed SVG placeholder "screenshots" for each project.
// Replace the files in /public/placeholders with real images later.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "placeholders");

const themes = {
  playthical: { label: "Playthical", from: "#fef3e2", to: "#f97316", text: "#1f2937" },
  antagonist: { label: "Antagonist", from: "#1a1a1a", to: "#c5a253", text: "#f5f5f5" },
  "yoga-with-lali": { label: "Yoga With Lali", from: "#2f6f5e", to: "#9fc3b8", text: "#f5f5f5" },
  "animal-profiles": { label: "Animal Profiles", from: "#dff5e1", to: "#22c55e", text: "#14532d" },
  "pocket-sanctuary": { label: "Pocket Sanctuary", from: "#3a7d5e", to: "#e7c98f", text: "#f5f5f5" },
  "cozy-haunted-house": { label: "Cozy Haunted House", from: "#f3b06a", to: "#7c3f2a", text: "#fff7ed" },
};

const W = 1200;
const H = 750;

function svg(theme, variant) {
  const id = `g-${Math.random().toString(36).slice(2)}`;
  const sub = variant === 0 ? "" : ` · view ${variant + 1}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${theme.label} placeholder">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${theme.from}"/>
      <stop offset="100%" stop-color="${theme.to}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#${id})"/>
  <rect x="40" y="40" width="${W - 80}" height="60" rx="14" fill="${theme.text}" opacity="0.08"/>
  <circle cx="78" cy="70" r="9" fill="${theme.text}" opacity="0.35"/>
  <circle cx="108" cy="70" r="9" fill="${theme.text}" opacity="0.25"/>
  <circle cx="138" cy="70" r="9" fill="${theme.text}" opacity="0.18"/>
  <text x="${W / 2}" y="${H / 2 - 10}" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700" fill="${theme.text}" text-anchor="middle">${theme.label}</text>
  <text x="${W / 2}" y="${H / 2 + 46}" font-family="system-ui, sans-serif" font-size="26" fill="${theme.text}" opacity="0.75" text-anchor="middle">Placeholder artwork${sub}</text>
</svg>
`;
}

await mkdir(OUT_DIR, { recursive: true });

for (const [slug, theme] of Object.entries(themes)) {
  for (let v = 0; v < 3; v++) {
    const name = v === 0 ? `${slug}.svg` : `${slug}-${v + 1}.svg`;
    await writeFile(join(OUT_DIR, name), svg(theme, v), "utf8");
  }
}

console.log("Generated placeholder SVGs in public/placeholders");
