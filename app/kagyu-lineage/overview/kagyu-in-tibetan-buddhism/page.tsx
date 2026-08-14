import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "藏傳佛教之噶舉傳承 | Kagyu",
  description: "藏傳佛教之噶舉傳承介紹。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="噶舉傳承於藏傳佛教橫幅">
        <img
          alt="噶舉傳承於藏傳佛教橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero001.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">藏傳佛教之噶舉傳承</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">噶舉傳承源自釋迦牟尼佛</WatermarkHeading>

            <p>
              傳承法系中的第一位上師帝洛巴(Tilopa)是印度八十四大成就者之一。證悟的瑜加士帝洛巴直接由法身金剛總持佛(Dorje Chang)的報身，領受法教後，他依止了四位上師，接受並融合了四個成就傳承的法教；此法教如黃金念珠般的代代相傳。
            </p>

            <p>
              {renderKarmapaTextLinks(
                "帝洛巴之後依次為：大學者那洛巴(Naropa)，將佛法帶入西藏之大譯師馬爾巴(Marpa Lotsawa)，大瑜伽士密勒日巴 (Milarepa)，曾被佛陀預言的 證悟者岡波巴(Gampopa)，第一世噶瑪巴杜松虔巴。迄今傳至第十七世大寶法王噶瑪巴烏金欽列多傑(Ogyen Trinley Dorje)。",
              )}
            </p>

            <p>
              噶瑪巴建立了噶瑪噶舉(Karma Kagyu)傳承，他是噶舉傳承的中心導師，並且是藏傳佛教轉世制度的創始人，彰顯了菩薩「不住生死，不 入涅槃」的慈悲精神。歷代法王圓寂前，都會留下轉世預言信函，明確指出自己下一世將出生的地點，時辰，父母，姓名和出生時所示現的瑞相。
            </p>

            <p>
              噶舉(Kagyu)藏文的含意是「口傳」(Ka)及「傳承」(gyu)，它是以直接口喻方式將三身心要、四種成就法等等法教傳給弟子，以確保法教正確的延續。所謂傳承，是指佛陀的法教沒有間斷的代代相傳，由佛陀一直傳到今天。
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
