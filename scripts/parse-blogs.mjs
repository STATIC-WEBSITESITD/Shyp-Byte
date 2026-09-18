import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const mdPath = path.join(root, "public", "shypbyte blogs.md");

const META = [
  {
    match: /Diwali Courier Guide 2026/,
    slug: "diwali-courier-guide-2026",
    tags: ["Diwali", "2026", "International"],
    date: "18/09/2026",
    cover: "Diwali 2026 Guide",
    subtitle: "Gifts, parcels & orders",
  },
  {
    match: /International Courier from Andheri/,
    slug: "international-courier-from-andheri",
    tags: ["Andheri", "Doorstep Pickup", "International"],
    date: "18/09/2026",
    cover: "Courier from Andheri",
    subtitle: "Doorstep to worldwide",
  },
  {
    match: /Diwali Shipping for Indian Businesses/,
    slug: "diwali-shipping-for-indian-businesses",
    tags: ["Diwali", "Business", "E-commerce"],
    date: "17/09/2026",
    cover: "Diwali Business Shipping",
    subtitle: "Orders to customers abroad",
  },
  {
    match: /Sending Diwali Sweets Abroad/,
    slug: "sending-diwali-sweets-abroad",
    tags: ["Diwali", "Sweets", "Food Shipping"],
    date: "17/09/2026",
    cover: "Diwali Sweets Abroad",
    subtitle: "What to know before shipping",
  },
  {
    match: /Diwali Gift Shipping from India/,
    slug: "diwali-gift-shipping-from-india",
    tags: ["Diwali", "Packing", "Customs"],
    date: "16/09/2026",
    cover: "Diwali Gift Shipping",
    subtitle: "Packing, docs & customs",
  },
  {
    match: /International Courier from Goregaon/,
    slug: "international-courier-from-goregaon",
    tags: ["Goregaon", "International Courier", "220+ Countries"],
    date: "16/09/2026",
    cover: "Courier from Goregaon",
    subtitle: "Ship to 220+ countries",
  },
  {
    match: /International Courier from Malad/,
    slug: "international-courier-from-malad",
    tags: ["Malad", "Business", "Personal"],
    date: "16/09/2026",
    cover: "Courier from Malad",
    subtitle: "Business & personal shipping",
  },
  {
    match: /International Courier from Kandivali/,
    slug: "international-courier-from-kandivali",
    tags: ["Kandivali", "Documents", "Parcels"],
    date: "16/09/2026",
    cover: "Courier from Kandivali",
    subtitle: "Documents & parcels abroad",
  },
  {
    match: /International Courier from Borivali/,
    slug: "international-courier-from-borivali",
    tags: ["Borivali", "Doorstep Pickup", "International"],
    date: "16/09/2026",
    cover: "Courier from Borivali",
    subtitle: "How doorstep pickup works",
  },
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
  ["#1a3040", "#2a8a9c"],
  ["#2a1840", "#6b3d9a"],
  ["#18402a", "#3d9a6b"],
  ["#402818", "#9a6b3d"],
  ["#183040", "#3d6b9a"],
  ["#401828", "#9a3d6b"],
  ["#284018", "#6b9a3d"],
  ["#301840", "#7a3d9a"],
  ["#184038", "#3d9a8a"],
];

function unescapeMd(s) {
  return s.replace(/\\([.\\])/g, "$1").trim();
}

function stripHeadingMarks(s) {
  return unescapeMd(s.replace(/^\*+|\*+$/g, "").replace(/\*\*/g, "").trim());
}

/** Fix Google Docs export quirks: stray `# ` prefixes on body/list lines. */
function normalizeLine(line) {
  let s = line.replace(/\s+$/, "");
  if (/^\*\s+#\s+/.test(s)) {
    s = s.replace(/^\*\s+#\s+/, "* ");
  }
  // `# **Title**` that is NOT a real article title → treat as body text
  const h1Bold = s.match(/^#\s+\*\*(.+)\*\*\s*$/);
  if (h1Bold) {
    const maybeTitle = stripHeadingMarks(h1Bold[1]);
    const isArticle = META.some((item) => item.match.test(maybeTitle));
    if (!isArticle) {
      s = s.replace(/^#\s+/, "");
    }
  } else if (/^#\s+/.test(s) && !/^##/.test(s)) {
    s = s.replace(/^#\s+/, "");
  }
  return s;
}

function parseBlocks(raw) {
  const lines = raw.split(/\r?\n/).map(normalizeLine);

  while (lines.length && (lines[0] === "" || /^#\s+\*\*/.test(lines[0]))) lines.shift();
  while (
    lines.length &&
    (lines[lines.length - 1] === "" ||
      /^#\s+\*\*/.test(lines[lines.length - 1]) ||
      /^#\s*Tab\s+\d+/i.test(lines[lines.length - 1]))
  ) {
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

    // Skip truncated tab titles / stray H1 leftovers
    if (/^#\s+/.test(line) && !/^##/.test(line)) {
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
  const escapeXml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${escapeXml(cover)}">
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
  <text x="64" y="500" fill="#ffffff" font-family="Georgia, serif" font-size="48" font-weight="700">${escapeXml(cover)}</text>
  <text x="64" y="548" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif" font-size="24">${escapeXml(subtitle)}</text>
</svg>
`;
}

const md = fs.readFileSync(mdPath, "utf8");
const titleRe = /^# \*\*(.+)\*\*\s*$/gm;
const found = [];
let m;
while ((m = titleRe.exec(md)) !== null) {
  const title = stripHeadingMarks(m[1]);
  const meta = META.find((item) => item.match.test(title));
  if (!meta) continue; // skip process-step lines wrongly marked as H1
  found.push({ title, meta, index: m.index, end: m.index + m[0].length });
}

// Keep META display order (latest first), not raw MD order
const bySlug = new Map(found.map((f) => [f.meta.slug, f]));
const ordered = META.map((meta) => {
  const hit = bySlug.get(meta.slug);
  if (!hit) throw new Error(`Missing article in markdown for: ${meta.slug}`);
  return hit;
});

const blogs = ordered.map((t, i) => {
  const nextInMd = found
    .filter((f) => f.index > t.index)
    .sort((a, b) => a.index - b.index)[0];
  const bodyEnd = nextInMd ? nextInMd.index : md.length;
  const raw = md.slice(t.end, bodyEnd);
  const blocks = parseBlocks(raw);
  const words = wordCount(blocks);
  const minutes = Math.max(4, Math.round(words / 200));
  const img = `/assets/images/blogs/${t.meta.slug}.svg`;
  return {
    id: i + 1,
    slug: t.meta.slug,
    author: "Shyp Byte Team",
    date: t.meta.date,
    readTime: `${minutes} min read`,
    title: t.title,
    excerpt: excerptFromBlocks(blocks),
    tags: t.meta.tags,
    img,
    cover: t.meta.cover,
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
