import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "../vajradhara/page.module.css";

const portrait = "/kagyu-lineage/%23005Milarepa.jpg";

export const metadata: Metadata = {
  title: "密勒日巴 | Kagyu",
  description: "密勒日巴 Milarepa 介紹。",
};

export default function MilarepaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">密勒日巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">密勒日巴 Milarepa</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="密勒日巴 Milarepa" src={portrait} />
            </figure>

            <p className="imageCaption">密勒日巴 Milarepa</p>

            <WatermarkHeading as="h2">密勒日巴尊者傳記</WatermarkHeading>
            <p>
              聖者密勒日巴出生於貢當（Gungthang），父親名密勒慧幢（Mila Sherap
              Gyaltsen），母親為娘雜白莊嚴（Nyangtsa Kargyen）。他有一位妹妹培塔帕總（Peta
              Paldron）。
            </p>
            <p>
              聖者幼名聞喜（Mila
              Thopaga），意指其聲音悅耳動人，使聽聞者皆心生歡喜。幼年時父親過世，家產遭叔父與嬸母侵占，密勒一家被逼於田間勞作，他與妹妹更深受虐待。
            </p>

            <WatermarkHeading as="h2">學習咒術黑法</WatermarkHeading>
            <p>
              母親因憤恨難平，便送密勒去學習黑法，希望他將來能報仇。密勒依止兩位老師，很快掌握具害力的黑法；他曾對家鄉施咒，致使三十七人死亡（包含叔父一家），並使農作物大受損害。然而施法之後，他對自己的惡業深感懊悔，遂發心尋求正法以彌補過錯。
            </p>
            <p>
              密勒後往察絨地區，依止紅教榮敦拉嘎尊者（Rongton
              Lhaga）。拉嘎尊者建議他前往尋訪馬爾巴大師。
            </p>
            <p>
              三十七歲時，密勒前往洛札（Lhodrak）尋找馬爾巴；在他抵達之前，馬爾巴已於夢中蒙本尊灌頂，預示其到來。
            </p>

            <WatermarkHeading as="h2">隨馬爾巴大師學習</WatermarkHeading>
            <p>
              密勒日巴依止馬爾巴六年之久。期間馬爾巴以嚴厲方式淬鍊他，把他視同僕者，令他承擔極其艱鉅的勞作，包括建造一座九層寶塔。
            </p>
            <p>
              在經歷極大磨難、消除沉重惡業之後，馬爾巴才為他灌授勝樂金剛灌頂（Abhisheka of
              Chakrasamvara），並賜與法名喜金剛（Shepa
              Dorje）。隨後，馬爾巴將全部傳承教法、密續精髓及大手印傳授予他，而馬爾巴所具受的法脈，源自印度大成就者那洛巴與梅紀巴的完整傳承。
            </p>

            <WatermarkHeading as="h2">道歌弘法</WatermarkHeading>
            <p>
              在上師座下精進修學十二年後，密勒日巴證得金剛乘圓滿成就，成為「即身成佛」最著名的典範之一。
            </p>
            <p>
              他因身著白袍而被稱為密勒日巴（白衣行者）。四十五歲起，他往返多處洞窟閉關——如馬齒白嚴中央城（White
              Rock Horse Tooth）等地——並間或外出弘法。
            </p>
            <p>
              密勒日巴以道歌（gur）弘法最為聞名，他以優美、清澈、深邃的詩歌呈現證悟的精髓，使聽者皆能於心中播下解脫的種子。他的許多弟子，包括妹妹在內，皆於圓寂時示現虹光身，融入光中。這些道歌現已被翻譯成多國語言，在全世界廣為流通。
            </p>

            <WatermarkHeading as="h2">弟子與傳承</WatermarkHeading>
            <p>
              密勒日巴有眾多弟子，包括惹瓊多傑札巴（Rechung Dorje
              Drakpa）、岡波巴（又名達波拉傑，Dhakpo Lhaje）、以及八大心子等。其中，承續其教法、成為傳承核心大師者，即為岡波巴尊者。
            </p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="milarepa" />
          </div>
        </div>
      </article>
    </main>
  );
}
