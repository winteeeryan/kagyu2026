import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "../vajradhara/page.module.css";

const portrait = "/kagyu-lineage/%23002Tilopa.jpg";

export const metadata: Metadata = {
  title: "帝洛巴 | Kagyu",
  description: "帝洛巴 Tilopa 介紹。",
};

export default function TilopaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">帝洛巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">帝洛巴 Tilopa</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="帝洛巴 Tilopa" src={portrait} />
            </figure>

            <p className="imageCaption">帝洛巴 Tilopa</p>

            <p>
              帝洛巴是印度最尊貴且著名的大成就者之一。他在獲得殊勝的金剛乘教法後證悟，並將法教傳授給弟子那洛巴。帝洛巴出生於印度東部薩德高鎮（Chittagong，今孟加拉境內），為婆羅門種姓，父親名波拉雅夏（Pranyasha），母親名卡西（Kashi）。
            </p>

            <p>
              年輕時，帝洛巴雖研習婆羅門教義，仍四處參訪尋求真理。有一次，他來到寺院，心中對僧眾的生活深感嚮往。最終，他於孟加拉索馬普里（Somapuri）出家受戒，法名般若巴札（意為「完美之般若慧解者」），成為精通經、律、論三藏的法師。
            </p>

            <p>
              某日，當帝洛巴持誦《般若八千頌》時，一位他幼年曾見過的密續護法空行母現身，問他是否欲明瞭偈頌真義並達至真正的覺悟。帝洛巴立即祈請教授。空行母遂為他授予「勝樂金剛密續」灌頂，使他證知勝樂金剛密續的要義與般若智慧本為無二無別。不久後，帝洛巴便能將佛法哲理與金剛乘禪修圓融貫通。
            </p>

            <p>
              帝洛巴從金剛總持、龍樹菩薩、馬湯吉等多位上師直接或間接獲得「四大成就不共傳承法」，並成為眾望所歸的導師。
            </p>

            <p>
              在空行母的指導下，帝洛巴開始示現一些看似非常的行為，並與一位搗磨芝麻的苦行瑜伽女同住，因此被誤認為瘋子，並被寺院解除所有職務。他雖失去名利，卻因此得到完全的自在，並開始了屬於自己的圓滿證悟之旅。帝洛巴亦於索馬普里附近的墳場精進禪修十二年。
            </p>

            <p>
              其後，帝洛巴遊歷印度各地，從諸多上師接受灌頂與法教。有時，他以搗磨芝麻（梵語：Til）維生，故被稱為「帝洛巴搗芝麻者」。
            </p>

            <p>
              他曾於烏地亞那（Oddiyana）從空行母獲得殊勝法教，並在當地持續從事搗芝麻的工作。在將芝麻搗至如醍醐般的過程中，他亦象徵性地將身心淬鍊至俱生智慧的顯現。
            </p>

            <p>
              其後，馬湯吉上師指示他前往班果（Bengal），尋找名為「帕芮瑪」（Pharima）之人。帝洛巴發現帕芮瑪為妓院女子，遂依上師與空行母之指示留於妓院——夜間替她們工作，白日從事搗芝麻的粗活。帕芮瑪實為具有大力量的智慧空行菩薩，她以方便法門引導帝洛巴於數年間證悟大手印與金剛乘的深義，契入卓越圓滿悉地。
            </p>

            <p>
              最終的一日，帝洛巴與帕芮瑪凌空盤坐於離地約七棵椰子樹之高，全身虹光圍繞，一面搗芝麻一面以道歌回答前來問法者之疑問，引發大眾深切信心。凡對其道歌生起覺受者皆得悉地。
            </p>

            <p>
              自此，帝洛巴以道歌弘法，吸引成千上萬的人來到班果，親見這位不凡的大成就者。他被視為本尊勝樂金剛的化身，也是印度八十四大成就者之一。
            </p>

            <p>
              在多年弘法與教授弟子後，帝洛巴於八十四歲（1069 年）示現虹光身圓寂。他最著名的兩位弟子為那洛巴與拉里塔金剛（Lalitavajra），而其黃金珠鬘傳承的繼承者為那洛巴。
            </p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="tilopa" />
          </div>
        </div>
      </article>
    </main>
  );
}
