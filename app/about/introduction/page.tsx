import type { Metadata } from "next";
import { AboutBannerPage } from "@/app/about/_components/AboutBannerPage";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import styles from "@/app/subpage.module.css";

export const metadata: Metadata = {
  title: "學院簡介 | Kagyu",
  description: "台灣噶舉佛學院成立緣起、宗旨、學程架構與參學規則。",
};

const courseRows = [
  [
    ["藏文課程", "Tibetan language"],
    ["【初學課程】密勒日巴金剛道歌", "【Beginner】The vajra songs of Milarepa"],
    [
      "【初學課程】佛子行三十七頌",
      "【Beginner】The thirty seven verses of Bodhisattvas' practice",
    ],
  ],
  [
    ["【初學課程】四加行", "【Beginner】Four Foundation practice"],
    ["【初學課程】親友書", "【Beginner】The letters to friends; Treatise of precious ornaments"],
    ["【初學課程】普賢行願品", "【Beginner】The letters to friends; Treatise of precious ornaments"],
  ],
  [
    ["【概論】入菩薩行論", "【Introduction】Entering the path of Bodhisattvas"],
    ["【概論】解脫莊嚴寶論", "【Introduction】The jewel ornament of liberation"],
    ["【寶鬘集】（勝道）寶鬘論", "【Madhyamika】The treatise of entering Madhyamika"],
  ],
  [
    ["【如來藏】究竟一乘寶性論", "【Tathagatagarbha 】Mahayana uttaratantra treatise"],
    ["宗義理論（四部宗義）", "Sectarian Theories:（The theories of four sects）"],
    ["【因明】量理寶藏論", "【Logic】The treatise of logic treasure"],
  ],
  [
    ["【俱舍】俱舍論", "【Abhidharma】Abhidharma storehouse treatise"],
    ["【般若】現觀莊嚴論", "【Prajna 】The Ornament of Clear Realizaion"],
    ["禪修班", "Meditational practice"],
  ],
];

const rules = [
  [
    "所有參加學員，無須放棄原來傳承。",
    "All disciples attending the Institute don't have to give up their own lineages.",
  ],
  [
    "如於修學上有任何疑問，均由仁波切及堪布親自指導解答。",
    "Rinpoches and Khenpos would answer the questions in person, if there is any.",
  ],
  [
    "尚未開講的課程，將會陸續開講。",
    "The unscheduled courses will be gradually scheduled in the coming future.",
  ],
  [
    "圓滿台灣噶舉佛學院五大部論者，經各科老師考核認證通過後，將授予法王所賜予之文憑結業證書。",
    "The disciples, studied the Five Major Treatises in the Institute, could receive the certificates from H. H. the seventeenth Kamapa, if passing all the examinations required by the teaching staffs.",
  ],
  [
    "凡有領取結業證書的法師或居士們，有教學之意願，且經由法王之同意認可，則可以任教廣利眾生。",
    "The ones, received the certificates from H. H. the seventeenth Kamapa, will be allowed to give the teachings to the general public, if also been authorized by H. H. the seventeenth Kamapa.",
  ],
  [
    "本佛學院之學程架構，由尊貴噶瑪巴指導，至誠感恩。",
    "\"The Program of Courses\" are instructed by the most Venerable Kamapa. And his help are greatly appreciated with our profound devotions.",
  ],
];

export default function Page() {
  return (
    <AboutBannerPage
      alt="學院簡介橫幅"
      imageSrc="/about/abouthero001.png"
      title="學院簡介"
    >
      <div className={styles.prose}>
        <WatermarkHeading as="h2">成立緣起</WatermarkHeading>
        <p>
          無量無邊之眾生無始以來，為三毒所染污、煩惱所覆蓋，流轉於生死輪迴苦海中，不得解脫。大智大悲的佛陀，見此不忍，欲拔眾苦，以殊勝之因緣，遂於二千五百年前降生於世，大轉法輪，以渡眾生出輪迴之苦海。此佛陀殊勝之教法，在歷史傳播上，又依傳佈的時代及地理之因素，主要分三路傳佈於鄰近諸國：南傳以原始佛教為主；北傳至漢地，則以大乘佛法為主；東傳至西藏，亦以大乘佛法為主，其中又以金剛乘尤為殊勝。
        </p>
        <p>
          The Buddhist path is traditionally classified into three styles or stages of practice called “yanas” or “vehicles. These three are: the Hinayana, Mahayana and Vajrayana. The Hinayana teachings are also known as the “Inferior Vehicle,” focuses on monasticism and the struggle to achieve a saintly life. Mahayana teachings refer to alarge or superior vehicle, aim for both personal enlightenment and the enlightenment of others. Based on the idea that we all already posses Buddha-nature in ourselves,and that enlightenment is simply the recognition of our true nature, Vajra in Sanskrit means diamond (lit. adamantine, unsplittable). Vajrayana is thus translated as “Diamond Vehicle.” In English it is also known as Tantric Buddhism or Esoteric Buddhism, due to its reliance on sacred texts called tantras. Traditionally within Tibet there are many groupings of schools, such as the Eight Chariots of the Practice Lineage. However, the most well-known grouping in modern times is into the four major schools: Nyingma, Sakya, Kagyu and Gelugpa. Vajrayana is most often associated with the Tibetan Buddhism.
        </p>
        <p>
          於今，勝緣成熟，漢傳及藏傳佛法，匯流於寶島台灣。而於此文化匯流的歷史時刻，吾人應緣成立「台灣噶舉佛學院 」，佛學院 願盡己之棉薄之力，以有助益於此漢、藏佛法交流。
        </p>
        <p>
          We are a Vajrayana Institute, and our aim is to provide an educational institution for the Teachings and Practices of the Kaygu Tradition of Tibetan Buddhism. The Institute opens a Buddhist door for people in Taiwan to join, explore and experience the true teachings of the Buddha.
        </p>

        <WatermarkHeading as="h2">前言</WatermarkHeading>
        <p>
          現今的台灣是一個繁忙的工商社會。可喜的是，依然有許多具善根之修行者，於百忙之中，抽空研修漢、藏傳佛法，令人讚歎。唯研習藏傳佛法者，也應了解藏傳之特色，不只是重視金剛乘密法的修持，對於大、小乘理論的基礎，尤其是五大部論的研習，亦即為重視，頗值得吾人借鏡學習。今略舉藏傳佛法的一些特色如下：
        </p>
        <p>
          Buddhism contains a subtle and advanced philosophy, bare attention to Vajrayana is not a complete practice. We provide classes on the studies of Hinayana and Mahamaya and Vajrayana. For your reference, there are some distinguished features of Tibetan Buddhism listed as below:
        </p>

        <h4>修習次第</h4>
        <p>
          藏傳佛法各大教派之修習者，皆先於佛學院研習顯教五大部論，待學習完成，考試合格之後，再進而實修密法；進入密咒道後，由四加行而下三部、無上密、大手印、大圓滿等閉關實修，次第井然。如此這般的重視堅實基礎的修行次第，使歷代藏傳佛法修行者的成就，乃至於今，均不乏其人。此為藏傳佛法顯密雙融，解行並重的宗風。
        </p>

        <h4>五大部論（顯教）</h4>
        <p>
          藏傳佛法各大教派，均極重視五大部論的學習。此是因為這些顯教的理論，實為修習更進階之密法的基礎。此五部論中，概括佛陀三轉法論中大、小乘的思想要義。例如：《俱舍論》，介紹小乘有部、經部思想，屬於初轉法論的教法；《入中論》，介紹諸法無生、般若空義之甚深見，是為《般若經》之「明顯義」，屬二轉法論的教法；《現觀莊嚴論》，介紹修行的現觀道次第，是為《般若經》之「隱密義」，亦屬二轉法論的教法；《量理寶藏論》，介紹因明學；《究竟一乘寶性論》，介紹如來藏思想，則屬三轉法論的教法。
        </p>

        <h4>實修宗風（密法）</h4>
        <p>
          依大乘佛法而言，須三大阿僧祇劫的修行，方能成就佛果；而依金剛乘而言，最速則一生即可成就，此是由於密乘道之殊勝方便。宗喀巴大師亦於《菩提道次第廣論》之卷末中道：「如是善修顯密共道，其後當無疑入密咒道，以彼密道較諸餘法最為稀貴，速能圓滿二資糧故。」藏傳佛法各大教派，均極重視密法的實修。噶舉派之大手印傳承尤是如此，其四大八小諸派中，經短、長期的閉關修行而成就者，不知凡幾。
        </p>

        <h4>The sequences of study and practice</h4>
        <p>
          At beginning, all the practitioners of all major Tibetan Buddhism lineages have to study the Five Major Treatises in the Buddhism institutes. And they won’t be allowed to practice the Vajrayana’s paths, until fulfill all the requirements of studies and examinations. In the paths of Vajrayana, they have to start from basic Four Foundations, and then practice the Lower Three Tantras, the Ultimate Tantras, the Mahamudra, and the Dzogchen, step by step. Since the Tibet Buddhism traditions take these sequential studies and practices seriously, as a result, there are many practitioners attain great realizations in the Tibetan Buddhism history and even modern days.
        </p>

        <h4>The study of the Five Major Treatises:</h4>
        <p>
          All Tibetan Buddhism Lineages value the studies of Sutric theories heavily. And all these theories are actually the basic ground for more advanced Secretyana’s practices. Some of the treatises listed as following, for your reference: The Abhidharma Storehouse Treatise introduces the teachings of Hinayana; it belongs to the teachings of the first turn of the wheel of Dharma. The Entering the Madhyamika introduces the profound view of emptiness and the non-arising of dharma, also considered as the teachings of the “revealed meaning” of “Prajna Paramita Sutra” ; it belongs to the teachings of the second turn of the wheel of Dharma. The Ornament of Clear Realization introduces the paths and the views on the way to enlightenment, considered as the teachings of the “hidden meaning” of “Prajna Paramita Sutra” as well; it belongs to the teachings of the second turn of the wheel of Dharma too. The Treatise of Logic Treasure introduces Buddhism logic. The Mahayana Uttuatantra Shastra introduces the theories of Buddha Nature; it belongs to the teachings of the third turn of the wheel of Dharma.
        </p>

        <WatermarkHeading as="h2">宗旨</WatermarkHeading>
        <p>
          「台灣噶舉佛學院」的宗旨，是依循釋迦牟尼佛的法教，弘揚噶瑪巴教育之傳承，採取教行並重之修業模式，並以增長眾生慧命為使命。在尊貴的 第十七世噶瑪巴（大寶法王）以及尊貴 的 泰錫度仁波切的正式認可及祝福下，由台灣噶舉佛學會之共同正信理念的四眾弟子，創立了台灣噶舉佛學院。於此完成學業，將由老師升級認證，圓滿課程者，授予最尊貴的嘉華噶瑪巴親筆之證書及吉祥祝禱。
        </p>
        <p>
          Buddhism contains a subtle and advanced philosophy, bare attention to Vajrayana is not a complete practice. We provide classes on the studies of Hinayana and Mahamaya and Vajrayana. For your reference, there are some distinguished features of Tibetan Buddhism listed as below:
        </p>

        <WatermarkHeading as="h2">學程架構</WatermarkHeading>
        <p>
          「台灣噶舉佛學院」的宗旨，是依循釋迦牟尼佛的法教，弘揚噶瑪巴教育之傳承，採取教行並重之修業模式，並以增長眾生慧命為使命。在尊貴的 第十七世噶瑪巴（大寶法王）以及尊貴 的 泰錫度仁波切的正式認可及祝福下，由台灣噶舉佛學會之共同正信理念的四眾弟子，創立了台灣噶舉佛學院。於此完成學業，將由老師升級認證，圓滿課程者，授予最尊貴的嘉華噶瑪巴親筆之證書及吉祥祝禱。
        </p>
        <p>
          Buddhism contains a subtle and advanced philosophy, bare attention to Vajrayana is not a complete practice. We provide classes on the studies of Hinayana and Mahamaya and Vajrayana. For your reference, there are some distinguished features of Tibetan Buddhism listed as below:
        </p>

        <WatermarkHeading as="h2">語文課程/西藏語文</WatermarkHeading>
        <p>
          五大部論之研習：以五大部論及與五大部論相關之諸論為主。五大部論之學習，無分教派，以藏傳各大教派所公認之諸論為主要之教材。所敬聘之傳法善知識，亦均是藏傳各教派學養俱佳之仁波切、堪布，及對藏傳佛法有深入研究、學有專精之漢傳法師、居士。密乘法要之實修：本佛學院則以噶瑪噶舉傳承（大寶法王）之四加行為基礎起修，圓滿了四加行後，則再依上師之指示作更進一步的密法修行。
        </p>
        <p>
          The practices in the Taiwan Kagyu Institute would mainly follow the Kama Kagyu’s (Kamapa’s) lineage in Vajrayana’s paths. At beginning, All involved disciples are required to finish Four Foundation practices. And then follow the instructions from their Guru for advanced Vajrayana’s practices.
        </p>

        <WatermarkHeading as="h2">課程大綱</WatermarkHeading>
        <div className={styles.tableWrap}>
          <table className={styles.aboutTable}>
            <tbody>
              {courseRows.map((row, rowIndex) => (
                <tr key={`course-row-${rowIndex}`}>
                  {row.map(([course, english]) => (
                    <td key={course}>
                      <strong>{course}</strong>
                      <span>{english}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <WatermarkHeading as="h2">申請參習</WatermarkHeading>
        <p>
          不論出家、在家眾，也不論屬何教派，凡具佛法正信，而且對傳統藏傳佛法之顯教教理（五大部論）及金剛乘教法有興趣者，均歡迎一起來共同研習。
        </p>
        <p>
          出家學眾：出家學眾參與所有的課程一律免收費用。
        </p>
        <p>
          在家居士：由於許多有心學佛的社會大眾白天均有工作，為方便學員們學習，故將課程的時間安排如下（個別課程的時間，詳見課表）：（1）週一至週五：晚上 ／ （2）週六、週日：白天、晚上
        </p>
        <p>
          All the practitioners, including monks, nuns, and layperson, of all different lineages, are all welcomed to join us in the Institute, as long as having faith in Buddhism,and interested in the Sutric teachings, the Five Major Treatises, and the Vajrayana's practices.
        </p>
        <p>
          Bhiksu and Bhiksuni:All monks and nuns are welcomed to study all treatises and related commentaries in the Institute, and free of charges.
        </p>
        <p>
          Lay practitioners:Since most of the lay practitioners have a daytime job, for their convenience, the time of class schedules are arranged accordingly as below:
        </p>
        <p>
          (1) Weekdays: night time (2) Weekends: daytime and night time
        </p>

        <WatermarkHeading as="h2">參學規則</WatermarkHeading>
        <ol className={styles.ruleList}>
          {rules.map(([zh, en]) => (
            <li key={zh}>
              <span>{zh}</span>
              <span>{en}</span>
            </li>
          ))}
        </ol>

        <WatermarkHeading as="h2">目標期願</WatermarkHeading>
        <p>
          願佛陀珍貴的教法，傳佈於所有一般社會大眾，使皆能蒙佛法甘露的滋潤，消除煩惱，離苦得樂，法喜充滿。
          <br />
          Wish the general public could all receive the teachings of the precious Dharma, so their minds would be moisturized, afflictions removed, suffers pacified, happiness increased, and fulfilled with joys.
        </p>
        <p>
          願所有修學藏傳佛法之行者，不忘藏傳顯密並重之學風，精習五大部論，實修習密乘殊勝道，速速圓滿二資糧。
          <br />
          Wish all the Tibetan Buddhism practitioners would not forget the Tibetan traditions of emphasizing both studying Sutric theories and practicing Tantric teachings. May they study the profound Major Five Treatises energetically, and practice the supreme Vajrayana's paths diligently, so to accumulate the two merits rapidly.
        </p>
        <p>
          願噶舉派之解行並重，顯密圓融的大手印傳承，廣弘於世，如日普照，利益一切有情，使皆速得成就。
          <br />
          Wish the Kagyu's traditions of valuing and uniting both Sutric and Tantric teachings could spread all over the world, like the sun shining above pervasively, so to benefit all sentient beings. And may all beings attain Buddhahood quickly.
        </p>
      </div>
    </AboutBannerPage>
  );
}
