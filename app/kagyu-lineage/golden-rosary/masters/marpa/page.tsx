import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "../vajradhara/page.module.css";

const portrait = "/kagyu-lineage/%23004Marpa.jpg";

export const metadata: Metadata = {
  title: "馬爾巴 | Kagyu",
  description: "馬爾巴 Marpa 介紹。",
};

export default function MarpaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">馬爾巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">馬爾巴 Marpa</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="馬爾巴 Marpa" src={portrait} />
            </figure>

            <p className="imageCaption">馬爾巴 Marpa</p>

            <WatermarkHeading as="h2">早年學習與奠基梵學</WatermarkHeading>
            <p>
              馬爾巴年少時在西藏曼卡（Mangkhar）的倫古隆寺，追隨從印度返藏的大譯師卓彌釋迦智（Drokmi
              Shakya Yeshe）學習梵文與印度語言。這三年的研習，奠定了他成為偉大譯師的基礎。
            </p>
            <p>
              為了深入求法，他立志前往印度。他返家後將大部分財產變賣為黃金，作為旅費與供養上師的資糧。
            </p>

            <WatermarkHeading as="h2">印度之旅與那洛巴座下求法</WatermarkHeading>

            <h4>初抵尼泊爾與那洛巴弟子相遇</h4>
            <p>
              赴印度前，馬爾巴先至尼泊爾，遇見那洛巴的兩位弟子奇德巴（Chitherpa）與潘達巴（Paindapa）。他們傳授馬爾巴許多佛法，並教導語言。其後，潘達巴與馬爾巴一同前往普拉哈里（Pulahari），即那洛巴在那瀾陀學院附近持教之地。
            </p>

            <h4>十二年依止那洛巴</h4>
            <p>
              馬爾巴在那洛巴座下共學習十二年，跟隨那洛巴及多位上師請受各種法教。十二年後，馬爾巴向那洛巴供養薈供輪（ganachakra）與自心覺悟之道歌。
            </p>
            <p>
              歌畢，那洛巴告知他：「尚有奪舍法及甚深口耳相傳秘訣，你必須再來印度一次。」不久後，馬爾巴返回西藏弘法。
            </p>

            <WatermarkHeading as="h2">三度往返印度、四度前往尼泊爾</WatermarkHeading>
            <p>
              此後馬爾巴再度前往印度兩次，向那洛巴與諸上師請法。他的根本上師是那洛巴與梅紀巴（Maitripa）。馬爾巴總計三次往返印度、四次前往尼泊爾。第三次抵達印度時，因那洛巴已圓寂、入於法界境中，馬爾巴以無比決心與虔誠，示現再見那洛巴並獲最深密口傳法教。
            </p>

            <WatermarkHeading as="h2">那洛巴的預言</WatermarkHeading>
            <p>
              那洛巴曾預言：「此傳承不由馬爾巴子嗣延續，而將由一位具大乘成就、示現出家相之弟子承繼。」
            </p>
            <p>此預言後由岡波巴聖者（Gampopa）的出現而完全應驗。</p>

            <WatermarkHeading as="h2">將完整佛法帶回西藏</WatermarkHeading>
            <p>
              馬爾巴獲得全部法教後，那洛巴正式宣告：馬爾巴是其法嗣。馬爾巴遂將金剛乘與大手印完整傳承帶入西藏。那洛巴共有七大弟子，包括：
            </p>
            <ul>
              <li>梅紀巴（Maitripa）</li>
              <li>師利香帝巴札（Shri Shantibhadra），又名庫庫日巴（Kukuripa）</li>
              <li>丹毗巴大成就者</li>
              <li>大班智達桑提巴（Shantipa）</li>
              <li>尼泊爾宣瑟巴</li>
              <li>般若辛哈</li>
              <li>喀什噶爾的阿卡拉悉地（Akarasiddhi）</li>
            </ul>
            <p>其中最著名、亦是法脈持有者者，即是大譯師馬爾巴。</p>

            <WatermarkHeading as="h2">翻譯事業與弘法西藏</WatermarkHeading>
            <p>
              回到西藏後，馬爾巴大量翻譯佛教經論為藏文，其譯作後收入《丹珠爾》（Tengyur）與《甘珠爾》（Kangyur）之中，成為西藏佛法典籍的重要基礎。
            </p>
            <p>
              馬爾巴修持不輟，並廣泛弘法，弟子眾多。他第三次印度行返藏後，密勒日巴成為其弟子之一，也是獲得全部傳承者。馬爾巴與妻子達媚瑪（Dakmema）及子嗣住於洛札（Lhodrak）。
            </p>

            <WatermarkHeading as="h2">四大心子弟子與完整傳承</WatermarkHeading>
            <p>馬爾巴弟子眾多，其中四位最為著名：</p>
            <ul>
              <li>哦秋（Ngok Chöku Dorje）：受天法傳承與喜金剛密續教授</li>
              <li>梅通千波（Meyton Chenpo）：領受光明瑜伽</li>
              <li>楚敦旺給多傑（Tsurtön Wanggyi Dorje）：領受遷識法（頗瓦法）</li>
              <li>密勒日巴（Milarepa）：完整受持見修行三傳承之所有法教</li>
            </ul>
            <p>馬爾巴將全部法教傳予密勒日巴，使其成為正式法嗣，承接那洛巴之傳承。</p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="marpa" />
          </div>
        </div>
      </article>
    </main>
  );
}
