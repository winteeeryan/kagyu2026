import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { TeachersArticleNav } from "../_components/TeachersArticleNav";
import localStyles from "../tashi-jamchen-rinpoche/page.module.css";
import styles from "@/app/karmapa/main-seat/tsurphu/page.module.css";

const title = "尊貴 金剛上師 凱筑堪布";

export const metadata: Metadata = {
  title: `${title} | Kagyu`,
  description: "尊貴 金剛上師 凱筑堪布介紹。",
};

export default function KhenpoKhechokPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">{title}</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">{title}</WatermarkHeading>

            <figure className={localStyles.teacherPortrait}>
              <img alt={title} src="/about/master001.png" />
            </figure>

            <p className={`imageCaption ${localStyles.teacherCaption}`}>{title}</p>

            <p>
              堪布自幼即於心中萌生出家的願望。年僅五歲時，他主動請求父親陪同，前往蚌普寺，由尊貴的廣定大司徒泰錫度仁波切親自為其主持剃度儀式，圓滿了從小即深植心中的出家願心，成為噶瑪噶舉傳承的僧人。自此，他日夜精進，學習藏文的聽、說、讀、寫與文法，背誦大量經論，研習經典儀軌、唱誦，並掌握製作沙壇城及多瑪壇城食子等精細莊嚴之法事技藝，同時熟稔十三本尊壇城之儀典及修演金剛舞等傳統修持。
            </p>
            <p>
              為進一步研讀更深廣的佛學，堪布於十六歲時進入隴日蔣悲林（Lungrig Jamphel Ling）佛學院，依止尊貴的第十二世大司徒泰錫度仁波切、尊貴第十二世國師嘉察仁波切、堪千創古仁波切，以及智慧林佛學院諸多堪布座前，學習佛教經論、律儀與辯經。其間，他完整完成五部大論與密續經論等全部課程。佛學院畢業後，他旋即前往英國弘揚佛法，展開國際弘法之旅。
            </p>
            <p>
              在英國弘法期間，堪布心中生起強烈願望，希望深入修持諸本尊法門並完成三年閉關。因此，他隨即前往由尊貴的天噶仁波切主持、位於尼泊爾的邊謙光明禪修中心（Benchen Phuntsok Clear Light Meditation Center），展開嚴謹的三年八個月閉關實修。閉關期間，他於尊貴的天噶仁波切與桑傑年巴仁波切座前，完整領受噶瑪噶舉傳承的口傳、灌頂、心要口訣與諸多珍貴教授，包括金剛亥母、上樂金剛、施身法、那洛六瑜珈、氣脈明點、大手印禪修解脫道，以及上、下部密續全套教法。所有生起次第、圓滿次第與咒語持誦等修持皆於閉關中圓滿完成。出關後，堪布並蒙尊勝第十七世大寶法王親授多項灌頂與教授，加持深重。
            </p>
            <p>
              堪布為一位真正解行並重的實修行者，並能以流利中文直接教授佛法，實為殊勝難得。堪布心願在於依次第傳授噶瑪噶舉傳承的經論與實修，循序引導佛弟子深入修學，趣入解脫大道。祈願眾生共成佛道，離苦得樂，同登彼岸。期盼學子們能把握此一難遭難遇之良機。
            </p>

            <EndMarker />
            <TeachersArticleNav currentSlug="khenpo-khechok" />
          </div>
        </div>
      </article>
    </main>
  );
}
