import type { Metadata } from "next";
import styles from "@/app/subpage.module.css";
import { DecoratedHeading } from "@/components/ui/DecoratedHeading";
import { EndMarker } from "@/components/ui/EndMarker";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";

const hundredDeedsLinks = [
  { title: "在此一隻母狗--惡口罵僧，累世轉狗", href: "https://www.kagyu.org.tw/tem/data/01.doc" },
  { title: "小眼沙彌--責罵聖者，累世狗報", href: "https://www.kagyu.org.tw/tem/data/02.doc" },
  { title: "能願比丘--殺生之報，短命多病", href: "https://www.kagyu.org.tw/tem/data/03.doc" },
  { title: "駝背人--無意害兄，受駝背報", href: "https://www.kagyu.org.tw/tem/data/04.doc" },
  { title: "春乾摩比丘尼--兩世駝背，等流果報", href: "https://www.kagyu.org.tw/tem/data/05.doc" },
  { title: "恰嘎國王--輕慢尊者，王位復得", href: "https://www.kagyu.org.tw/tem/data/06.doc" },
  { title: "嘎希美女--六國爭娶，毅然出家", href: "https://www.kagyu.org.tw/tem/data/07.doc" },
  { title: "生樂母--婚前證果，智慧第一", href: "https://www.kagyu.org.tw/tem/data/08.doc" },
  { title: "寶光天子--寶珠供塔，報為天子", href: "https://www.kagyu.org.tw/tem/data/09.doc" },
  { title: "豆蔻花--以花供塔，生降花雨", href: "https://www.kagyu.org.tw/tem/data/10.doc" },
  { title: "阿那新--種下善根，得佛授記", href: "https://www.kagyu.org.tw/tem/data/11.doc" },
  { title: "集聚母--雄辯獲勝，合家證果", href: "https://www.kagyu.org.tw/tem/data/12.doc" },
  { title: "跛子--惡罵聖者，得跛子報", href: "https://www.kagyu.org.tw/tem/data/13.doc" },
  { title: "第一輛馬車--繞佛三匝，得佛授記", href: "https://www.kagyu.org.tw/tem/data/14.doc" },
  { title: "第二輛馬車--對佛生喜，得佛授記", href: "https://www.kagyu.org.tw/tem/data/15.doc" },
  { title: "第三輛馬車--供佛鮮花，得佛授記", href: "https://www.kagyu.org.tw/tem/data/16.doc" },
  { title: "第四輛馬車--供佛馬車，得佛授記", href: "https://www.kagyu.org.tw/tem/data/17.doc" },
  { title: "干布國王--殺眾羅漢，恆受獄報", href: "https://www.kagyu.org.tw/tem/data/18.doc" },
  { title: "耶惟檀王妃--同行等流，兩世被辱佛", href: "https://www.kagyu.org.tw/tem/data/19.doc" },
  { title: "梳發女--同佛母願，精進第一", href: "https://www.kagyu.org.tw/tem/data/20.doc" },
  { title: "蓮花色比丘--供聖得報，今證聖果", href: "https://www.kagyu.org.tw/tem/data/21.doc" },
  { title: "屠夫之子--獵人供聖，今證聖果", href: "https://www.kagyu.org.tw/tem/data/22.doc" },
  { title: "金色比丘尼--供養佛塔，得金色身", href: "https://www.kagyu.org.tw/tem/data/23.doc" },
  { title: "牧人--惡口戲罵，今證羅漢", href: "https://www.kagyu.org.tw/tem/data/24.doc" },
  { title: "扎德沃--青年供花，佛述前因", href: "https://www.kagyu.org.tw/tem/data/25.doc" },
  { title: "無畏與鼓聲孩童--發心得佛授記", href: "https://www.kagyu.org.tw/tem/data/26.doc" },
  { title: "寶海童子--供養佛塔，俱生具寶", href: "https://www.kagyu.org.tw/tem/data/27.doc" },
  { title: "寶喜--捨自生命，救五商主", href: "https://www.kagyu.org.tw/tem/data/28.doc" },
  { title: "第一隻大熊--捨命救人，遭彼殺害", href: "https://www.kagyu.org.tw/tem/data/29.doc" },
  { title: "第二隻大熊--捨命救人，恩得仇報", href: "https://www.kagyu.org.tw/tem/data/30.doc" },
  { title: "小駝背--餓死母親，聖者受報", href: "https://www.kagyu.org.tw/tem/data/31.doc" },
  { title: "一隻大蟲--盜用僧物，恆時受報", href: "https://www.kagyu.org.tw/tem/data/32.doc" },
  { title: "甘藏嘎比丘尼--百世佛母，解經第一", href: "https://www.kagyu.org.tw/tem/data/33.doc" },
  { title: "兩位仙人--偕眾眷屬，出家證果", href: "https://www.kagyu.org.tw/tem/data/34.doc" },
  { title: "娶媳婦--調化丈夫，亦證聖果", href: "https://www.kagyu.org.tw/tem/data/35.doc" },
  { title: "法施女--成熟音訊，出家之願", href: "https://www.kagyu.org.tw/tem/data/36.doc" },
  { title: "大鯨魚--冤害他人，得鯨魚報", href: "https://www.kagyu.org.tw/tem/data/37.doc" },
  { title: "餓鬼--錯用僧物，得餓鬼報", href: "https://www.kagyu.org.tw/tem/data/38.doc" },
  { title: "餓鬼--擅用僧物，得餓鬼報", href: "https://www.kagyu.org.tw/tem/data/39.doc" },
  { title: "裸體餓鬼--無因謗僧，得餓鬼報", href: "https://www.kagyu.org.tw/tem/data/40.doc" },
  { title: "肉團餓鬼--擅用僧物，得餓鬼報", href: "https://www.kagyu.org.tw/tem/data/41.doc" },
  { title: "一位老人--百世佛父，今證聖果", href: "https://www.kagyu.org.tw/tem/data/42.doc" },
  { title: "土地變金地--農夫供佛，土地變金", href: "https://www.kagyu.org.tw/tem/data/43.doc" },
  { title: "升天的先父--先父升天，引子證果", href: "https://www.kagyu.org.tw/tem/data/44.doc" },
  { title: "果嘎勒嘎比丘--假因謗聖，墮無間獄", href: "https://www.kagyu.org.tw/tem/data/45.doc" },
  { title: "三藏法師--無因誹謗，墮無間獄", href: "https://www.kagyu.org.tw/tem/data/46.doc" },
  { title: "月光國王--因地果時，同贊佈施", href: "https://www.kagyu.org.tw/tem/data/47.doc" },
  { title: "慈力國王--以已鮮血，滿夜叉願", href: "https://www.kagyu.org.tw/tem/data/48.doc" },
  { title: "五百商主--世尊伸手，除夜叉障", href: "https://www.kagyu.org.tw/tem/data/49.doc" },
  { title: "一隻烏龜--血肉施蟻，獲證菩提", href: "https://www.kagyu.org.tw/tem/data/50.doc" },
  { title: "一隻雪蛙--以血肉施，八萬螞蟻", href: "https://www.kagyu.org.tw/tem/data/51.doc" },
  { title: "新來的比丘--騙他受害，今遭毒打", href: "https://www.kagyu.org.tw/tem/data/52.doc" },
  { title: "寂靜者--俱宿命通，斷散亂行", href: "https://www.kagyu.org.tw/tem/data/53.doc" },
  { title: "一隻大象--對佛歡喜，得以升天", href: "https://www.kagyu.org.tw/tem/data/54.doc" },
  { title: "寶賢龍子--供養皈佛，授記獨覺", href: "https://www.kagyu.org.tw/tem/data/55.doc" },
  { title: "商主之子--糞污獨覺，丑相臭氣", href: "https://www.kagyu.org.tw/tem/data/56.doc" },
  { title: "破和合僧--破和合僧，佛受流果", href: "https://www.kagyu.org.tw/tem/data/57.doc" },
  { title: "五百羅漢--願力成熟，證羅漢果", href: "https://www.kagyu.org.tw/tem/data/58.doc" },
  { title: "施主的兒子--供塔發願，證羅漢果", href: "https://www.kagyu.org.tw/tem/data/59.doc" },
  { title: "醜陋者--吝嗇惡口，丑相饑貧", href: "https://www.kagyu.org.tw/tem/data/60.doc" },
  { title: "安寧太子--兩世極刑，得佛救度", href: "https://www.kagyu.org.tw/tem/data/61.doc" },
  { title: "一個賤種人--復仇未遂，得羅漢果", href: "https://www.kagyu.org.tw/tem/data/62.doc" },
  { title: "極賢一家--修塔起信，全家證果", href: "https://www.kagyu.org.tw/tem/data/63.doc" },
  { title: "俱天太子--引諸青年，得證聖果", href: "https://www.kagyu.org.tw/tem/data/64.doc" },
  { title: "一頭牛--辱罵羅漢，累世為牛", href: "https://www.kagyu.org.tw/tem/data/65.doc" },
  { title: "悲賢童子--處以極刑，得佛救度", href: "https://www.kagyu.org.tw/tem/data/66.doc" },
  { title: "胖子--願力成熟，信心第一", href: "https://www.kagyu.org.tw/tem/data/67.doc" },
  { title: "黑者--斷除死懼，終得證果", href: "https://www.kagyu.org.tw/tem/data/68.doc" },
  { title: "持箭--畏死受戒，得生善趣", href: "https://www.kagyu.org.tw/tem/data/69.doc" },
  { title: "婆羅門兒子--供塔生喜，善辯證果", href: "https://www.kagyu.org.tw/tem/data/70.doc" },
  { title: "狐狸--惡罵羅漢，報食糞便", href: "https://www.kagyu.org.tw/tem/data/71.doc" },
  { title: "一隻孔雀--願力成熟，轉生孔雀", href: "https://www.kagyu.org.tw/tem/data/72.doc" },
  { title: "哥瑪達鳥--惡口罵僧，累世受報", href: "https://www.kagyu.org.tw/tem/data/73.doc" },
  { title: "聖身父子--害怕被殺，出家證果", href: "https://www.kagyu.org.tw/tem/data/74.doc" },
  { title: "本師--兩世引導，親眷證果", href: "https://www.kagyu.org.tw/tem/data/75.doc" },
  { title: "迦葉尊者--功德無量，世尊親贊", href: "https://www.kagyu.org.tw/tem/data/76.doc" },
  { title: "阿難尊者--佛入滅前，授記未來", href: "https://www.kagyu.org.tw/tem/data/77.doc" },
  { title: "能持子--願力成熟，富家證果", href: "https://www.kagyu.org.tw/tem/data/78.doc" },
  { title: "極賢佛臨涅，調化證果", href: "https://www.kagyu.org.tw/tem/data/79.doc" },
  { title: "兩位施主--願力成熟，得證羅漢", href: "https://www.kagyu.org.tw/tem/data/80.doc" },
  { title: "大施主--願力成熟，無人可勝", href: "https://www.kagyu.org.tw/tem/data/81.doc" },
  { title: "兩位老人--前世願力，七歲證果", href: "https://www.kagyu.org.tw/tem/data/82.doc" },
  { title: "吉祥跛子--惡口罵僧，報以跛腳", href: "https://www.kagyu.org.tw/tem/data/83.doc" },
  { title: "五百仙人--腳印引路，兩世得度", href: "https://www.kagyu.org.tw/tem/data/84.doc" },
  { title: "盲人--挖出他眼，累世成盲", href: "https://www.kagyu.org.tw/tem/data/85.doc" },
  { title: "裸體迦葉--臨終信佛，證羅漢果", href: "https://www.kagyu.org.tw/tem/data/86.doc" },
  { title: "迦葉主尊--以慢心故，遲得聖果", href: "https://www.kagyu.org.tw/tem/data/87.doc" },
  { title: "角宿大象--被誘等流，兩世還俗", href: "https://www.kagyu.org.tw/tem/data/88.doc" },
  { title: "薩那--前世鞭打，今生受報", href: "https://www.kagyu.org.tw/tem/data/89.doc" },
  { title: "野獸禁行者--惡口罵僧，百世獸報", href: "https://www.kagyu.org.tw/tem/data/90.doc" },
  { title: "月亮比丘尼--願力成熟，聽聞第一", href: "https://www.kagyu.org.tw/tem/data/91.doc" },
  { title: "人非人--摧毀傲慢，令得解脫", href: "https://www.kagyu.org.tw/tem/data/92.doc" },
  { title: "人非人--耶輸陀羅，為夫殉身", href: "https://www.kagyu.org.tw/tem/data/93.doc" },
  { title: "剛布--神變生信，得佛授記", href: "https://www.kagyu.org.tw/tem/data/94.doc" },
  { title: "供施--供施功德，得佛授記", href: "https://www.kagyu.org.tw/tem/data/95.doc" },
  { title: "懶惰者--見佛生喜，佛授記", href: "https://www.kagyu.org.tw/tem/data/96.doc" },
  { title: "給孤獨--依給孤獨，得佛授記", href: "https://www.kagyu.org.tw/tem/data/97.doc" },
  { title: "貧窮者--供佛發願，而得授記", href: "https://www.kagyu.org.tw/tem/data/98.doc" },
  { title: "蓮花--供養蓮花，得佛授記", href: "https://www.kagyu.org.tw/tem/data/99.doc" },
  { title: "蓮花--供佛蓮花，得佛授記", href: "https://www.kagyu.org.tw/tem/data/100.doc" },
  { title: "見解者--發殊勝願，得佛授記", href: "https://www.kagyu.org.tw/tem/data/101.doc" },
  { title: "珠寶者--供佛及僧，得佛授記", href: "https://www.kagyu.org.tw/tem/data/102.doc" },
  { title: "財寶者清淨供養，得佛授記", href: "https://www.kagyu.org.tw/tem/data/103.doc" },
  { title: "兩個國王蒙佛加持，證果授記", href: "https://www.kagyu.org.tw/tem/data/104.doc" },
  { title: "老父親--蒙佛加持，今昔得樂", href: "https://www.kagyu.org.tw/tem/data/105.doc" },
  { title: "五百商主--蒙佛解救，證羅漢果", href: "https://www.kagyu.org.tw/tem/data/106.doc" },
  { title: "施主之子--往昔願力，年幼證果", href: "https://www.kagyu.org.tw/tem/data/107.doc" },
  { title: "兩個獅子--聞法善根，轉生天界", href: "https://www.kagyu.org.tw/tem/data/108.doc" },
  { title: "獵人--惡口罵僧，受劣眾報", href: "https://www.kagyu.org.tw/tem/data/109.doc" },
  { title: "鷓鴣--菩薩行力，飛救火災", href: "https://www.kagyu.org.tw/tem/data/110.doc" },
  { title: "父親--累世佛子，今證聖果", href: "https://www.kagyu.org.tw/tem/data/111.doc" },
  { title: "野蠻人--蒙佛兩度，今得涅", href: "https://www.kagyu.org.tw/tem/data/112.doc" },
  { title: "食肉鬼--世尊調化千食肉鬼", href: "https://www.kagyu.org.tw/tem/data/113.doc" },
  { title: "王布果--殺五千人，今得聖果", href: "https://www.kagyu.org.tw/tem/data/114.doc" },
  { title: "帝釋天王--畏懼墮死，得佛度化", href: "https://www.kagyu.org.tw/tem/data/115.doc" },
  { title: "老婆羅門--佛救兩世，終證聖果", href: "https://www.kagyu.org.tw/tem/data/116.doc" },
  { title: "獵人--兩世救護，恩得仇報", href: "https://www.kagyu.org.tw/tem/data/117.doc" },
  { title: "愚癡者--殘害他人，今證聖果", href: "https://www.kagyu.org.tw/tem/data/118.doc" },
  { title: "婆羅門--兩世做賊，終證聖果", href: "https://www.kagyu.org.tw/tem/data/119.doc" },
  { title: "婆羅門--懼怕被害，出家證果", href: "https://www.kagyu.org.tw/tem/data/120.doc" },
  { title: "婆羅門--互起爭執，得佛度化", href: "https://www.kagyu.org.tw/tem/data/121.doc" },
  { title: "遍入尊者--調化國王十萬眷屬", href: "https://www.kagyu.org.tw/tem/data/122.doc" },
  { title: "諍者--世尊調和，得證聖果", href: "https://www.kagyu.org.tw/tem/data/123.doc" },
  { title: "惡龍--惡願害人，得佛調化", href: "https://www.kagyu.org.tw/tem/data/124.doc" },
  { title: "昔普國王--捨自血肉，換得半偈", href: "https://www.kagyu.org.tw/tem/data/125.doc" },
  { title: "昔普國王--捨自血肉，換得半偈", href: "https://www.kagyu.org.tw/tem/data/126.doc" },
  { title: "兩個僧團--調和僧團，佛法久住", href: "https://www.kagyu.org.tw/tem/data/127.doc" },
];

const hundredDeedsRows = Array.from(
  { length: Math.ceil(hundredDeedsLinks.length / 3) },
  (_, rowIndex) => hundredDeedsLinks.slice(rowIndex * 3, rowIndex * 3 + 3),
);

export const metadata: Metadata = {
  title: "聞思經典 | Kagyu",
  description: "百業經譯序與目錄，收錄可閱讀的百業經公案連結。",
};

export default function Page() {
  return (
    <main className={`${styles.main} ${styles.bannerPage}`}>
      <section className={styles.bannerSection} aria-label="聞思經典橫幅">
        <img
          alt="聞思經典橫幅"
          className={styles.bannerImage}
          src="/study-practice/dharmawisdomhero001.png"
        />
      </section>

      <article className="karmapaArticleStart">
        <div className={styles.articleInner}>
          <div className="karmapaHiddenH1">
            <DecoratedHeading as="h1">聞思經典</DecoratedHeading>
          </div>

          <div className={styles.prose}>
            <WatermarkHeading as="h2">百業經</WatermarkHeading>

            <figure className={styles.articleImage}>
              <img alt="百業經" src="/study-practice/hundreddeeds.png" />
            </figure>

            <p>法王晉美彭措 傳講 / 堪布索達吉 譯導</p>

            <p>
              《百業經》是我等大師釋迦牟尼佛宣說因果不虛的一部甚深經典。共有一百多個公案，涉及到比丘、比丘尼、沙彌、沙彌尼、優婆塞、優婆夷、仙人、國王、大臣、婆羅門、施主，居民、妓女、獵人等人物，形象地闡明瞭善惡之因必感善惡之果的真諦。
            </p>

            <p>
              龍猛菩薩在《中觀寶論》中曾有「無見墮惡趣，有見生善道」的教言，即沒有因果正見的人難免墮落惡趣，而有因果正見的人自然能往生善道。
            </p>

            <p>
              大恩上師法王如意寶晉美彭措也在六千餘名四眾弟子前強調：「凡聽聞、讀誦、受持此《百業經》的人，若能對因果不虛生起堅定的信心，謹慎遵循因果，並且精進修持、懺悔罪障，一定不會墮落。」故弟子們對此經生起了極大信心。
            </p>

            <p>
              從藏文《大藏經》目錄可知，此經是在唐代由漢文譯成藏文，為此漢族弟子在各地、各類漢文《大藏經》中反覆查找，但未能找出此漢文本。法王開講此經在即，故本學院五百多漢族僧俗弟子，再三勸請本人將此經重新譯成漢文。我本人也很想在這一生中能與佛經結下一個殊勝的緣份，以報諸傳承上師之恩德，加之以漢族為主的國內外弟子們由於語言障礙等原因，不能親聆上師的傳講，為了更多人暫時和究竟的利益，故本人發心重譯此《百業經》。
            </p>

            <p>
              本人以為，這部漢譯本不但對現在的眾生有利益，乃至我離開人間後的數百年、千年或許仍能利益眾生。因果規律是在世俗諦中一條真正打不破的真理，此經主要細說。縱經百千劫，所作業不亡，因緣會遇時，果報還自受。
            </p>

            <p>
              作為一名佛門弟子，堅信因果緣起法是學佛的首要條件，一個不信因果的人，無論修什麼法門，都不可能成就，而如果深信因果，則不可能造惡業，修行易得成就，如《涅磐經》所云：「知由善因生善果，知因惡因生惡果，惡遠惡離矣。」而且，弘揚這部經典也是我的大恩上師法王如意寶的一大心願，法王曾鄭重地對弟子們說：「我一直都很想傳講一次《百業經》，這樣我一生中的許多願望就可實現了。」由此也可見這部經典的重要。真誠希望大家通過拜讀此《百業經》能產生增上對因果的信心。
            </p>

            <p>
              考慮到原漢文譯本以後即或找到，恐現代人在文字上也不易讀懂，故本人在翻譯此經時，採取了意譯並略譯的方式，其漢文是由藏文傳講中所譯，詞句雖然未全直譯出來，但其含義已是和盤托出。盡量譯成通俗易懂的白話文，以使人們一讀便能了知其中要義。若譯本中存在不達意之處，本人在諸佛菩薩及諸位高僧大德前誠心懺悔。在翻譯《百業經》的過程中有很多人給予了熱情的支持，在此謹表謝忱。以此功德，願我們及一切有情堅信因果，同生極樂！
            </p>

            <p>願增吉祥！</p>

            <p>譯 者</p>

            <p>一九九九年一月三十日</p>

            <WatermarkHeading as="h2">百業經目錄</WatermarkHeading>

            <div className={styles.tableWrap}>
              <table className={styles.aboutTable}>
                <tbody>
                  {hundredDeedsRows.map((row, rowIndex) => (
                    <tr key={`hundred-deeds-row-${rowIndex}`}>
                      {[0, 1, 2].map((columnIndex) => {
                        const item = row[columnIndex];

                        return (
                          <td key={`hundred-deeds-cell-${rowIndex}-${columnIndex}`}>
                            {item ? (
                              <a href={item.href} rel="noreferrer" target="_blank">
                                {item.title}
                              </a>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <EndMarker />
          </div>
        </div>
      </article>
    </main>
  );
}
