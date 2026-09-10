import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import Fuse from "fuse.js";

const payload = JSON.parse(await readFile(new URL("../public/search-index.json", import.meta.url), "utf8"));
const urls = payload.documents.map((document) => document.url);

assert(payload.documents.length > 400, "搜尋文件數量異常");
assert.equal(new Set(urls).size, urls.length, "搜尋索引含有重複網址");
assert(!urls.includes("/lastest-info"), "轉址別名不應進入搜尋索引");
assert(!urls.includes("/search"), "搜尋頁不應索引自己");

const fuse = new Fuse(
  payload.documents,
  {
    threshold: 0.34,
    ignoreLocation: true,
    keys: [
      { name: "title", weight: 5 },
      { name: "keywords", weight: 4 },
      { name: "category", weight: 2 },
      { name: "excerpt", weight: 1 },
      { name: "content", weight: 1 },
    ],
  },
  Fuse.parseIndex(payload.index),
);

for (const [query, expectedUrl] of [
  ["謙卑胸懷", "/study-practice/dharma-wisdom/karmapa-teachings/001"],
  ["黑曜石念珠", "/support-volunteer/charity-shop/malas/005"],
  ["平安餐", "/support-volunteer/volunteer-recruitment/peace-meal-distribution"],
  ["佛學小百科", "/study-practice/buddhist-encyclopedia"],
]) {
  assert(
    fuse.search(query, { limit: 5 }).some(({ item }) => item.url === expectedUrl),
    `搜尋「${query}」未找到 ${expectedUrl}`,
  );
}

console.log(`Search index check passed: ${payload.documents.length} documents`);
