import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "黃金珠鬘 - 傳承概述 | Kagyu",
  description: "黃金珠鬘傳承概述、噶舉傳承源流與四不共傳承法介紹。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="黃金珠鬘傳承概述橫幅">
        <img
          alt="黃金珠鬘傳承概述橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero005.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">黃金珠鬘 - 傳承概述</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <p>
              {renderKarmapaTextLinks(
                "噶舉傳承第一位上師帝洛巴以口傳教法，一代一代連續無間斷地將噶舉傳承的法教完整地傳至第十七世大寶法王噶瑪巴。透過這活的傳承鏈，上師們將佛陀法教完整 地保存及延續，這是證悟上師與全然虔信弟子之間的殊勝連結。所有藏傳佛教的傳承，都將上師與弟子的關係視為非常神聖。",
              )}
            </p>

            <p>
              噶瑪噶舉傳承殊勝之處，是上師弟子間以「口耳相傳，以心印心」的方式如一串黃金念珠一般，將殊勝秘密的禪修法教傳遞下去。為表示對傳承上師們極大的敬意，故稱為「黃金珠鬘」。
            </p>

            <p>
              以下簡單介紹噶舉傳承及傳承創建者，數世紀以來，他們口耳相傳把尊貴的法教傳遞迄今。
            </p>

            <WatermarkHeading as="h2">噶舉傳承</WatermarkHeading>

            <p>噶舉傳承源自釋迦牟尼佛，經由大瑜伽士馬爾巴譯師將此無間斷的傳承，由印度帶入西藏。</p>

            <h4>大譯師馬爾巴 (Marpa 1012~1097)</h4>
            <p>
              馬爾巴早期跟隨了薩迦派卓明耶喜喇嘛(Lama Drogmi Yeshe 993~1050)學習梵文，然後三次去印度，四次去尼泊爾求法。他曾跟隨一百零八位上師學習，而他主要的兩位上師是那洛巴(Naropa)和梅 紀巴(Maitripa)。
            </p>

            <h4>帝洛巴和那洛巴 (Tilopa 989~1069，Naropa 1016~1100)</h4>
            <p>
              那洛巴授予馬爾巴四種噶舉不共傳承法(四瑜伽)：幻化及光明瑜伽(luminosity)、夢瑜伽(dream)、拙火瑜伽(innerheat)、中陰及遷識瑜伽(illusory body)(以上四種傳承法，經過那洛巴衍義成為那洛六法)。那洛巴從帝洛巴直接接法。帝洛巴則從兩個傳承承接此四大成就傳承法：從金剛總持直接接法，是謂近傳；從印度上師們接法是謂遠傳，是間接接法，因為不是直接由釋迦牟尼佛傳法。帝洛巴和那洛巴都是古印度那瀾陀佛學院最殊勝的的學者(Panditas)及大成就者。
            </p>

            <h4>密勒日巴 (Milarepa 1040~1123)</h4>
            <p>
              馬爾巴將傳承帶入西藏，傳授給他的弟子也是傳承的繼承人密勒日巴。密勒日巴是西藏最著名及最有成就的密續瑜伽士，他在一生之中便獲得最高的證悟。
            </p>
            <p>
              密勒日巴承接了閉關實修的教法，而馬爾巴很多優秀的弟子如哦秋多傑(Ngok Choku Dorje)，楚敦旺給多傑(Tsurton Wanggyi Dorje)和梅通千波(Meyton Chenpo)承接了學院經教的教法。這是噶舉傳承分為實修證法及經教教法傳承的開始。
            </p>

            <h4>岡波巴 (Gampopa 1079~1153)</h4>
            <p>
              岡波巴大師亦名達波拉傑(Dhakpo Lhaje)，與惹瓊巴(Rechungpa 1084~1161)是密勒日巴的兩大弟子。在三部著名的經典裡，佛陀曾預言岡波巴的轉世。岡波巴融合了密勒日巴大手印傳承及噶當巴(Kadampa)道次第傳承，此傳承被稱為達波噶舉(Dhakpo Kagyu)
            </p>
            <p>
              {renderKarmapaTextLinks(
                "岡波巴有三個弟子：杜松虔巴(Düsum Khyenpa)，柏莫竹巴(Phakmo Trupa)和沙通修恭(Saltong Shogom)。杜松虔巴(1110~1193)，亦名 康巴烏瑟(Khampa Usey)就是第一世噶瑪巴，他建立了噶瑪噶舉傳承。",
              )}
            </p>

            <WatermarkHeading as="h2">四不共傳承法</WatermarkHeading>

            <p>
              {renderKarmapaTextLinks(
                "金剛總持將四不共傳承法，合而為一的直接傳給了帝洛巴。帝洛巴也從印度大師們學習了此四種法。對傳授此四傳承法的詳情，第三世噶瑪巴和第一世蔣貢康楚仁波切看法稍有不同。",
              )}
            </p>

            <p>
              {renderKarmapaTextLinks(
                "第三世噶瑪巴讓烱多傑(Rangjung Dorje)認為此四不共傳承上師為(1)龍樹菩薩(Nagarjuna)、聖天(Aryadeva)、月稱(Chandrakirti)和馬湯吉 (Matangi)是屬南方傳承；(2)東必巴(Dombipa)、毘那巴(Vinapa)、拉瓦巴(Lawapa)和國王因陀羅菩提(King Indrabhâti)是屬西方傳承；(3)魯易巴(Luyipa)、丹吉巴(Dengipa)、達瑞卡巴(Darikapa)和蘇卡達利 (Sukhadhari)屬北方傳承；(4)蘇卡 大悉地(Sukhamahasiddhi)、湯洛巴(Thanglopa)、星洛巴(Shinglopa)和卡那瑞巴(Karnaripa)屬東方傳承。 而蔣貢康楚(Jamgon Kongtrul)解釋所謂東南西北方，是指那些上師們家鄉所在，或是他們弘法的地方。",
              )}
            </p>

            <p>依據蔣貢康楚仁波切的看法，此四不共傳承是</p>
            <ul>
              <li>拙火瑜伽(San. candali；Tib gtum mo)，卡亞巴達(Carypada)傳授；</li>
              <li>幻化身(San. mayadeha;Tib. sgyu lus)和光明瑜伽(San. Prabhasvara;Tib. od gsal)，龍樹菩薩傳授；</li>
              <li>夢瑜伽(San. Svapna;Tib. rmi lam)，拉瓦巴傳授；</li>
              <li>中陰(San. antarabhava; Tib. bar do)和遷識瑜伽(San. samkranti; Tib. pho ba)，蘇卡悉地(Sukhasiddhi)傳授。</li>
            </ul>

            <p>
              帝洛巴也從國王因陀羅菩提(King Indrabhâti)學習智慧空行(prajna consort)，和馬湯吉(Matangi)學習遷識法。
            </p>

            <p>
              {renderKarmapaTextLinks(
                "另外第二世巴沃祖拉(Pawo Tsuklak)仁波切，他是第八世噶瑪巴的心子，大致同意第三世噶瑪巴的看法。請參閱他所著宗教歷史：「學者的盛宴」p740~744(北京1985)",
              )}
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
