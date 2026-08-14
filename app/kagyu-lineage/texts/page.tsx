import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "噶舉經典 | Kagyu",
  description: "噶舉傳承經典、歷代噶瑪巴典籍與知識寶藏介紹。",
};

const kagyuMasterTexts = [
  "《馬爾巴全集》",
  "《密勒日巴道歌》",
  "《岡波巴全集》",
  "歷代噶瑪巴的著作",
  "止貢覺巴吉登松昆（Jigten Sumgön）的著作",
  "竹巴噶舉的重要導師  竹巴袞嘉貝瑪卡波（Drukpa Kunkhyen Pema Karpo） 的論著",
];

const karmapaPracticeTexts = [
  "第一世噶瑪巴 杜松虔巴（1110–1193）",
  "第二世噶瑪巴 噶瑪巴希（Karma Pakshi，1206–1282）",
  "第九世噶瑪巴 旺秋多傑（Wangchuk Dorje，1556–1603）",
];

const karmapaCommentaryTexts = [
  "第三世噶瑪巴 讓炯多傑（Rangjung Dorje，1284–1339）",
  "第七世噶瑪巴 確札嘉措（Chodrak Gyaltso，1454–1506）",
  "第八世噶瑪巴 米確多傑（Mikyo Dorje，1507–1554）",
];

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="噶舉經典橫幅">
        <img
          alt="噶舉經典橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero007.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">噶舉經典</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <p>
              噶舉傳承的經典來源主要分為兩大類：經藏《甘珠爾》（Kagyur）與論藏《丹珠爾》（Tengyur）。《甘珠爾》是佛陀法語的藏文譯本，《丹珠爾》則是以藏文翻譯的論著與諸多注釋典籍。
            </p>
            <p>
              除經論兩大藏外，噶舉傳承亦保存了大量噶舉大師的論著，包括印度瑜伽大成就者帝洛巴、那洛巴，以及西藏瑜伽士馬爾巴、密勒日巴、岡波巴、歷代噶瑪巴與各大噶舉傳承上師們的教法著作。
            </p>

            <WatermarkHeading as="h2">噶舉大師的重要典籍</WatermarkHeading>

            <p>西藏噶舉大師的代表性典籍包括：</p>
            <ul>
              {kagyuMasterTexts.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
            <p>這些經典構成了噶舉禪修、教法與法脈傳承的核心文獻。</p>

            <WatermarkHeading as="h2">歷代噶瑪巴的典籍貢獻</WatermarkHeading>

            <p>歷代噶瑪巴不斷編纂、補充並弘揚典籍，是噶舉傳承得以延續的重要因素之一。</p>
            <p>其中：</p>
            <ul>
              {karmapaPracticeTexts.map((text) => (
                <li key={text}>{renderKarmapaTextLinks(text)}</li>
              ))}
            </ul>
            <p>皆為偉大的禪師，並著有影響深遠的實修論著。</p>
            <p>另有多位噶瑪巴以經續注釋著稱，包括：</p>
            <ul>
              {karmapaCommentaryTexts.map((text) => (
                <li key={text}>{renderKarmapaTextLinks(text)}</li>
              ))}
            </ul>
            <p>
              {renderKarmapaTextLinks(
                "而 第十世噶瑪巴 卻英多傑（Chöying Dorje，1604–1674） 則以藝術家與詩人之身份聞名於世。",
              )}
            </p>

            <WatermarkHeading as="h2">《知識寶藏》的編纂</WatermarkHeading>

            <p>
              十九世紀時，蔣貢康楚仁波切（Jamgon Kongtrul，1813–1899）編輯巨著
              《知識寶藏》（Rinchen Terdzö），將噶舉傳承的教法、灌頂、儀軌完整匯集，成為後世最重要的參考典籍之一。
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
