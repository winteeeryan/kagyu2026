#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "public", "wisdom-original");
const OUTPUT_DIR = path.join(ROOT, "public", "wisdom-edited");
const QUOTES_PATH = path.join(ROOT, "data", "wisdom-quotes.json");
const TEACHINGS_PATH = path.join(
  ROOT,
  "app",
  "study-practice",
  "dharma-wisdom",
  "karmapa-teachings",
  "page.tsx",
);

const WIDTH = 1080;
const HEIGHT = 1350;
const IMAGE_BOX = { x: 72, y: 72, width: 936, height: 650 };
const DEFAULT_ATTRIBUTION = "—— 法王噶瑪巴語錄・意譯";

const THEMES = [
  {
    match: /謙卑|傲慢|自讚|功德.*缺失|他人功德/,
    quotes: [
      "心懷謙卑，功德便有安住與增長的空間。",
      "少看自己的優越，多看他人的善與功德。",
    ],
  },
  {
    match: /慈悲|慈心|悲心|愛與|觀音|觀自在|四無量/,
    quotes: [
      "以慈悲照看眾生，也溫柔鬆開心中的負面情緒。",
      "真正的悲心，是願意承擔並立刻走向受苦的人。",
      "讓慈心與悲心，成為每一個行動的起點。",
    ],
  },
  {
    match: /菩提心|利他|眾生|大乘|菩薩/,
    quotes: [
      "心中不忘眾生，所行便能漸漸成為菩薩之道。",
      "願一切作為不只為自己，也能減輕眾生的苦。",
      "利他的心不是口號，而是生活中真實的選擇。",
    ],
  },
  {
    match: /無常|死亡|臨終|來世|暇滿|人身|生命|明天/,
    quotes: [
      "憶念無常，不是悲觀，而是提醒自己珍惜此刻。",
      "人身難得，莫讓短暫的生命消耗在無意義之中。",
      "不必等待明天；當下，就是開始修行的時刻。",
    ],
  },
  {
    match: /因果|業果|惡業|善業|定業|引業|滿業/,
    quotes: [
      "相信因果，便會更願意負責，也更懂得感恩。",
      "學習因果，是為了看見自己的過失與他人的功德。",
      "每一個念頭與行動，都在悄悄塑造未來。",
    ],
  },
  {
    match: /上師|善知識|弟子|依止|噶瑪巴千諾/,
    quotes: [
      "依止善知識，不是追隨外相，而是學習轉變自心。",
      "觀察上師的功德，也讓自己生起實踐的勇氣。",
      "最深的憶念，是讓自己的心逐漸契合上師的教言。",
    ],
  },
  {
    match: /皈依|三寶|佛、法、僧|佛法僧/,
    quotes: [
      "皈依不只是一分信心，更是願意走上覺醒之道。",
      "真正的皈依，是相信自己也能抵達覺悟。",
    ],
  },
  {
    match: /戒|律儀|布薩|黑法|白法/,
    quotes: [
      "守護戒律，就是在每一刻守護自己的善心。",
      "願心需要日常的守護，才能在順逆境中不退失。",
    ],
  },
  {
    match: /懺悔|罪|後悔|追悔|除障/,
    quotes: [
      "真誠看見過失，立願不再重犯，便是懺悔的力量。",
      "懺悔不是停在自責，而是清醒地重新選擇。",
    ],
  },
  {
    match: /隨喜|供養|七支|八供|八吉祥|積福|福德|資糧/,
    quotes: [
      "真心隨喜一切善行，自己的心也會明亮開闊。",
      "積聚福慧，不在聲勢，而在每一分清淨的善意。",
    ],
  },
  {
    match: /空性|無我|空正見|心經|般若|彼岸|法之異門|實相/,
    quotes: [
      "以空性的智慧鬆開執著，讓心回到本來的開放。",
      "無我不是失去自己，而是看見萬物彼此相依。",
      "放下對實有的緊抓，智慧才有生起的空間。",
    ],
  },
  {
    match: /煩惱|情緒|瞋|三毒|不動佛|生氣|負面/,
    quotes: [
      "煩惱如雨雲來去，心的本性仍如虛空不動。",
      "情緒生起時，先保持覺知，呼一口氣，再輕輕放下。",
      "看清煩惱，而不跟隨它，就是調伏自心的開始。",
    ],
  },
  {
    match: /禪修|放鬆|正念|安住|不要作意|座上修/,
    quotes: [
      "讓身心放鬆，安住當下片刻，也是一種修行。",
      "禪修之前，先鬆開緊繃，讓心自然回到清明。",
      "保持覺知，不追逐念頭，也不必排斥念頭。",
    ],
  },
  {
    match: /知足|快樂|貪欲|貪愛|感情|夫妻|孩子|工作|生活/,
    quotes: [
      "帶著知足的心，一口呼吸也能成為真實的幸福。",
      "生活從不離開佛法；工作與相處都是修心之處。",
      "放下緊抓，不讓貪著綁住心，才有自在的空間。",
    ],
  },
  {
    match: /出離|輪迴|解脫/,
    quotes: [
      "看見輪迴的苦，才能真心走向自在與解脫。",
      "出離不是逃避生活，而是不再被執著牽引。",
    ],
  },
  {
    match: /修行|修持|實修|修心|佛教徒|佛弟子|善良|做好人|聞思修|法/,
    quotes: [
      "修行不是外在的模樣，而是一次次改變自己的心。",
      "聽聞與思惟終要落實於生活，才會成為真正的智慧。",
      "少一些準備與藉口，現在就踏實走上修行之路。",
      "先做一個善良的人，再讓佛法照亮每一個選擇。",
    ],
  },
];

const FALLBACK_QUOTES = [
  "回到自心，在每一個當下練習清明與善意。",
  "讓心柔軟而清醒，所見的世界也會漸漸不同。",
  "真正的改變，從誠實看見自己的心開始。",
  "不隨外境起伏，安然照看此刻的一念心。",
];

function parseArgs(argv) {
  const options = { sample: null, only: null, force: false, dryRun: false, initQuotes: false, quality: 92 };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--force") options.force = true;
    else if (argument === "--dry-run") options.dryRun = true;
    else if (argument === "--init-quotes") options.initQuotes = true;
    else if (argument === "--sample") options.sample = Number(argv[++index]);
    else if (argument === "--only") options.only = argv[++index].split(",").map((value) => value.trim());
    else if (argument === "--quality") options.quality = Number(argv[++index]);
    else if (argument === "--help") options.help = true;
    else throw new Error(`Unknown option: ${argument}`);
  }
  if (options.sample !== null && (!Number.isInteger(options.sample) || options.sample < 1)) {
    throw new Error("--sample must be a positive integer");
  }
  if (!Number.isInteger(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error("--quality must be an integer from 1 to 100");
  }
  return options;
}

function printHelp() {
  console.log(`Generate 4:5 wisdom posters from public/wisdom-original.

Usage:
  npm run wisdom:posters -- [options]

Options:
  --sample N       Process the first N source images
  --only LIST      Process comma-separated filenames or numeric IDs
  --force          Rebuild outputs even when they are current
  --dry-run        Validate inputs and print planned work only
  --init-quotes    Rebuild data/wisdom-quotes.json from existing teachings
  --quality N      WebP quality from 1-100 (default: 92)
  --help           Show this help
`);
}

function listSourceImages() {
  if (!fs.existsSync(SOURCE_DIR)) throw new Error(`Source folder not found: ${SOURCE_DIR}`);
  return fs.readdirSync(SOURCE_DIR)
    .filter((filename) => /\.(?:jpe?g|png|webp)$/i.test(filename))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }));
}

function extractTeachingTitles() {
  const source = fs.readFileSync(TEACHINGS_PATH, "utf8");
  const start = source.indexOf("const teachingTitles = [");
  const end = source.indexOf("\n];", start);
  if (start < 0 || end < 0) throw new Error(`Could not find teachingTitles in ${TEACHINGS_PATH}`);
  const block = source.slice(start, end);
  return [...block.matchAll(/^\s*"((?:[^"\\]|\\.)*)",?$/gm)]
    .map((match) => JSON.parse(`"${match[1]}"`));
}

function restateTitle(title, index) {
  if (/^https?:\/\//.test(title)) return "讓身心放鬆，安住當下片刻，也是一種修行。";
  const theme = THEMES.find(({ match }) => match.test(title));
  const quotes = theme ? theme.quotes : FALLBACK_QUOTES;
  return quotes[index % quotes.length];
}

function buildQuoteMap(files) {
  const titles = extractTeachingTitles();
  if (titles.length < files.length) {
    throw new Error(`Only ${titles.length} teaching titles exist for ${files.length} source images`);
  }
  const entries = {};
  files.forEach((filename, index) => {
    entries[filename] = {
      quote: restateTitle(titles[index], index),
      attribution: DEFAULT_ATTRIBUTION,
      sourceTitle: titles[index],
    };
  });
  return {
    version: 1,
    description: "Traditional Chinese poster paraphrases mapped to wisdom source filenames. sourceTitle preserves editorial traceability.",
    generatedFrom: path.relative(ROOT, TEACHINGS_PATH),
    entries,
  };
}

function loadQuoteMap(files, rebuild) {
  if (rebuild || !fs.existsSync(QUOTES_PATH)) {
    const mapping = buildQuoteMap(files);
    fs.mkdirSync(path.dirname(QUOTES_PATH), { recursive: true });
    fs.writeFileSync(QUOTES_PATH, `${JSON.stringify(mapping, null, 2)}\n`);
    console.log(`[quotes] wrote ${files.length} entries to ${path.relative(ROOT, QUOTES_PATH)}`);
    return mapping;
  }
  return JSON.parse(fs.readFileSync(QUOTES_PATH, "utf8"));
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('\"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapChineseText(text, maxCharacters = 15) {
  const characters = [...String(text).replace(/\s+/g, "").trim()];
  const lines = [];
  const closingPunctuation = new Set(["，", "。", "、", "；", "：", "！", "？", "」", "』", "）"]);
  while (characters.length) {
    let count = Math.min(maxCharacters, characters.length);
    if (count < characters.length && closingPunctuation.has(characters[count])) count += 1;
    lines.push(characters.splice(0, count).join(""));
  }
  return lines;
}

function typographyFor(quote) {
  let fontSize = 52;
  let maxCharacters = 15;
  let lines = wrapChineseText(quote, maxCharacters);
  if (lines.length > 3) {
    fontSize = 46;
    maxCharacters = 17;
    lines = wrapChineseText(quote, maxCharacters);
  }
  if (lines.length > 4) {
    fontSize = 40;
    maxCharacters = 19;
    lines = wrapChineseText(quote, maxCharacters);
  }
  return { lines, fontSize, lineHeight: Math.round(fontSize * 1.62) };
}

function outputFilename(sourceFilename) {
  return `${path.parse(sourceFilename).name}-poster.webp`;
}

function matchesOnly(filename, only) {
  if (!only) return true;
  const stem = path.parse(filename).name;
  const numericId = (stem.match(/(\d+)$/) || [])[1];
  return only.some((value) => value === filename || value === stem || Number(value) === Number(numericId));
}

function isCurrent(sourcePath, outputPath) {
  if (!fs.existsSync(outputPath)) return false;
  const outputTime = fs.statSync(outputPath).mtimeMs;
  return outputTime >= fs.statSync(sourcePath).mtimeMs && outputTime >= fs.statSync(QUOTES_PATH).mtimeMs;
}

async function roundedPhotoBuffer(sourcePath, width, height) {
  const photo = await sharp(sourcePath)
    .rotate()
    .resize(width, height, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer();
  const radius = 5;
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="white"/></svg>`,
  );
  return sharp(photo).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

function washSvg() {
  return Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wash" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f4f0e8" stop-opacity="0.68"/>
        <stop offset="0.48" stop-color="#f4f0e8" stop-opacity="0.78"/>
        <stop offset="0.62" stop-color="#f4f0e8" stop-opacity="0.95"/>
        <stop offset="1" stop-color="#f4f0e8" stop-opacity="0.985"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#wash)"/>
  </svg>`);
}

function shadowSvg(x, y, width, height) {
  return Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="shadow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14"/></filter></defs>
    <rect x="${x + 6}" y="${y + 16}" width="${width - 12}" height="${height - 10}" rx="7" fill="#1f211e" opacity="0.17" filter="url(#shadow)"/>
  </svg>`);
}

function textSvg(quote, attribution, sequence) {
  const { lines, fontSize, lineHeight } = typographyFor(quote);
  const startY = 842;
  const quoteLines = lines.map((line, index) =>
    `<text x="128" y="${startY + index * lineHeight}" class="quote">${escapeXml(line)}</text>`,
  ).join("\n");
  const attributionY = startY + lines.length * lineHeight + 40;
  return Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .quote { font-family: "STHeiti", "Hiragino Sans GB", sans-serif; font-size: ${fontSize}px; font-weight: 300; letter-spacing: 2.8px; fill: #2f302c; }
      .attribution { font-family: "STHeiti", "Hiragino Sans GB", sans-serif; font-size: 24px; font-weight: 300; letter-spacing: 2.2px; fill: #66675f; }
      .sequence { font-family: "STHeiti", sans-serif; font-size: 17px; letter-spacing: 3px; fill: #85867f; }
    </style>
    <circle cx="130" cy="786" r="4" fill="#8b342d" opacity="0.72"/>
    <line x1="150" y1="786" x2="224" y2="786" stroke="#6f7069" stroke-width="1" opacity="0.52"/>
    ${quoteLines}
    <text x="130" y="${attributionY}" class="attribution">${escapeXml(attribution)}</text>
    <text x="950" y="1270" text-anchor="end" class="sequence">${escapeXml(sequence)}</text>
  </svg>`);
}

async function renderPoster(sourcePath, outputPath, entry, index, quality) {
  const metadata = await sharp(sourcePath).rotate().metadata();
  if (!metadata.width || !metadata.height) throw new Error("Source dimensions are unavailable");

  const scale = Math.min(IMAGE_BOX.width / metadata.width, IMAGE_BOX.height / metadata.height);
  const photoWidth = Math.max(1, Math.round(metadata.width * scale));
  const photoHeight = Math.max(1, Math.round(metadata.height * scale));
  const photoX = Math.round((WIDTH - photoWidth) / 2);
  const photoY = IMAGE_BOX.y + Math.round((IMAGE_BOX.height - photoHeight) / 2);

  const background = await sharp(sourcePath)
    .rotate()
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .modulate({ brightness: 0.78, saturation: 0.48 })
    .blur(38)
    .webp({ quality: 82 })
    .toBuffer();
  const photo = await roundedPhotoBuffer(sourcePath, photoWidth, photoHeight);

  await sharp(background)
    .composite([
      { input: washSvg(), left: 0, top: 0 },
      { input: shadowSvg(photoX, photoY, photoWidth, photoHeight), left: 0, top: 0 },
      { input: photo, left: photoX, top: photoY },
      { input: Buffer.from(`<svg width="${photoWidth}" height="${photoHeight}"><rect x="1" y="1" width="${photoWidth - 2}" height="${photoHeight - 2}" rx="5" fill="none" stroke="#fffdf8" stroke-opacity="0.72" stroke-width="2"/></svg>`), left: photoX, top: photoY },
      { input: textSvg(entry.quote, entry.attribution || DEFAULT_ATTRIBUTION, String(index + 1).padStart(3, "0")), left: 0, top: 0 },
    ])
    .webp({ quality, smartSubsample: true, effort: 5 })
    .toFile(outputPath);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) return printHelp();

  const allFiles = listSourceImages();
  const quoteMap = loadQuoteMap(allFiles, options.initQuotes);
  const missingQuotes = allFiles.filter((filename) => !quoteMap.entries?.[filename]?.quote);
  if (missingQuotes.length) {
    throw new Error(`Quote mapping is missing ${missingQuotes.length} file(s): ${missingQuotes.slice(0, 5).join(", ")}`);
  }

  let files = allFiles.filter((filename) => matchesOnly(filename, options.only));
  if (options.sample !== null) files = files.slice(0, options.sample);
  if (!files.length) throw new Error("No source images matched the requested selection");

  console.log(`[start] ${files.length} of ${allFiles.length} image(s); 1080x1350 WebP; quality ${options.quality}`);
  if (options.dryRun) {
    files.forEach((filename) => console.log(`[plan] ${filename} -> ${outputFilename(filename)}`));
    return;
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    sourceCount: allFiles.length,
    selectedCount: files.length,
    dimensions: { width: WIDTH, height: HEIGHT, aspectRatio: "4:5" },
    outputFormat: "webp",
    processed: [],
    skipped: [],
    failed: [],
  };

  for (let index = 0; index < files.length; index += 1) {
    const filename = files[index];
    const sourcePath = path.join(SOURCE_DIR, filename);
    const outputPath = path.join(OUTPUT_DIR, outputFilename(filename));
    const marker = `[${String(index + 1).padStart(String(files.length).length, "0")}/${files.length}]`;
    try {
      if (!options.force && isCurrent(sourcePath, outputPath)) {
        report.skipped.push(filename);
        console.log(`${marker} skip ${filename}`);
        continue;
      }
      await renderPoster(sourcePath, outputPath, quoteMap.entries[filename], allFiles.indexOf(filename), options.quality);
      const metadata = await sharp(outputPath).metadata();
      if (metadata.width !== WIDTH || metadata.height !== HEIGHT) {
        throw new Error(`Unexpected output dimensions ${metadata.width}x${metadata.height}`);
      }
      report.processed.push(filename);
      console.log(`${marker} ok   ${filename} -> ${outputFilename(filename)}`);
    } catch (error) {
      report.failed.push({ filename, error: error.message });
      console.error(`${marker} FAIL ${filename}: ${error.message}`);
    }
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, "_report.json"), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`[done] processed=${report.processed.length} skipped=${report.skipped.length} failed=${report.failed.length}`);
  console.log(`[done] output=${OUTPUT_DIR}`);
  if (report.failed.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`[fatal] ${error.stack || error.message}`);
  process.exitCode = 1;
});
