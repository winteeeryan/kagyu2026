import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { renderKarmapaTextLinks } from "@/components/ui/KarmapaTextLinks";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

export const metadata: Metadata = {
  title: "噶舉的四大八小支派 | Kagyu",
  description: "噶舉四大八小支派與香巴噶舉介紹。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="四大八小傳承橫幅">
        <img
          alt="四大八小傳承橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero002.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">噶舉的四大八小支派</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">四大噶舉支派</WatermarkHeading>

            <h4>噶瑪噶舉（Karma Kagyu／Kamtsang）</h4>
            <p>
              {renderKarmapaTextLinks(
                "第一世噶瑪巴杜松虔巴（1110–1170）於一一三九年三十歲時，禮岡波巴為根本上師，是岡波巴最主要的弟子之一，並創立「噶瑪噶舉」。",
              )}
            </p>
            <p>
              噶瑪噶舉因大寶法王噶瑪巴無間斷的轉世而日益興盛。歷代噶瑪巴在教法學識、禪修成就以及弘法利生事業方面，於西藏都極具聲望，並廣受各教派尊重。
            </p>
            <p>
              {renderKarmapaTextLinks(
                "第十六世大寶法王嘉華噶瑪巴讓炯日佩多傑（1924–1981），曾被視為整個噶舉系統的領袖。第十七世大寶法王嘉華噶瑪巴，目前住錫於印度達蘭薩拉。",
              )}
            </p>
            <p>
              噶瑪噶舉不僅承擔本傳承法教之保存與延續，也對自馬爾巴、密勒日巴、岡波巴以來的整體噶舉法脈之護持與弘揚，作出極大貢獻。至今，噶瑪噶舉亦是在西藏以外弘傳最廣的噶舉支派之一，其教法已為全世界佛弟子所學習與實修。
            </p>

            <h4>采巴噶舉（Tsalpa Kagyu）</h4>
            <p>
              喇嘛祥（Lama Zhang），亦名玉達巴宗都達巴（Yudakpa Tsondu Dakpa，1123–1193），是岡波巴弟子汪恭竹清寧波（Wangom Tsutrim Nyingpo）的弟子。
            </p>
            <p>
              他創立「采巴噶舉」，並在貢唐（Gungthang）地區建立寺院，門下弟子眾多，其中不乏具德大成就者，使此支派一度頗為興盛。
            </p>

            <h4>跋絨噶舉（Barom Kagyu）</h4>
            <p>
              跋絨達瑪旺秋（Barom Darma Wangchuk）為岡波巴的弟子，創立「跋絨噶舉」，並在西藏拉拓（Lhatök）地區北部建立跋絨寺，作為本派根本道場。跋絨噶舉在當地弘法利生，影響深遠。
            </p>

            <h4>帕竹噶舉（Phaktru／Phagmo Drupa Kagyu）</h4>
            <p>
              德謝帕莫竹巴多傑加波（Deshek Phakmo Drupa Dorje Gyalpo，1110–1170）亦為岡波巴之主要弟子之一，以修持大手印而著稱，創立「帕竹噶舉」。
            </p>
            <p>
              他在帕莫（Phakmo）區建立鄧薩梯寺（Densa Thil），作為根本道場。此後，其弟子們再於此基礎上開展出著名的「八小噶舉支派」，成為噶舉系統中重要的一支。
            </p>

            <WatermarkHeading as="h2">八小噶舉支派</WatermarkHeading>
            <p>以下八派皆源自帕竹噶舉傳承，是在歷代弟子弘法中逐漸形成的支派系統：</p>

            <h4>直貢噶舉（Drikhung Kagyu）</h4>
            <p>
              創始者為直貢覺巴吉登松吉昆波（Drikhung Kyopa Jigten Sumgyi Gönpo，1143–1217）。當代領袖為直貢怙主久貢切桑仁波切（Drikhung Kyapgön Chetsang Rinpoche，1946– ），住錫於印度德拉敦（Dehradun），統攝整體直貢噶舉之弘法事業。
            </p>

            <h4>竹巴噶舉（Drukpa Kagyu）</h4>
            <p>
              由帕莫竹巴弟子、大成就者林惹巴貝瑪多傑（Drupchen Lingrepa Pema Dorje，1128–1188）及其弟子確戒倉巴嘉惹耶謝多傑（Chöje Tsangpa Gyare Yeshe Dorje，1161–1211）共同創立。
            </p>
            <p>
              他們於中藏創建本派早期道場南竹寺（Namdruk）。十六世紀，大師袞嘉貝瑪卡波（Kunkhyen Pema Karpo，1527–1592）於南藏創建祖桑阿確林（Druk Sang-ngak Chöling），成為本派主寺。現住錫於印度大吉嶺的怙主竹千仁波切（Kyapgön Drukchen Rinpoche）為此傳承重要領袖之一。
            </p>
            <p>
              竹巴噶舉大師夏從恩王南吉（Shaptrung Ngakwang Namgyal）曾將此法系弘入不丹，使教法在不丹廣為流傳，並成為不丹之國教傳承。不丹國師尊者「堪布」（H.H. Je Khenpo）與國王吉美森給（Jigme Senge）為當代不丹竹巴噶舉的主要領導者。
            </p>

            <h4>達隆噶舉（Taklung Kagyu）</h4>
            <p>
              由達隆塘巴札西佩（Taklung Thangpa Tashi Pal，1142–1210）創立。當代主要領袖包括達隆夏祖仁波切（Taklung Shapdrung Rinpoche）、達隆瑪突仁波切（Taklung Matul Rinpoche）、察楚仁波切（Tsatrul Rinpoche）等，共同承擔本派傳承之弘揚。
            </p>

            <h4>雅桑噶舉（Yasang Kagyu）</h4>
            <p>
              由剎惹哇卡丹耶謝森給（Zarawa Kalden Yeshe Senge）及其弟子雅桑確吉蒙蘭（Yasang Chökyi Mönlam，1169–1233）共同創建。雅桑卻傑於一二〇六年建立雅桑寺，本派即以此寺名為「雅桑噶舉」。
            </p>

            <h4>綽普噶舉（Trophu Kagyu）</h4>
            <p>
              由帕莫竹巴之姪兒、亦為弟子之嘉察仁波切（Gyaltsab Rinpoche），與綽普大譯師欽波巴（Trophu Lotsawa Chenpo Pal，1173–1225）共同創立。綽普大譯師於中藏倉（Tsang）地區建立綽普寺及佛學院，本派遂以綽普寺為名，稱為「綽普噶舉」。
            </p>

            <h4>修賽噶舉（Shuksep Kagyu）</h4>
            <p>
              由傑貢竹清森給（Gyergom Tsultrim Senge，1144–1204）創立。一一八一年，他於中藏曲學（Chushur）地區之年普（Nyephu）創建修賽寺（Shuksep），本派因此寺而得名「修賽噶舉」。
            </p>

            <h4>也巴噶舉（Yelpa Kagyu）</h4>
            <p>
              由也巴卓托耶謝孜巴（Yelpa Drupthop Yeshe Tsekpa）創立，並於也浦（Yelphuk）建立本派主寺「也浦寺」，作為弘法與修行重心。
            </p>

            <h4>瑪倉噶舉（Martsang Kagyu）</h4>
            <p>由瑪倉些饒森給（Martsang Sherab Senge）創立，在當地弘傳噶舉法教，形成具特色之地方支派。</p>

            <WatermarkHeading as="h2">香巴噶舉</WatermarkHeading>
            <p>
              香巴噶舉並非源自達波噶舉的四大八小，而是另一條極為珍貴的密續傳承，由大瑜伽士瓊布南覺（Khyungpo Nyaljor，978–1079）所創立。
            </p>

            <h4>瓊布南覺及其印度上師</h4>
            <p>
              瓊布南覺前往尼泊爾時，先遇阿闍黎森瑪地（Acharya Sumati），向其學習語文及基礎學問，之後再赴印度廣求聖教。在印度期間，他先後依止一百五十餘位瑜伽士，廣受金剛乘珍貴口訣，獲得許多密續精髓。
            </p>
            <p>他最主要的上師包括：</p>
            <ul>
              <li>蘇卡悉達（Sukhasiddhi）</li>
              <li>惹胡拉古塔（Rahulagupta）</li>
              <li>尼古瑪（Niguma，傳說為那洛巴之空行母）</li>
            </ul>
            <p>返藏後，噶當派大師朗吉塘巴（Langri Thangpa）為他圓頂並授戒，肯定其傳承地位。</p>

            <h4>香巴噶舉的形成與道場</h4>
            <p>
              瓊布南覺於西藏澤區「香」（Shang）一帶建立多所寺院，使其傳承漸成一系，故以當地之名稱為「香巴噶舉」。他於藏地弘傳香巴噶舉法教三十餘年，門下弟子眾多，傳承一直延續至今，從未中斷。
            </p>

            <h4>香巴噶舉的主要教法</h4>
            <p>香巴噶舉所重視的教法，涵蓋顯密兩方之精華，主要包括：</p>
            <ul>
              <li>勝樂金剛（Chakrasambhava）</li>
              <li>喜金剛（Hevajra）</li>
              <li>各部大乘經典</li>
              <li>古夏三摩地（Guhyasamaja）</li>
              <li>尼古瑪六法（Six Doctrines of Niguma）</li>
              <li>大手印（Mahamudra）</li>
              <li>六臂白瑪哈嘎拉等護法教法</li>
            </ul>
            <p>
              {renderKarmapaTextLinks(
                "近代大師蔣貢康楚仁波切對恢復、整理與弘揚香巴噶舉傳承，付出巨大心力，使此法脈在藏地再度興盛。同時，在第十六世噶瑪巴的加持與感召之下，香巴噶舉也在世界各地廣植善緣，弟子遍佈歐美與亞洲。",
              )}
            </p>
            <p>
              近代最為人所共知的兩位香巴噶舉大師，為尊貴卡盧仁波切（Kalu Rinpoche）與波卡仁波切（Bokar Rinpoche），他們對將香巴噶舉的閉關傳統與實修教法介紹至世界各地，功不可沒。
            </p>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
