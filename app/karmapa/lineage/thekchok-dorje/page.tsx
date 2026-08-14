import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { LineageArticleNav } from "../_components/LineageArticleNav";
import localStyles from "../dusum-khyenpa/page.module.css";
import styles from "../../main-seat/tsurphu/page.module.css";

const portrait = "/karmapa/karmapa014 (Thekchok Dorje 1798-1868).jpg";

export const metadata: Metadata = {
  title: "第十四世噶瑪巴特秋多傑 | Kagyu",
  description: "第十四世噶瑪巴特秋多傑生平、利美運動與傳承介紹。",
};

export default function ThekchokDorjePage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">第十四世噶瑪巴特秋多傑</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">第十四世噶瑪巴特秋多傑</WatermarkHeading>

            <figure className={localStyles.lineagePortrait}>
              <img alt="第十四世噶瑪巴特秋多傑" src={portrait} />
            </figure>

            <p className="imageCaption">第十四世噶瑪巴特秋多傑 Thekchok Dorje (1798-1868)</p>

            <WatermarkHeading as="h2">誕生與認證</WatermarkHeading>
            <p>
              特秋多傑誕生在東藏康區大南谷（Danang）。他於冬天出生，歷史記載他出生時不僅花朵盛開，而且空中很多彩虹出現。他一出生就會用梵文持咒。
            </p>
            <p>
              札千袞吉卓吉南瓦（Druchen Kunzig Chokyi Nangwa）根據他持有的轉世信函，認證他就是第十四世噶瑪巴。他陞座之後，第九世大司徒仁波切為他圓頂，他從大司徒仁波切和札千袞吉確吉南瓦得到噶舉傳承全部的法教。
            </p>

            <WatermarkHeading as="h2">簡樸僧伽生活</WatermarkHeading>
            <p>
              法王過著非常簡僕的僧伽生活。他非常有語言及詩詞方面的稟賦。
            </p>

            <WatermarkHeading as="h2">利美運動</WatermarkHeading>
            <p>
              他參與投入無門戶之見的「利美」（ri-me）運動，以他的熱誠，使各不同派別弟子們能夠相互交流學習。噶舉與寧瑪之間的交流也因此特別融洽。
            </p>
            <p>
              噶瑪巴將此利美運動傳給了蔣貢康楚仁波切（Jamgon Kongtrul Rinpoche）。正如蓮師所預言，噶瑪巴追隨寧瑪伏藏師秋吉林巴（Chogyur Lingpa）學習寧瑪派密續法教。也因此，蓮師八變和普巴金剛舞成為噶舉每年例行的舞蹈。
            </p>

            <WatermarkHeading as="h2">預言與傳承</WatermarkHeading>
            <p>
              秋吉林巴大師對他之後的噶瑪巴，第十五世到第廿一世作了預言，書寫保留在唐卡上。第十四世噶瑪巴的法嗣是偉大的利美運動上師、作家蔣貢康楚羅卓泰耶。
            </p>
            <p>
              法王到西藏各處教學、弘法，並認證了第十世大司徒仁波切貝瑪貢章（Pema Kunzang）。法王留下預言轉世信函後圓寂，圓寂時身邊盡是彩虹，享年七十一歲。
            </p>

            <WatermarkHeading as="h2">第一世蔣貢仁波切羅卓泰耶</WatermarkHeading>
            <p>
              偉大的蔣貢康楚羅卓泰耶（Lodrö Thaye，1813-1901）誕生在東藏德格省的戎恰（Rong-gyap）一個苯教家庭中。蓮師在許多伏藏中也有同樣的預言。
            </p>
            <p>
              他學習並精通不僅經藏和密續，並對西藏的苯教教義也有深刻認識。他主要的上師是第十四世噶瑪巴、大司徒仁波切、欽哲（Khyentse）仁波切和當時許多位上師。
            </p>
            <p>
              他不僅成為噶舉傳承的持有者，也是西藏四大教派及苯教的導師。十九世紀，他和欽哲仁波切在西藏創立了不分教派的利美運動。
            </p>
            <p>
              他是第十五世噶瑪巴卡恰多傑（Khakhyab Dorje）的上師，並授予全部噶舉傳承法教。他是大學者、詩人、藝術家、作家，寫了一百多部著作。
            </p>
            <p>
              最著名的是《五寶藏》：包括《噶舉咒寶藏》、《根本教法寶藏》、《珍貴伏藏寶藏》、《教授寶藏》和《知識寶藏》。他是第十五世噶瑪巴卡恰多傑最主要的上師，並將傳承傳給噶瑪巴。
            </p>

            <EndMarker />
            <LineageArticleNav currentSlug="thekchok-dorje" />
          </div>
        </div>
      </article>
    </main>
  );
}
