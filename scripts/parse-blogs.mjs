import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const mdPath = path.join(
  root,
  "public",
  "How to Send Diwali Gifts from India to USA_ Complete Courier Guide.md"
);

const META = [
  {
    match: /Mumbai to USA: Complete Courier Guide/,
    slug: "how-to-send-diwali-gifts-from-mumbai-to-usa",
    tags: ["Diwali", "USA", "Mumbai"],
    date: "15/09/2026",
    cover: "Mumbai → USA",
    subtitle: "International courier guide",
  },
  {
    match: /Mumbai to UK Safely/,
    slug: "how-to-send-diwali-gifts-from-mumbai-to-uk",
    tags: ["Diwali", "UK", "Mumbai"],
    date: "14/09/2026",
    cover: "Mumbai → UK",
    subtitle: "Safe shipping guide",
  },
  {
    match: /Mumbai to UAE: What Can You Send/,
    slug: "diwali-courier-from-mumbai-to-uae",
    tags: ["Diwali", "UAE", "Mumbai"],
    date: "13/09/2026",
    cover: "Mumbai → UAE",
    subtitle: "What you can send",
  },
  {
    match: /Mumbai to Canada/,
    slug: "how-to-send-diwali-gifts-from-mumbai-to-canada",
    tags: ["Diwali", "Canada", "Mumbai"],
    date: "12/09/2026",
    cover: "Mumbai → Canada",
    subtitle: "Courier guide",
  },
  {
    match: /Mumbai to Australia/,
    slug: "how-to-send-diwali-gifts-from-mumbai-to-australia",
    tags: ["Diwali", "Australia", "Mumbai"],
    date: "11/09/2026",
    cover: "Mumbai → Australia",
    subtitle: "Courier guide",
  },
  {
    match: /What Can You Send Abroad for Diwali/,
    slug: "what-can-you-send-abroad-for-diwali",
    tags: ["Diwali", "International", "Gifts"],
    date: "10/09/2026",
    cover: "Diwali Gifts Abroad",
    subtitle: "Simple shipping guide",
  },
  {
    match: /International Courier from Virar/,
    slug: "international-courier-from-virar",
    tags: ["Virar", "International Courier", "Pickup"],
    date: "09/09/2026",
    cover: "Courier from Virar",
    subtitle: "Send parcels abroad",
  },
  {
    match: /International Courier from Nalasopara/,
    slug: "international-courier-from-nalasopara",
    tags: ["Nalasopara", "International Courier", "Pickup"],
    date: "08/09/2026",
    cover: "Courier from Nalasopara",
    subtitle: "Worldwide from home",
  },
  {
    match: /International Courier from Vasai/,
    slug: "international-courier-from-vasai",
    tags: ["Vasai", "Doorstep Pickup", "International"],
    date: "06/09/2026",
    cover: "Courier from Vasai",
    subtitle: "Doorstep pickup",
  },
  {
    match: /International Courier from Mira Road/,
    slug: "international-courier-from-mira-road",
    tags: ["Mira Road", "USA", "UK"],
    date: "05/09/2026",
    cover: "Courier from Mira Road",
    subtitle: "USA, UK and more",
  },
  {
    match: /International Courier from Bhayandar/,
    slug: "international-courier-from-bhayandar",
    tags: ["Bhayandar", "Doorstep Shipping", "International"],
    date: "04/09/2026",
    cover: "Courier from Bhayandar",
    subtitle: "Doorstep shipping guide",
  },
];

const PALETTES = [
  ["#06343d", "#0c848d"],
  ["#0a2f4a", "#1a6f9c"],
  ["#12352f", "#1a8a6d"],
  ["#2a1f3d", "#6b4c9a"],
  ["#3d2414", "#c46b2a"],
  ["#3d1a14", "#c45a2a"],
  ["#14243d", "#2a6bc4"],
  ["#1a2e1f", "#3d8a4a"],
  ["#3d1428", "#c42a6b"],
  ["#14283d", "#0c848d"],
  ["#2e2414", "#8a6b3d"],
];

function unescapeMd(s) {
  return s.replace(/\\([.\\])/g, "$1").trim();
}

function stripHeadingMarks(s) {
  return unescapeMd(s.replace(/^\*+|\*+$/g, "").replace(/\*\*/g, "").trim());
}

function parseBlocks(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+$/, ""))
    .filter((l, i, arr) => !(l.startsWith("# ") && (i === 0 || arr.slice(i).every((x) => !x || x.startsWith("# ")))));

  while (lines.length && (lines[0] === "" || lines[0].startsWith("# "))) lines.shift();
  while (lines.length && (lines[lines.length - 1] === "" || lines[lines.length - 1].startsWith("# "))) {
    lines.pop();
  }

  const blocks = [];
  let i = 0;

  const flushBoldStack = (stack) => {
    if (!stack.length) return;
    blocks.push({ type: "ul", items: stack.splice(0, stack.length) });
  };

  const boldOnlyStack = [];

  while (i < lines.length) {
    const line = lines[i];

    if (!line) {
      flushBoldStack(boldOnlyStack);
      i += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      i += 1;
      continue;
    }

    const h2 = line.match(/^##\s+\*\*(.+)\*\*\s*$/) || line.match(/^##\s+(.+)$/);
    if (h2) {
      flushBoldStack(boldOnlyStack);
      blocks.push({ type: "h2", text: stripHeadingMarks(h2[1]) });
      i += 1;
      continue;
    }

    const h3 = line.match(/^###\s+\*\*(.+)\*\*\s*$/) || line.match(/^###\s+(.+)$/);
    if (h3) {
      flushBoldStack(boldOnlyStack);
      blocks.push({ type: "h3", text: stripHeadingMarks(h3[1]) });
      i += 1;
      continue;
    }

    if (/^\*\s+/.test(line)) {
      flushBoldStack(boldOnlyStack);
      const items = [];
      while (i < lines.length && /^\*\s+/.test(lines[i])) {
        items.push(unescapeMd(lines[i].replace(/^\*\s+/, "").replace(/\s+$/, "")));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const boldOnly = line.match(/^\*\*(.+)\*\*$/);
    if (boldOnly && !line.includes(" → ") && boldOnly[1].length < 90) {
      boldOnlyStack.push(unescapeMd(boldOnly[1]));
      i += 1;
      continue;
    }

    flushBoldStack(boldOnlyStack);
    blocks.push({ type: "p", text: unescapeMd(line) });
    i += 1;
  }

  flushBoldStack(boldOnlyStack);
  return blocks;
}

function excerptFromBlocks(blocks) {
  const first = blocks.find((b) => b.type === "p");
  if (!first) return "";
  const plain = first.text.replace(/\*\*/g, "");
  return plain.length > 180 ? `${plain.slice(0, 177).trim()}...` : plain;
}

function wordCount(blocks) {
  return blocks
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      return b.text;
    })
    .join(" ")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function makeSvg(index, cover, subtitle) {
  const [from, to] = PALETTES[index % PALETTES.length];
  const id = `g${index}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${cover}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#${id})"/>
  <circle cx="1020" cy="-40" r="280" fill="rgba(255,255,255,0.08)"/>
  <circle cx="80" cy="620" r="180" fill="rgba(255,255,255,0.06)"/>
  <rect x="64" y="64" width="88" height="72" rx="10" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4"/>
  <path d="M64 88h88M108 64v72" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4"/>
  <text x="64" y="430" fill="rgba(255,255,255,0.7)" font-family="Georgia, serif" font-size="22" letter-spacing="3">SHYP BYTE</text>
  <text x="64" y="500" fill="#ffffff" font-family="Georgia, serif" font-size="48" font-weight="700">${cover}</text>
  <text x="64" y="548" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif" font-size="24">${subtitle}</text>
</svg>
`;
}

const md = fs.readFileSync(mdPath, "utf8");
const titleRe = /^# \*\*(.+)\*\*\s*$/gm;
const titles = [];
let m;
while ((m = titleRe.exec(md)) !== null) {
  titles.push({ title: stripHeadingMarks(m[1]), index: m.index, end: m.index + m[0].length });
}

const blogs = titles.map((t, i) => {
  const bodyStart = t.end;
  const bodyEnd = i + 1 < titles.length ? titles[i + 1].index : md.length;
  const raw = md.slice(bodyStart, bodyEnd);
  const meta = META.find((item) => item.match.test(t.title));
  if (!meta) {
    throw new Error(`No meta for title: ${t.title}`);
  }
  const blocks = parseBlocks(raw);
  const words = wordCount(blocks);
  const minutes = Math.max(4, Math.round(words / 200));
  const img = `/assets/images/blogs/${meta.slug}.svg`;
  return {
    id: i + 1,
    slug: meta.slug,
    author: "Shyp Byte Team",
    date: meta.date,
    readTime: `${minutes} min read`,
    title: t.title,
    excerpt: excerptFromBlocks(blocks),
    tags: meta.tags,
    img,
    cover: meta.cover,
    content: blocks,
  };
});

const imgDir = path.join(root, "public", "assets", "images", "blogs");
fs.mkdirSync(imgDir, { recursive: true });
blogs.forEach((blog, i) => {
  const meta = META[i];
  fs.writeFileSync(path.join(root, "public", blog.img), makeSvg(i, meta.cover, meta.subtitle));
});

fs.writeFileSync(
  path.join(root, "src", "data", "blogs.json"),
  JSON.stringify(blogs, null, 2) + "\n"
);

console.log(`Wrote ${blogs.length} blogs`);
blogs.forEach((b) => console.log(`- ${b.slug} (${b.readTime}, ${b.content.length} blocks)`));
