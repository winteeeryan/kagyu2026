import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "西藏和境外的主寺 | Kagyu",
  description: "噶舉傳承主要寺院、境外道場與當代領導介紹。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="噶舉寺院橫幅">
        <img
          alt="噶舉寺院橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero004.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">西藏和境外的主寺</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">噶舉傳承主要寺院與道場</WatermarkHeading>

            <p>
              馬爾巴譯師最早的主寺位於南藏洛札（Lhodrak）地區，至今在附近仍可見其弟子密勒日巴為師父興建的九層塔。大瑜伽士密勒日巴的修行足跡遍布喜瑪拉雅山脈諸多山洞，皆為後世敬仰的聖地。其心子岡波巴大師則在南藏達波地區興建達拉岡波寺（Dhaklha Gampo），成為噶舉傳承的第一座主寺，也是噶舉傳承早期最珍貴的重要道場之一。
            </p>

            <p>
              {renderKarmapaTextLinks(
                "隨後，岡波巴大師的弟子以及帕莫竹巴的弟子們，相繼在西藏各地廣建寺院。其中最具代表性者，為第一世噶瑪巴杜松虔巴於中藏吐龍峽谷創建的楚布寺（Tsurphu）。楚布寺歷經數世紀，一直作為噶舉傳承的總主寺，統攝諸方道場。在西藏境外，第十六世噶瑪巴於印度錫金創建隆德寺，成為噶舉傳承在域外最重要的根本道場。",
              )}
            </p>

            <p>
              其他重要寺院包括：中藏直貢地區，由直貢覺巴吉登松昆（Drikhung Kyopa Jikten Sumgön）所創建的直貢梯寺（Drikhung Thil），為直貢噶舉之主寺。中藏南部的南竹寺，由大成就者林惹巴（Drupchen Lingrepa）與倉巴嘉惹（Tsangpa Gyare）所建；其南方之祖桑阿確林寺（Druk Sang-ngak Chöling）則由袞嘉貝瑪卡波（Kunkhyen Pema Karpo，1527–1592）創立，是竹巴噶舉最重要的兩大主寺。
            </p>

            <p>
              東藏德格地區之八邦寺，由第八世大司徒仁波切確吉穹乃（Chökyi Jungney，1700–1774）於一七二七年創建，是噶瑪噶舉在康區最重要的主寺之一。（印度喜馬偕爾邦比爾城的八邦學院，則為尊貴第十二世大司徒仁波切所創立。）
            </p>

            <p>
              同樣位於東藏德格地區的察卓仁千札克寺（Tsandra Rinchen Drak），為蔣貢康楚（Jamgön Kongtrul，1813–1899）所創建；尊貴第三世蔣貢康楚仁波切（1954–1992）則於尼泊爾加德滿都興建普拉哈里寺（Pullhahari Monastery），以承續其弘法事業。確嘎岡寺（Chögar Gong）位於中藏楚布一帶，為國師嘉察巴（Goshir Gyaltsab）轉世系統所建。
            </p>

            <p>
              一九五九年中國軍隊進入西藏，以及其後文化大革命期間，多數寺院遭到嚴重毀壞。然在中國境內外佛教徒之護持及藏人不懈努力之下，多數寺院已陸續修復重建。同時，各寺院之上師及仁波切們亦於印度、尼泊爾、不丹等地，興建境外主寺與佛學道場，以延續傳承慧命並培養新一代僧眾與轉世仁波切。
            </p>

            <WatermarkHeading as="h2">噶舉傳承的當代領導</WatermarkHeading>
            <p>
              {renderKarmapaTextLinks(
                "第十六世大寶法王噶瑪巴圓寂後，其四大心子共同承擔起維繫與弘揚噶舉傳承之重任。其轉世——尊貴第十七世大寶法王噶瑪巴鄔金欽列多傑（Ogyen Trinley Dorje）——誕生於東藏康區拉拓地區，自幼於西藏楚布寺接受噶舉傳承之基礎教育，並於楚布寺正式陞座。",
              )}
            </p>

            <p>
              {renderKarmapaTextLinks(
                "公元二〇〇〇年一月初，法王離開西藏，抵達印度達蘭薩拉（Dharamsala），在當地繼續接受完整的佛學教育、灌頂與傳承，並從第十六世噶瑪巴諸位心子及嫡傳弟子處，圓滿承接全部噶舉法脈。",
              )}
            </p>

            <p>
              {renderKarmapaTextLinks(
                "今日，第十七世大寶法王噶瑪巴鄔金欽列多傑，即為噶舉傳承之最高領導者，肩負統攝傳承、護持教法與利益眾生之重任。",
              )}
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
