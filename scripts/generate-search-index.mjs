import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import Fuse from "fuse.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "public/search-index.json");
const segmenter = new Intl.Segmenter("zh-Hant", { granularity: "word" });
const searchKeys = [
  { name: "title", weight: 5 },
  { name: "keywords", weight: 4 },
  { name: "category", weight: 2 },
  { name: "excerpt", weight: 1 },
  { name: "content", weight: 1 },
];

const staticPages = [
  ["首頁", "/", "網站資訊"],
  ["學院簡介", "/about/introduction", "關於學院"],
  ["成立緣起", "/about/origin", "關於學院"],
  ["師資與上師", "/about/teachers", "關於學院"],
  ["全省中心", "/about/centers", "關於學院", ["台北中心", "高雄中心", "花蓮中心", "嘉義分處"]],
  ["曲尼倫珠阿闍黎", "/about/teachers/acharya-chonyi-lhundrup", "師資與上師"],
  ["貝瑪讓卓阿闍黎", "/about/teachers/acharya-pema-rangdrol", "師資與上師"],
  ["吉美仁波切", "/about/teachers/khenpo-jigme-rinpoche", "師資與上師"],
  ["噶瑪拉登仁波切", "/about/teachers/khenpo-karma-rabten-rinpoche", "師資與上師"],
  ["堪布克確", "/about/teachers/khenpo-khechok", "師資與上師"],
  ["洛桑丹增堪布", "/about/teachers/khenpo-losang-tenzin", "師資與上師"],
  ["仁欽仁波切", "/about/teachers/khenpo-rinchen-rinpoche", "師資與上師"],
  ["赤列南嘉堪布", "/about/teachers/khenpo-trinley-namgyal", "師資與上師"],
  ["澤南仁波切", "/about/teachers/khenpo-tsenang-rinpoche", "師資與上師"],
  ["旺秋堪布", "/about/teachers/khenpo-wangchuk", "師資與上師"],
  ["永明法師", "/about/teachers/master-yongming", "師資與上師"],
  ["貝瑪旺千仁波切", "/about/teachers/pema-wangchen-rinpoche", "師資與上師"],
  ["蕭金松教授", "/about/teachers/professor-hsiao-chin-sung", "師資與上師"],
  ["札西蔣稱仁波切", "/about/teachers/tashi-jamchen-rinpoche", "師資與上師"],
  ["土登諾布仁波切", "/about/teachers/thubten-norbu-rinpoche", "師資與上師"],
  ["最新活動", "/activities/latest", "共修與活動"],
  ["過往活動", "/activities/past", "共修與活動"],
  ["活動報名", "/activities/registration", "共修與活動"],
  ["法王開示課程", "/courses", "聞・思・修", ["課程", "法王課程"]],
  ["活動行事曆", "/events", "共修與活動", ["活動", "法會", "共修"]],
  ["最新資訊", "/latest-info", "網站資訊"],
  ["傳承概述", "/kagyu-lineage/overview", "噶舉傳承"],
  ["藏傳佛教之噶舉傳承", "/kagyu-lineage/overview/kagyu-in-tibetan-buddhism", "噶舉傳承"],
  ["密續和大手印之道", "/kagyu-lineage/overview/tantra-and-mahamudra", "噶舉傳承"],
  ["噶舉的四大八小支派", "/kagyu-lineage/overview/four-greater-eight-lesser-schools", "噶舉傳承"],
  ["西藏和境外的主寺", "/kagyu-lineage/overview/monasteries", "噶舉傳承"],
  ["黃金珠鬘", "/kagyu-lineage/golden-garland", "噶舉傳承"],
  ["黃金珠鬘 - 傳承概述", "/kagyu-lineage/golden-rosary/overview", "噶舉傳承", ["黃金珠鬘傳承概述"]],
  ["黃金珠鬘法脈傳承祖師", "/kagyu-lineage/golden-rosary/masters", "噶舉傳承"],
  ["金剛總持", "/kagyu-lineage/golden-rosary/masters/vajradhara", "黃金珠鬘"],
  ["帝洛巴", "/kagyu-lineage/golden-rosary/masters/tilopa", "黃金珠鬘"],
  ["那洛巴", "/kagyu-lineage/golden-rosary/masters/naropa", "黃金珠鬘"],
  ["馬爾巴", "/kagyu-lineage/golden-rosary/masters/marpa", "黃金珠鬘"],
  ["密勒日巴", "/kagyu-lineage/golden-rosary/masters/milarepa", "黃金珠鬘"],
  ["岡波巴", "/kagyu-lineage/golden-rosary/masters/gampopa", "黃金珠鬘"],
  ["噶舉經典", "/kagyu-lineage/texts", "噶舉傳承"],
  ["當代傳承上師", "/kagyu-lineage/contemporary-masters", "噶舉傳承"],
  ["供燈的功德利益", "/kagyu-lineage/contemporary-masters/gyaltsab-rinpoche", "當代傳承上師", ["嘉察仁波切"]],
  ["中陰文武百尊之故事", "/kagyu-lineage/contemporary-masters/mingyur-rinpoche", "當代傳承上師", ["明就仁波切"]],
  ["觀音法門--慈悲的修行", "/kagyu-lineage/contemporary-masters/ogyen-trinley-dorje", "當代傳承上師", ["鄔金欽列多傑"]],
  ["具德巴沃仁波切長壽祈請文", "/kagyu-lineage/contemporary-masters/pawo-rinpoche", "當代傳承上師", ["巴沃仁波切"]],
  ["上師相應法", "/kagyu-lineage/contemporary-masters/rangjung-rigpe-dorje", "當代傳承上師", ["讓烱日佩多傑"]],
  ["大手印", "/kagyu-lineage/contemporary-masters/tai-situ-rinpoche", "當代傳承上師", ["大司徒仁波切"]],
  ["嘉華噶瑪巴歷史", "/karmapa/history", "大寶法王"],
  ["歷代大寶法王", "/karmapa/lineage", "大寶法王"],
  ["第一世噶瑪巴杜松虔巴", "/karmapa/lineage/dusum-khyenpa", "歷代大寶法王"],
  ["第二世噶瑪巴噶瑪巴希", "/karmapa/lineage/karma-pakshi", "歷代大寶法王"],
  ["第三世噶瑪巴讓烱多傑", "/karmapa/lineage/rangjung-dorje", "歷代大寶法王"],
  ["第四世噶瑪巴若佩多傑", "/karmapa/lineage/rolpe-dorje", "歷代大寶法王"],
  ["第五世噶瑪巴德新謝巴", "/karmapa/lineage/deshin-shekpa", "歷代大寶法王"],
  ["第六世噶瑪巴通瓦敦殿", "/karmapa/lineage/thongwa-donden", "歷代大寶法王"],
  ["第七世噶瑪巴確札嘉措", "/karmapa/lineage/chodrak-gyatso", "歷代大寶法王"],
  ["第八世噶瑪巴米覺多傑", "/karmapa/lineage/mikyo-dorje", "歷代大寶法王"],
  ["第九世噶瑪巴旺秋多傑", "/karmapa/lineage/wangchuk-dorje", "歷代大寶法王"],
  ["第十世噶瑪巴確映多傑", "/karmapa/lineage/choying-dorje", "歷代大寶法王"],
  ["第十一世噶瑪巴耶謝多傑", "/karmapa/lineage/yeshe-dorje", "歷代大寶法王"],
  ["第十二世噶瑪巴蔣秋多傑", "/karmapa/lineage/changchub-dorje", "歷代大寶法王"],
  ["第十三世噶瑪巴堆督多傑", "/karmapa/lineage/dudul-dorje", "歷代大寶法王"],
  ["第十四世噶瑪巴特秋多傑", "/karmapa/lineage/thekchok-dorje", "歷代大寶法王"],
  ["第十五世噶瑪巴卡恰多傑", "/karmapa/lineage/khakhyab-dorje", "歷代大寶法王"],
  ["第十六世噶瑪巴讓烱日佩多傑", "/karmapa/lineage/rangjung-rigpe-dorje", "歷代大寶法王"],
  ["第十七世噶瑪巴鄔金欽列多傑", "/karmapa/lineage/ogyen-trinley-dorje", "歷代大寶法王"],
  ["金剛寶冠【黑寶冠】", "/karmapa/black-crown", "大寶法王", ["黑寶冠"]],
  ["歷代法王噶瑪巴簡要祈請文", "/karmapa/short-prayer", "大寶法王", ["噶瑪巴簡要祈請文"]],
  ["噶瑪巴神聖的預言", "/karmapa/prophecies", "大寶法王"],
  ["噶瑪巴主寺法座", "/karmapa/main-seat", "大寶法王"],
  ["楚布寺", "/karmapa/main-seat/tsurphu", "噶瑪巴主寺法座"],
  ["隆德寺", "/karmapa/main-seat/rumtek", "噶瑪巴主寺法座"],
  ["噶瑪三乘法輪中心", "/karmapa/main-seat/ktd", "噶瑪巴主寺法座", ["KTD", "噶瑪三乘法輪寺"]],
  ["噶瑪師利那瀾陀高級佛學院", "/karmapa/main-seat/ksni", "噶瑪巴主寺法座", ["KSNI", "印度噶瑪師利那瀾陀寺"]],
  ["大寶法王墨寶", "/karmapa/calligraphy", "大寶法王"],
  ["有聲書", "/meditation-space/audiobooks", "靜心空間"],
  ["白噪音", "/meditation-space/white-noise", "靜心空間"],
  ["心靈開解", "/meditation-space/counsel", "靜心空間"],
  ["數位共修", "/meditation-space/digital-practice", "靜心空間"],
  ["留言牆", "/meditation-space/message-wall", "靜心空間"],
  ["線上捐款", "/online-donation", "護持與志工"],
  ["隱私權政策", "/privacy-policy", "網站資訊"],
  ["入門指南", "/study-practice/beginner-guide", "聞・思・修"],
  ["為什麼學佛", "/study-practice/beginner-guide/why-study-buddhism", "入門指南"],
  ["在家居士如何學佛", "/study-practice/beginner-guide/lay-practice", "入門指南"],
  ["藏傳佛教教育制度", "/study-practice/beginner-guide/tibetan-buddhist-education", "入門指南"],
  ["藏傳佛教之殊勝與方便", "/study-practice/beginner-guide/tibetan-buddhist-excellence-and-skillful-means", "入門指南"],
  ["現行台灣佛法教育", "/study-practice/beginner-guide/taiwan-dharma-education", "入門指南"],
  ["道場行儀", "/study-practice/beginner-guide/center-etiquette", "入門指南"],
  ["佛學百科", "/study-practice/buddhist-encyclopedia", "聞・思・修", ["佛學小百科"]],
  ["佛心慧語", "/study-practice/dharma-wisdom", "聞・思・修"],
  ["聞思經典", "/study-practice/dharma-wisdom/scriptures", "佛心慧語"],
  ["祖師語錄", "/study-practice/dharma-wisdom/masters-quotes", "佛心慧語"],
  ["聖者行傳", "/study-practice/dharma-wisdom/saints-biographies", "佛心慧語"],
  ["法王教言", "/study-practice/dharma-wisdom/karmapa-teachings", "佛心慧語"],
  ["護持資訊", "/support-volunteer/support-info", "護持與志工"],
  ["當期勸募專案", "/support-volunteer/current-fundraising", "護持與志工"],
  ["功德海", "/support-volunteer/merit-ocean", "護持與志工"],
  ["志工招募", "/support-volunteer/volunteer-recruitment", "護持與志工"],
  ["義賣商店", "/support-volunteer/charity-shop", "護持與志工"],
  ["官方相冊", "/visual-media/official-album", "影音媒體"],
  ["影音頻道", "/visual-media/video-channel", "影音媒體", ["法王開示", "法會紀實", "噶舉傳承", "弘法禪修", "公益慈善", "環保永續"]],
];

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase("zh-Hant")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function flattenText(...values) {
  return values.flat(Infinity).filter((value) => typeof value === "string").join(" ");
}

function extractKeywords(...values) {
  const text = normalizeText(flattenText(values));
  return [
    ...new Set(
      Array.from(segmenter.segment(text), ({ segment, isWordLike }) =>
        isWordLike ? segment.trim() : "",
      ).filter(Boolean),
    ),
  ];
}

function excerptFrom(value) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return Array.from(text).slice(0, 110).join("");
}

function makeDocument({ title, url, category, excerpt = "", content = "", keywords = [] }) {
  return {
    id: url,
    title: title.trim(),
    url,
    category: category.trim(),
    excerpt: excerptFrom(excerpt),
    content: normalizeText(content),
    keywords: extractKeywords(title, category, keywords),
  };
}

async function importFromRoot(relativePath) {
  return import(pathToFileURL(resolve(root, relativePath)).href);
}

async function getTeachingDocuments() {
  const { teachingTitles } = await importFromRoot(
    "app/study-practice/dharma-wisdom/karmapa-teachings/teachingTitles.ts",
  );
  return Promise.all(
    teachingTitles.map(async (title, index) => {
      const number = String(index + 1).padStart(3, "0");
      const bodyModule = await importFromRoot(
        `app/study-practice/dharma-wisdom/karmapa-teachings/teachingBodies/${number}.ts`,
      );
      const body = Object.values(bodyModule).find(Array.isArray) ?? [];
      const content = flattenText(body);
      return makeDocument({
        title,
        url: `/study-practice/dharma-wisdom/karmapa-teachings/${number}`,
        category: "法王教言",
        excerpt: content,
        content,
        keywords: ["大寶法王", "噶瑪巴", number],
      });
    }),
  );
}

async function getStructuredDocuments() {
  const [{ saintBiographies }, { volunteerProjects }, charityShop] = await Promise.all([
    importFromRoot("app/study-practice/dharma-wisdom/saints-biographies/saintData.ts"),
    importFromRoot("app/support-volunteer/volunteer-recruitment/projects.ts"),
    importFromRoot("data/charityShop.ts"),
  ]);
  const saints = saintBiographies.map((saint) =>
    makeDocument({
      title: saint.name,
      url: `/study-practice/dharma-wisdom/saints-biographies/${saint.slug}`,
      category: "聖者行傳",
      excerpt: saint.summary,
      content: flattenText(saint.order, saint.summary, saint.paragraphs),
      keywords: [saint.order, "八十四大成就者"],
    }),
  );
  const volunteer = volunteerProjects.map((project) =>
    makeDocument({
      title: project.title,
      url: project.href,
      category: "義工勸募專案",
      excerpt: project.excerpt,
      content: flattenText(project.date, project.excerpt, project.body),
      keywords: [project.date, "志工", "義工"],
    }),
  );
  const shop = [];
  for (const category of charityShop.charityShopCategories) {
    shop.push(
      makeDocument({
        title: category.title,
        url: category.href,
        category: "義賣商店",
        keywords: category.items.map((item) => item.title),
      }),
    );
    if (category.slug === "incense") {
      for (const incenseCategory of charityShop.getIncenseCategories()) {
        shop.push(
          makeDocument({
            title: incenseCategory.title,
            url: incenseCategory.href,
            category: "義賣商店・香品",
            excerpt: incenseCategory.summary,
            content: flattenText(incenseCategory.description, incenseCategory.details, incenseCategory.notes),
          }),
        );
        for (const product of charityShop.getIncenseProducts(incenseCategory)) {
          shop.push(
            makeDocument({
              title: product.shortTitle ?? product.title,
              url: product.href,
              category: `義賣商店・${incenseCategory.title}`,
              excerpt: product.summary ?? product.description,
              content: flattenText(product.title, product.code, product.description, product.details, product.notes),
              keywords: [product.title, product.code],
            }),
          );
        }
      }
    } else {
      for (const product of charityShop.getCharityShopDirectProducts(category)) {
        shop.push(
          makeDocument({
            title: product.shortTitle ?? product.title,
            url: product.href,
            category: `義賣商店・${category.title}`,
            excerpt: product.summary ?? product.description,
            content: flattenText(product.title, product.code, product.description, product.details, product.notes),
            keywords: [product.title, product.code],
          }),
        );
      }
    }
  }
  return [...saints, ...volunteer, ...shop];
}

function validateDocuments(documents) {
  const urls = new Set();
  for (const document of documents) {
    if (!document.title || !document.category || !document.url) {
      throw new Error(`搜尋文件缺少必填欄位：${JSON.stringify(document)}`);
    }
    if (!document.url.startsWith("/") || document.url.startsWith("//")) {
      throw new Error(`搜尋文件不是站內網址：${document.url}`);
    }
    if (urls.has(document.url)) {
      throw new Error(`搜尋文件網址重複：${document.url}`);
    }
    urls.add(document.url);
  }
}

const documents = [
  ...staticPages.map(([title, url, category, keywords = []]) =>
    makeDocument({ title, url, category, keywords }),
  ),
  ...(await getTeachingDocuments()),
  ...(await getStructuredDocuments()),
].sort((first, second) => first.url.localeCompare(second.url, "en"));

validateDocuments(documents);
const index = Fuse.createIndex(searchKeys, documents).toJSON();
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ documents, index })}\n`, "utf8");
console.log(`Search index: ${documents.length} documents -> ${outputPath}`);
