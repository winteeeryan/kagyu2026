import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { ContemporaryMastersArticleNav } from "../_components/ContemporaryMastersArticleNav";

export const metadata: Metadata = {
  title: "供燈的功德利益 | Kagyu",
  description: "第十二世嘉察仁波切開示供燈的功德利益。",
};

const lampOfferingBenefits = [
  "宛如明燈般照亮世間。",
  "無論生於何處，眼睛不受疾病侵擾。",
  "得天眼。",
  "有分辨善惡的智慧。",
  "消除大黑暗、無明。",
  "獲得明智智慧。",
  "不會出生在幽暗昏庸的地方。",
  "具大福報。",
  "命終生天。",
  "速登涅槃。",
];

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="第十二世嘉察仁波切橫幅">
        <img
          alt="第十二世嘉察仁波切橫幅"
          className={styles.bannerImage}
          src="/kagyu-lineage/kagyulineagehero008.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">供燈的功德利益</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">尊貴的第十二世嘉察仁波切</WatermarkHeading>

            <h4>供燈的功德利益</h4>

            <p>《佛為首迦長者說業報差別經》：以恭敬心布施燈具，可得十種福德：</p>
            <ol>
              {lampOfferingBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ol>

            <h4>成佛來自過去施燈之功德</h4>

            <p>
              過去二十五阿僧祇劫時，娑婆世界有位波塞其國王，統領百千小國，各有一位太子和公主。愛子名為「寶髮」，公主名為「牟尼」，他們倆經常供佛齋僧，深具善慧。當時有位聖友比丘，經常乞化燃燈用具，以供佛及僧眾而久不間斷。牟尼公主知道之後，非常歡喜，命令人迎請聖友比丘來，公主對他說道：「我也想要發心布施，你燃燈所需的用具，就由我來供養，好嗎？」聖友比丘聽聞後，亦欣然答應。
            </p>

            <p>
              以公主所供養的酥油、燈炷，聖友比丘更加勤於燃燈供佛。後來，迦葉如來為聖友比丘授記：「你將於未來阿僧祇劫成佛，名號『定光如來』。」並授記牟尼公主：「你將於未來阿僧祇劫成佛，名號『釋迦牟尼』。」
            </p>

            <p>
              「阿難，你們知道嗎？聖友比丘就是定光如來，而牟尼公主也就是我的前生。我之所以能夠成佛，就是歷劫以來所修布施明燈所獲得的果報。」四眾弟子聞佛所言，皆歡喜地發心燃燈供佛。因此，我們明瞭誠心點燈供佛將招感無量福報，尤其種下成佛因緣。
            </p>

            <p>
              「佛前供燈」具有佛性覺醒的表徵，藏傳佛教中，燃燈供佛的意義分別為外、內及秘供等三個層面，「外供養」是以實際外在實體（如蠟、油等）經燃燒產生的光體為供養，是在實現六度波羅蜜中的佈施度，進而累積福報之資糧，而「內供養」則是在點燃與轉換個人內在力量，以光明之照耀力淨除內心的無知與黑暗，因而累積智慧之資糧。至於「秘密供養」則屬於修行之高層見地，含義者看不見的熱能燃燒，產生於那洛六瑜伽中所謂的”拙火”之喚起。
            </p>

            <p>
              供燈是代表光明與智慧，是一種殊勝的圓滿資糧，速得加持的緣起門，更可積聚無量無邊的福德智慧，去除無明及消除種種障礙。可為法界眾生、自己及家人親友、消災除障、廣積福德、健康長壽、事業順利。且在諸佛菩薩之壇城前供燈，則更能凈除修行上的違緣與生活上的五毒障礙，轉化為吉祥善緣。且將此供燈功德做廣大的迥向，祈求全世界和平、暴力消弭、戰禍止息，所有地震、水災、火災、颱風、饑餓、瘟疫等天然災害平息﹔迥向一切亡者，尤其是災難中不幸傷亡罹難者，當下解脫除大佈畏、往生得以令他們證佛果的淨土。且使法輪長轉，正法久住，十方法界有情眾生離一切苦，得究竟安樂。
            </p>

            <EndMarker />
            <ContemporaryMastersArticleNav currentSlug="gyaltsab-rinpoche" />
          </div>
        </div>
      </article>
    </main>
  );
}
