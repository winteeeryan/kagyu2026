import type { Metadata } from "next";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { GoldenRosaryMastersArticleNav } from "../_components/GoldenRosaryMastersArticleNav";
import styles from "../vajradhara/page.module.css";

const portrait = "/kagyu-lineage/%23003Naropa.jpg";

export const metadata: Metadata = {
  title: "那洛巴 | Kagyu",
  description: "那洛巴 Naropa 介紹。",
};

export default function NaropaPage() {
  return (
    <main className={styles.page}>
      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">那洛巴</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">那洛巴 Naropa</WatermarkHeading>

            <figure className={styles.articlePortrait}>
              <img alt="那洛巴 Naropa" src={portrait} />
            </figure>

            <p className="imageCaption">那洛巴 Naropa</p>

            <p>
              那洛巴是著名且尊貴的印度大成就者，也是大手印與金剛乘密續的持有者。他將上師帝洛巴所傳的大手印與密續法教，完整傳授給西藏大譯師馬爾巴。
            </p>

            <WatermarkHeading as="h2">婆羅門出身與早年修學</WatermarkHeading>
            <p>
              那洛巴誕生於孟加拉婆羅門王室家族，父親名香提瓦曼（Shantivarman），母親西里馬提（Shrimati）。幼時即成為外道班智達（tirthika pandita，意為外道學者），並修學印度教經典。
            </p>
            <p>
              某日，那洛巴至一酒女家時，遇到一位佛教法師。此法師因不敵那洛巴的氣勢而離去，但留下了一部經書。那洛巴拜讀後，對佛法生起深切信心與信仰。
            </p>
            <p>
              身為王子，他遂在樂園寺剃度出家，由外道班智達轉為佛教最具聲望的班智達之一，並成為那瀾陀寺（Nalanda）與毘羯羅摩尸羅寺（Vikramashila）北門守護者。他亦是寺院中著名導師，每夜修持金剛乘密續勝樂金剛禪法（Chakrasamvara），多位空行母常現身指導。
            </p>
            <p>其後，一位空行母告訴他：「東方有一位大師名帝洛巴，若找到他，你將得悉地。」</p>

            <WatermarkHeading as="h2">尋找帝洛巴</WatermarkHeading>
            <p>那洛巴循空行母指示前往東方尋找帝洛巴，卻遲遲未能遇見。</p>
            <p>
              某日，他在東方一寺院廚房中，見一位污穢異常的老人正烤多條活魚。他欲制止但老人不聽。僧眾上前阻止，老人說：「若不喜歡，就把魚丟回水裡！」眾人將魚丟回水中後，死魚竟復活游散。
            </p>
            <p>
              那洛巴立刻明白此老人是大成就者，決定追隨他。不久，他在老人足前頂禮祈法。老人雖不發一語，卻大力打他。那洛巴心想：「他是帝洛巴嗎？」老人答：「是！是！」
            </p>
            <p>他又想：「這瑜伽士莫非不是帝洛巴？」老人又答：「不是！不是！」</p>
            <p>那洛巴遂完全斷疑，確知此具他心通的老人即是帝洛巴。</p>
            <p>帝洛巴時示現瑜伽師行，時示現如瘋癲，而那洛巴從不起分別心，對上師信心堅固。</p>

            <WatermarkHeading as="h2">考驗那洛巴的信心</WatermarkHeading>
            <p>帝洛巴多次以劇烈方式考驗那洛巴，以下為其中最著名者：</p>

            <h4>婚禮偷菜遭毆之考驗</h4>
            <p>
              那洛巴於婚禮獲得一籃菜蔬供養帝洛巴，但上師嫌少，要更多。因當時有「一日不重複待客」習俗，那洛巴只得偷菜，被眾人以棒石痛擊。他仍緊抱菜蔬回去供養上師。
            </p>

            <h4>引走公主之考驗</h4>
            <p>
              某次行旅途中，帝洛巴指著轎中公主說：「把她帶來！」那洛巴化作婆羅門，高唱吉祥讚，以花插其髮，趁機挾走公主。公主隨從追上後痛毆那洛巴，幾乎置其於死地，帝洛巴以方便法救活了他。
            </p>

            <h4>貴族女子之考驗</h4>
            <p>
              又一次，帝洛巴見一貴族女子，告訴那洛巴他要娶她。那洛巴遂付重金向其父母購得其女，準備翌日獻上。後來那洛巴因病耽擱，帝洛巴用咒語治癒他。當女子見那洛巴時露出曖昧笑容，帝洛巴便說：「你不愛我，你愛他！」並痛擊那洛巴與女子。
            </p>

            <WatermarkHeading as="h2">十二年苦行——徹底摧毀我執</WatermarkHeading>
            <p>
              類似的考驗多不勝數。每一次，那洛巴都毫不動搖，其信心愈加堅固。他追隨帝洛巴十二年，歷經十二大、十二小苦行，身體承受巨痛。
            </p>
            <p>
              每一次苦難過後，帝洛巴皆施以方便使其復原，並傳授特殊教授。然而，帝洛巴從未對那洛巴說過一句好話。正因如此，那洛巴的傲慢與我執最終被徹底消融。
            </p>

            <WatermarkHeading as="h2">拖鞋傳承與大手印證悟</WatermarkHeading>
            <p>某日，在一處空曠之地，帝洛巴說：「供養我曼陀羅，我便傳你口訣法要。」</p>
            <p>那洛巴說：「此處無花亦無水可供養。」</p>
            <p>帝洛巴答：「你的身體難道沒有血與手指？」</p>
            <p>於是那洛巴刺身取血灑地，再割下手指排列成花狀。帝洛巴遂以拖鞋重擊那洛巴，使其昏厥。</p>
            <p>
              那洛巴甦醒時，立即現證一切法之真實義，身體亦即刻痊癒。之後他獲得所有教授與隨行口訣，成為瑜伽自在者。帝洛巴囑咐他：「自今日起，不要爭論，不要教弟子，不要講經，如此你將迅速得最殊勝成就。」
            </p>

            <WatermarkHeading as="h2">違越師命與捨身成佛</WatermarkHeading>
            <p>
              當那洛巴在普拉哈里修無戲論三摩地時，被邀與外道辯論。他認為此事利益佛法而應允。帝洛巴亦示現到場助陣，但因那洛巴違越師命，形成修道障礙。最終，他必須以捨身方式方能成佛。
            </p>

            <WatermarkHeading as="h2">弘法事業與悉地</WatermarkHeading>
            <p>
              那洛巴多在普拉哈里與那瀾陀住錫，也常前往各地灌頂、傳法、辯論。他具諸多善巧事業，利益無量眾生。最終證得悉地，成為印度最偉大的大成就者之一。
            </p>

            <WatermarkHeading as="h2">弟子與傳承</WatermarkHeading>
            <p>那洛巴弟子眾多，包括香帝巴（Shantipa）、阿底峽（Atisha）等多位護門班智達。其中八位最殊勝：</p>
            <ul>
              <li>四位精通父續</li>
              <li>四位精通母續</li>
            </ul>
            <p>皆為口傳傳承的執持者。</p>
            <p>那洛巴最傑出的弟子是西藏大譯師馬爾巴，他將佛法帶入西藏並傳承給其弟子密勒日巴。</p>
            <p>那洛巴傳承的正式繼承者為馬爾巴。</p>

            <EndMarker />
            <GoldenRosaryMastersArticleNav currentSlug="naropa" />
          </div>
        </div>
      </article>
    </main>
  );
}
