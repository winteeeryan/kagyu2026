export type CharityShopItem = {
  href?: string;
  title: string;
  shortTitle?: string;
  image: string;
  productImage?: string;
  productImages?: string[];
  productImageTransforms?: string[];
  productImageTransform?: string;
  code?: string;
  summary?: string;
  description?: string;
  offeringLabel?: string;
  paymentInfo?: string;
  details?: string[];
  notes?: string[];
  products?: CharityShopProduct[];
  slug?: string;
};

export type CharityShopProduct = {
  title: string;
  shortTitle?: string;
  image: string;
  productImage?: string;
  productImages?: string[];
  productImageTransforms?: string[];
  productImageTransform?: string;
  code?: string;
  summary?: string;
  description?: string;
  offeringLabel?: string;
  paymentInfo?: string;
  details?: string[];
  notes?: string[];
};

export type CharityShopNumberedProduct = CharityShopProduct & {
  href: string;
  slug: string;
};

export type CharityShopRelatedProduct = CharityShopNumberedProduct & {
  categorySlug: CharityShopCategory["slug"];
  categoryTitle: string;
};

export type CharityShopLinkedItem = CharityShopItem & {
  href: string;
  slug: string;
};

export type CharityShopCategory = {
  title: string;
  slug: "incense" | "malas" | "others";
  image: string;
  href: string;
  items: CharityShopItem[];
};

const charityShopBasePath = "/support-volunteer/charity-shop";

const incenseItems: CharityShopItem[] = [
  {
    href: `${charityShopBasePath}/incense/tsurphu`,
    title: "楚布寺",
    image: "/support-volunteer/charity-shop/incense/category001.png",
    products: [
      {
        title: "天然嚴選楚布寺平安香",
        image: "/support-volunteer/charity-shop/incense/tsurphuincense101.png",
        productImage: "/support-volunteer/charity-shop/incense/tsurphuincense103.png",
        code: "C0001",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【規格】23 cm\n\n【一盒】100 支\n\n【藥材】沉香、紫檀、白檀、紅檀、藏紅花、甘松、安息香、荳蔻、楚布聖水、楚布香草、甘丹香草、乳香、柏樹、榆樹皮等 36 種珍貴藏藥材。採用純植物古法製作，不添加任何化學成分及人工色素。\n\n【燃燒時間】每支約 65 分鐘\n\n【特殊原料】除 36 種藏藥材外，另加入楚布寺歷代大寶法王修持甘露丸，以及護法神殿黑袍瑪哈嘎拉、四臂瑪哈嘎拉等大護法秘製持咒甘露丸、百年藏柏樹等珍貴原料，使留香效果更持久，香氣更為純正。\n\n本品採用 100% 純天然藥材製作，香氣純正、品質精良。其中最珍貴的配方之一為「楚布聖水」。相傳此天然泉水由二世大寶法王以拐杖引出，水源潔淨，具有特殊加持意義。以此聖水製香，適合作為清淨、莊嚴的供佛香品。",
        offeringLabel: "$580",
        paymentInfo: "正式匯款帳號或付款連結待佛學院提供；送出請購單後將由專人回覆確認。",
        details: ["規格：23 cm", "一盒：100 支", "燃燒時間：每支約 65 分鐘", "原料：36 種珍貴藏藥材"],
        notes: ["請確認聯絡方式填寫正確。", "匯款與出貨安排將於人工確認後通知。"],
      },
      {
        title: "天然嚴選楚布寺藏香臥香",
        image: "/support-volunteer/charity-shop/incense/tsurphuincense202.png",
        productImage: "/support-volunteer/charity-shop/incense/tsurphuincense203.png?v=20260808165327",
        code: "C0002",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        offeringLabel: "$250",
      },
      {
        title: "天然嚴選楚布寺財神臥香",
        image: "/support-volunteer/charity-shop/incense/tsurphuincense301.png",
        productImage: "/support-volunteer/charity-shop/incense/tsurphuincense302.png?v=20260808164757",
        code: "C0003",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【規格】23 cm\n\n【一盒】100 支\n\n【藥材】沉香、紫檀、白檀、紅檀、藏紅花、甘松、安息香、荳蔻、楚布聖水、楚布香草、甘丹香草、乳香、柏樹、榆樹皮等 36 種珍貴藏藥材。採用純植物古法製作，不添加任何化學成分及人工色素。\n\n【燃燒時間】每支約 65 分鐘\n\n【特殊原料】除 36 種藏藥材外，另加入楚布寺歷代大寶法王修持甘露丸，以及財神寶殿黃財神、財寶天王等財神秘製持咒甘露丸與百年藏柏樹，使留香效果更持久，香氣更為純正。\n\n本品採用 100% 純天然藥材製作，香氣純正、品質精良。其中最珍貴的配方之一為「楚布聖水」。相傳此天然泉水由二世大寶法王以拐杖引出，水源潔淨，具有特殊的加持意義。以此聖水製香，適合作為清淨、莊嚴的供佛香品。\n\n【產品特色】適合用於供佛、禪修、靜坐、冥想及居家薰香，可營造清淨、寧靜的空間氛圍。傳統上亦寓有平安避邪、豐盛資糧、守護財庫、避除障礙、鴻運安泰、時來運轉、懷愛具足及諸事圓滿等吉祥寓意。",
        offeringLabel: "$580",
      },
    ],
    slug: "tsurphu",
  },
  {
    href: `${charityShopBasePath}/incense/bhutan-incense`,
    title: "不丹香",
    image: "/support-volunteer/charity-shop/incense/category002.png",
    products: [
      {
        title: "不丹NADO皇家御用線香",
        image: "/support-volunteer/charity-shop/incense/bhutanincense101.png",
        productImage: "/support-volunteer/charity-shop/incense/bhutanincense102.png?v=20260808171237",
        code: "C0004",
        summary:
          "適合用於供佛、禪修、靜坐、冥想及修法時使用。天然沉穩的香氣有助於營造清淨、莊嚴而安定的修持空間，使人在禪修與靜坐時更容易收攝心神、安住當下。",
        description:
          "【規格】香長約 22 cm，直徑約 4 mm\n\n【一盒】約 27 支\n\n【主要成分】多種水果、藏紅花、紅檀木、白檀木，以及各類天然草本植物、穀物、三白三甜等傳統香材。\n\n【製作方式】採用天然植物與傳統香材製作，並以鮮花調製香品色澤，不添加人工香精及色素，保留天然草木與香材本身的氣息。\n\n【傳承配方】依循藏傳佛教「竹巴噶舉」傳承的傳統配方調製，其配方相傳由伏藏大師、瑜伽士貝瑪卡波，以及敏珠林寺創辦人敏林德千等傳承流傳而來，具有深厚的藏傳佛教製香傳統背景。\n\n【製香環境】Nado 為不丹著名的傳統香品品牌，源自首都廷布（Thimphu）。傳統製香環境位於鄰近喜馬拉雅山區的自然環境之中，製作過程重視天然原料、水質及傳統工藝，形成不丹香特有的純淨、自然草本氣息。\n\n【作用】驅邪魔，消除障礙，上供佛菩薩，下施有情眾生，適合禪修或修法時使用，對禪定有助於安住入定的作用。",
        offeringLabel: "$250",
      },
      {
        title: "不丹NADO皇家御用線香",
        image: "/support-volunteer/charity-shop/incense/bhutanincense201.png",
        productImage: "/support-volunteer/charity-shop/incense/bhutanincense202.png?v=20260808170908",
        code: "C0005",
        summary:
          "適合用於供佛、禪修、靜坐、冥想及修法時使用。天然沉穩的香氣有助於營造清淨、莊嚴而安定的修持空間，使人在禪修與靜坐時更容易收攝心神、安住當下。",
        description:
          "【規格】香長約 22 cm，直徑約 4 mm\n\n【一盒】約 27 支\n\n【主要成分】多種水果、小麥、青稞、稻米、藏紅花、紅檀木、白檀木，以及各類天然草本植物、穀物、三白三甜等傳統香材。\n\n【製作方式】採用天然植物與傳統香材製作，並以鮮花調製香品色澤，不添加人工香精及色素，保留天然草木與香材本身的氣息。\n\n【傳承配方】依循藏傳佛教「竹巴噶舉」傳承的傳統配方調製，其配方相傳由伏藏大師、瑜伽士貝瑪卡波，以及敏珠林寺創辦人敏林德千等傳承流傳而來，具有深厚的藏傳佛教製香傳統背景。\n\n【製香環境】Nado 為不丹著名的傳統香品品牌，源自首都廷布（Thimphu）。傳統製香環境位於鄰近喜馬拉雅山區的自然環境之中，製作過程重視天然原料、水質及傳統工藝，形成不丹香特有的純淨、自然草本氣息。\n\n【作用】驅邪魔，消除障礙，上供佛菩薩，下施有情眾生，適合禪修或修法時使用，對禪定有助於安住入定的作用。",
        offeringLabel: "$250",
      },
      {
        title: "不丹NADO香粉",
        image: "/support-volunteer/charity-shop/incense/bhutanincense301.png?v=20260805194520",
        productImage: "/support-volunteer/charity-shop/incense/bhutanincense302.png?v=20260808172101",
        code: "C0006",
        summary:
          "此香材料是在喜馬拉雅山上沒有汙染完全天然的高山上僅有的花草藥材。驅邪魔，消除障礙，有助吸收財富，增強權力和影響力，消除消極負面情緒，安捂心境，緩解氣氛，帶您走入另一個心境，帶來幸福，平安興旺。對身心非常有益處，可單獨燃點，也可添加在其他香粉中。",
        description:
          "【規格】250 g\n\n【主要成分】芳香木材、天然草本植物、香草等。傳統煙供粉的配方會因傳承、寺院及上師而有所不同，通常以天然植物、藥草與穀物為主要原料，講究潔淨、芳香與傳統加持意涵。\n\n【製作方式】依照傳統製香方法調製，由不丹高品質香品製造商 Tsheringma 製作，注重天然原料與傳統工藝。\n\n【傳統用途】煙供粉在藏文語境中常稱為 Sang 或 Sur，是藏傳佛教煙供儀軌中常用的主要供養材料之一。可用於供養三寶、諸佛、菩薩及護法，也傳統上用於布施有情眾生及與自身具有因緣關係的眾生。\n\n【宗教文化背景】煙供是藏傳佛教中十分常見的修持方式，在寧瑪、噶舉、格魯等傳承中皆可見相關儀軌，也適合在家居士依照自身傳承與儀軌進行供養。\n\n【產品特色】本品以天然芳香木材、草本植物及香草等調製，燃燒後形成天然草木煙香，適合作為佛前供養、煙供、修法及日常淨化空間使用，營造清淨、莊嚴而安定的修持氛圍。\n\n【傳統寓意】依藏傳佛教煙供傳統，煙供寓有供養三寶、利益有情、淨化障礙及累積福德資糧等意義。部分傳承亦認為煙供有助於化解負面因緣、增長吉祥與安樂，並作為修行與利益眾生的一種善巧方便。",
        offeringLabel: "$350",
      },
      {
        title: "LHAWANG DRIDEN卧香",
        image: "/support-volunteer/charity-shop/incense/bhutanincense402.png?v=202608071512",
        productImage: "/support-volunteer/charity-shop/incense/bhutanincense403.png?v=20260808171535",
        code: "C0007",
        summary:
          "不丹 Lhawang Driden 卧香（又称喇旺香或经书香）是一款采用喜马拉雅山脉超过 30 种纯天然珍稀草本植物、药材与树皮，依藏传佛教古法在不丹纯手工制作的顶级藏香。其香味浓郁扎实、带有独特的天然草本与木质气息，常用于空间净化、冥想及供佛。",
        description:
          "【規格】香長約 21.5 cm\n\n【一盒】約 30 支臥香\n\n【主要成分】以超過 32 種天然草藥及植物香材製作，依循傳統佛教香譜調配，不添加不必要的人工香氣，以呈現天然草木本身的香韻。\n\n【製作方式】由位於不丹帕羅的 Lhawang Driden 製香廠依照傳統佛教製香方法，以天然香材純手工製作，保留不丹傳統香品的製作工藝與特色。\n\n【製香環境】不丹地勢北高南低，北部為終年積雪的高山地區，中部河谷氣候較為溫和，南部則分布大片森林及濕潤的亞熱帶丘陵與平原。全國森林覆蓋率約 72%，自然環境中生長著種類豐富的花草、樹木與藥用植物，因此不丹自古亦有「Menjong」之稱，意指「藥草豐饒之國」。\n\n【香氣特色】多種天然草藥與植物香材交織出柔和、自然的草本香氣，整體香韻沉穩而不刺激，適合喜愛天然藏式香品與草木調香氣者。\n\n【傳統用途】適合用於供佛、日常薰香、靜坐及營造清淨空間。天然草本香氣可為室內增添沉靜舒適的氛圍，亦適合在休息或放鬆時使用。\n\n【產品特色】本品直接由不丹 Lhawang Driden 製香廠引進，來源明確。從天然原料、傳統配方到手工製作及宣紙包裝，皆保留不丹香品質樸自然的特色。\n\n【保存方式】請置於乾燥、陰涼處保存，避免陽光直射及潮濕環境。",
        offeringLabel: "$250",
      },
    ],
    slug: "bhutan-incense",
  },
  {
    href: `${charityShopBasePath}/incense/hoi-an-incense`,
    title: "惠安香品",
    image: "/support-volunteer/charity-shop/incense/category003.png",
    products: [
      {
        title: "惠安沉香臥香",
        image: "/support-volunteer/charity-shop/incense/hoianincense101.png",
        productImage: "/support-volunteer/charity-shop/incense/hoianincense102.png?v=20260808172741",
        code: "C0008",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】採用純天然香材製作，不添加人工香精及香料，保留原材料本身自然純正的香氣。\n\n【製作方式】採用高純度天然原粉配製，並以山泉水製香。重視原料比例與傳統製香品質，使香氣更加自然醇厚。\n\n【品質檢驗】經 SGS 檢驗合格，屬環保、低煙型香品，燃燒時煙量較為細緻。\n\n【香氣特色】以高比例天然原粉製成，香氣自然沉穩，不以人工香精增香。妥善存放後，香材氣息會隨時間逐漸融合，呈現更加溫潤、醇和的香韻。\n\n【產品特色】純天然香材、高純度原粉、山泉水製香，無添加人工香精及香料，兼顧傳統製香質感與日常使用體驗。\n\n【保存方式】請置於乾燥、陰涼及通風處保存，避免潮濕與陽光直射。於適當保存條件下可長期存放，陳放後香韻亦會逐漸醇和。",
        offeringLabel: "$130",
      },
      {
        title: "惠安沉香臥香組",
        image: "/support-volunteer/charity-shop/incense/hoianincense201.png",
        productImage: "/support-volunteer/charity-shop/incense/hoianincense202.png?v=20260808173407",
        code: "C0011",
        summary:
          "惠安沉香臥香2管+精緻吊飾+莊嚴法寶袋，可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】採用純天然香材製作，不添加人工香精及香料，保留原材料本身自然純正的香氣。\n\n【製作方式】採用高純度天然原粉配製，並以山泉水製香。重視原料比例與傳統製香品質，使香氣更加自然醇厚。\n\n【品質檢驗】經 SGS 檢驗合格，屬環保、低煙型香品，燃燒時煙量較為細緻。\n\n【香氣特色】以高比例天然原粉製成，香氣自然沉穩，不以人工香精增香。妥善存放後，香材氣息會隨時間逐漸融合，呈現更加溫潤、醇和的香韻。\n\n【產品特色】純天然香材、高純度原粉、山泉水製香，無添加人工香精及香料，兼顧傳統製香質感與日常使用體驗。\n\n【保存方式】請置於乾燥、陰涼及通風處保存，避免潮濕與陽光直射。於適當保存條件下可長期存放，陳放後香韻亦會逐漸醇和。",
        offeringLabel: "$700",
      },
      {
        title: "惠安沉香香環",
        image: "/support-volunteer/charity-shop/incense/hoianincense301.png",
        productImage: "/support-volunteer/charity-shop/incense/hoianincense302.png?v=20260808173808",
        code: "C0009",
        summary:
          "佛家在《蘇悉地羯羅經》中論述了以塗香、華鬘、燒香、飯食、燈明為供養本尊的其一法物。佛教徒相信，燃香於佛前發願，是捨己為人之意，是「真供養」。",
        description:
          "【主要成分】採用純天然香材製作，不添加人工香精及香料，保留原材料本身自然純正的香氣。\n\n【製作方式】採用高純度天然原粉配製，並以山泉水製香。重視原料比例與傳統製香品質，使香氣更加自然醇厚。\n\n【品質檢驗】經 SGS 檢驗合格，屬環保、低煙型香品，燃燒時煙量較為細緻。\n\n【香氣特色】以高比例天然原粉製成，香氣自然沉穩，不以人工香精增香。妥善存放後，香材氣息會隨時間逐漸融合，呈現更加溫潤、醇和的香韻。\n\n【產品特色】純天然香材、高純度原粉、山泉水製香，無添加人工香精及香料，兼顧傳統製香質感與日常使用體驗。\n\n【保存方式】請置於乾燥、陰涼及通風處保存，避免潮濕與陽光直射。於適當保存條件下可長期存放，陳放後香韻亦會逐漸醇和。",
        offeringLabel: "$380",
      },
    ],
    slug: "hoi-an-incense",
  },
  {
    href: `${charityShopBasePath}/incense/incense-coils`,
    title: "香環",
    image: "/support-volunteer/charity-shop/incense/category004.png",
    products: [
      {
        title: "印度老山香環",
        image: "/support-volunteer/charity-shop/incense/coilincense101.png?v=20260805194936",
        productImage: "/support-volunteer/charity-shop/incense/coilincense102.png?v=20260808174316",
        code: "C0010",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】精選優質天然印度老山檀香原粉製作。\n\n【香氣特色】香韻濃郁醇厚，以溫潤木質檀香為主調，伴隨自然甘甜與柔和奶香，層次圓潤而持久。\n\n【產品特色】採用天然老山檀香原粉，保留檀香本身純正、沉穩的香氣，適合供佛、禪修、靜坐及日常居家薰香使用。",
        offeringLabel: "$380",
      },
      {
        title: "艾草香環",
        image: "/support-volunteer/charity-shop/incense/coilincense201.png",
        productImage: "/support-volunteer/charity-shop/incense/coilincense202.png?v=20260808174717",
        code: "C0012",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】艾草粉、天然黏粉\n\n【燃燒時間】每枚約 4 小時\n\n【產品特色】以檀香粉搭配天然黏粉製作，香氣自然沉穩，適合供佛、禪修、靜坐及居家薰香使用。\n\n【保存方式】請置於乾燥、陰涼處妥善保存，避免受潮與陽光直射。於保存狀況良好的情況下可長期存放。",
        offeringLabel: "$298",
      },
      {
        title: "檀香香環",
        image: "/support-volunteer/charity-shop/incense/coilincense301.png",
        productImage: "/support-volunteer/charity-shop/incense/coilincense302.png?v=20260808174918",
        code: "C0013",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】檀香粉、天然黏粉\n\n【燃燒時間】每枚約 4 小時\n\n【產品特色】以檀香粉搭配天然黏粉製作，香氣自然沉穩，適合供佛、禪修、靜坐及居家薰香使用。\n\n【保存方式】請置於乾燥、陰涼處妥善保存，避免受潮與陽光直射。於保存狀況良好的情況下可長期存放。",
        offeringLabel: "$298",
      },
    ],
    slug: "incense-coils",
  },
  {
    href: `${charityShopBasePath}/incense/smoke-offering-powder`,
    title: "供煙粉",
    image: "/support-volunteer/charity-shop/incense/category005.png",
    products: [
      {
        title: "香雲煙供粉",
        image: "/support-volunteer/charity-shop/incense/powderincense101.png",
        productImage: "/support-volunteer/charity-shop/incense/powderincense102.png?v=20260808175245",
        code: "C0018",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】五穀奶粉、酥油、麵粉等約 20 種食材，並搭配甘草、白芷、桂皮、安息香、吉祥草、香茅草、肉豆蔻、白芍等 20 多種天然草藥調製而成。\n\n【製作特色】以穀物、乳製品、天然食材及多種傳統草藥調配，兼具煙供中「食物供養」與「芳香供養」的傳統意涵，適合作為藏傳佛教煙供、下施等修持使用。\n\n【煙供用途】煙供下施主要是以香煙與食物的形式布施六道有情。依藏傳佛教傳統觀念，餓鬼道及其他受苦眾生因自身業力而難以獲得飲食，因此修持者可藉由煙供及持誦儀軌，將供品布施予相關有情，以培養慈悲心並累積善業與福德資糧。\n\n【傳統功德寓意】（一）解除宿怨（二）諸業滅盡（三）速獲功德（四）感富餞果（五）病苦痊癒（六）天龍地祗擁護心（七）處所吉祥（八）速證佛果。\n\n【產品特色】食材與天然草藥種類豐富，可用於煙供、下施、日常修法及佛教相關供養儀軌。燃燒後具有穀物、草藥與天然香材交融的傳統煙供氣息。\n\n【保存方式】請置於陰涼、乾燥處妥善保存，避免陽光直射、高溫及潮濕環境。",
        offeringLabel: "$350",
      },
    ],
    slug: "smoke-offering-powder",
  },
  {
    href: `${charityShopBasePath}/incense/other-incense`,
    title: "其他香品",
    image: "/support-volunteer/charity-shop/incense/category006.png",
    products: [
      {
        title: "吞柏古藏香",
        image: "/support-volunteer/charity-shop/incense/otherincense101.png",
        productImage: "/support-volunteer/charity-shop/incense/otherincense102.png?v=20260808180426",
        code: "C0019",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【規格】香長約 26 cm\n\n【一盒】4 捆，每捆約 30 支，共約 120 支\n\n【主要成分】精選藏木香、藏當歸、檀香、丁香、沉香、藏紅花、肉豆蔻、訶子、冰片等 30 多種天然藏草藥精製而成，不含動物性成分及化學香料、香精。\n\n【製作方式】採用西藏傳統製香工藝，全程以手工製作，從原料配伍、研磨到成香皆依循傳統方法完成，保留藏香原有的草本與木質香氣。\n\n【歷史傳承】吞柏藏香相傳已有 1300 多年歷史，其製香傳統可追溯至公元 7 世紀。相傳由吐蕃時期吞米桑布扎依據藏醫藥及傳統五明學相關知識，選用多種天然藏藥材研製，最初用於供奉佛、法、僧三寶。其製香地後以「吞柏村」聞名，並形成今日「吞柏古藏香」的品牌傳承。\n\n【製香環境】傳統製香過程重視原料與水源品質。依品牌流傳的說法，吞柏村當地長期使用天然溪水製香，並將潔淨水源視為傳統製香文化的一部分。\n\n【傳統用途】本品主要用於供奉佛、菩薩、本尊、護法及佛經等，適合作為佛前上香、日常課誦、修法及相關供養儀軌使用。\n\n【傳統功德寓意】依藏傳佛教供香傳統，本品寓有增長福慧資糧、遣除障礙、祈願順遂及遠離不善因緣等宗教意涵。\n\n【產品特色】採用 30 多種天然藏草藥配製，不添加化學香料及人工香精，整體香氣呈現傳統藏香特有的草本、木質與藥香層次，適合喜愛天然藏式供香及傳統寺院香氣者。\n\n【品質認證】品牌資料稱吞柏古藏香有限公司曾通過 ISO 9001:2000 質量管理體系認證。",
        offeringLabel: "$480",
      },
      {
        title: "安神崖柏",
        image: "/support-volunteer/charity-shop/incense/otherincense201.png",
        productImage: "/support-volunteer/charity-shop/incense/otherincense202.png?v=20260808180921",
        code: "C0020",
        summary:
          "可用於供佛、禪修、靜坐、冥想及居家薰香，有助於營造安定、清淨且寧靜的空間氛圍，舒緩身心，提升專注。",
        description:
          "【主要成分】精選優質太行崖柏陳化原木，以高比例天然原粉製作，不添加人工香精及香料。\n\n【原料特色】選用經長時間自然陳化的太行崖柏原木作為主要香材，保留崖柏本身濃郁而溫潤的木質香韻。\n\n【製作方式】採用高純度天然原粉配製，並以山泉水製香，重視原料比例與天然製香品質，使香材本身的氣息得以充分呈現。\n\n【香氣特色】香氣濃郁醇和，以沉穩木質香為基調，帶有自然的甜潤感與柔和奶香，整體香韻厚實、圓潤而舒適。\n\n【品質檢驗】經 SGS 檢驗合格，屬低煙細香，燃燒時煙量較為細緻。\n\n【產品特色】採用天然崖柏原料製作，不添加人工香精及香料。香氣沉穩柔和，適合靜坐、禪修、休息及日常居家薰香，可營造安定、舒適的空間氛圍。\n\n【保存方式】請置於乾燥、陰涼及通風處保存，避免潮濕與陽光直射。於保存狀況良好的條件下可長期存放，隨著陳放時間增加，香韻亦可能逐漸變得更加融合醇和。",
        offeringLabel: "$120",
      },
    ],
    slug: "other-incense",
  },
];

const malaItems: CharityShopItem[] = [
  {
    title: "天然翡翠干青玉＆紅硃砂108顆唸珠8MM",
    shortTitle: "翡翠干青玉念珠",
    image: "/support-volunteer/charity-shop/malas/malas101.png",
    productImage: "/support-volunteer/charity-shop/malas/malas102.png?v=20260808182642",
    code: "A0001",
    summary:
      "以天然翡翠干青玉與紅硃砂串成的 108 顆 8MM 念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的法物，它也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n翡翠素有「玉中珍品」之稱，主要由硬玉礦物及其他輝石類礦物組成，因其色澤、質地與光澤富有變化，自古便被廣泛運用於飾物、雕件與禮器之中。\n\n「翡翠」一名亦頗具文化意趣。古代「翡」與「翠」原指赤羽與綠羽之鳥，因羽色鮮麗動人，後來人們便以「翡翠」稱呼這類色澤明艷、溫潤可觀的玉石。\n\n【玉種特色】\n本品屬干青種翡翠。干青種以濃郁鮮明的綠色為主要特色，鉻元素含量較高，因此色澤通常飽滿而深沉。其結晶顆粒較為明顯，透明度偏低，整體呈現質樸、厚實而沉穩的玉石質感。\n\n相較於追求通透水潤的翡翠品種，干青種更著重濃綠色澤與古樸氣韻，具有鮮明而莊重的視覺特徵。\n\n【玉石文化】\n玉在中國傳統文化中，不只是珍貴飾物，也長久承載著品德、禮制與精神象徵。\n\n古人有「君子比德於玉」之說，以玉的溫潤、堅貞與含蓄，比擬君子之德。歷代玉器亦常見於祭祀、禮佛、宮廷與日常佩飾之中，因此逐漸形成了平安、清淨、吉祥與護念等文化寓意。\n\n民間亦流傳「人養玉，玉養人」之說，所指更多是一種人與器物長久相伴、彼此珍惜的文化情感。經由日常佩戴與使用，玉石亦會逐漸展現更加溫潤自然的光澤。\n\n【佛教文化寓意】\n在佛教文化語境中，珍貴材質本身並非修行的目的，更重要的是藉由外在物件提醒內心保持正念、善念與清淨心。\n\n玉石所代表的溫潤、堅定與不染，可作為日常佩戴時的一份善意提醒。無論作為佛教飾物、隨身配件或供養之物，都可寄託平安吉祥、離諸障礙、增長善緣與福德資糧的祈願。\n\n【產品特色】\n本品以干青種翡翠製作，色澤濃綠沉穩，具有天然玉石特有的紋理與質感。每件玉石的色澤深淺、礦物紋理及自然特徵皆可能略有不同，亦正是天然材質獨有之處。\n\n適合作為日常佩戴、佛教文化飾物、結緣贈禮或義賣收藏之用，在欣賞天然玉石之美的同時，也承載一份清淨、吉祥與善念。\n\n【義賣意義】\n佛教義賣的珍貴之處，不僅在於得到一件物品，更在於讓一次購買成為一次善行。願每一份護持，都能匯聚為利益眾生的善緣與資糧。\n\n※ 玉石相關「平安、辟邪、護身、吉祥」等說法源於傳統文化與民間信仰，屬文化寓意，並非醫療或實際功效之保證。\n\n——索達吉堪布開示",
    offeringLabel: "$28,000",
  },
  {
    title: "黃金硨磲108顆8MM",
    shortTitle: "黃金硨磲",
    image: "/support-volunteer/charity-shop/malas/malas201.png",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas202.png?v=20260808193504",
      "/support-volunteer/charity-shop/malas/malas203.png?v=20260808193513",
    ],
    code: "A0003",
    summary:
      "以 108 顆 8MM 黃金硨磲串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的法物，它也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n硨磲取自海洋，是傳統佛教文化中常見的珍貴天然材質之一。其色澤柔和含蓄，質地溫潤細膩，整體呈現安詳、沉靜而清雅的氣質，因此長久以來常被製作成佛珠、念珠及隨身佩飾。\n\n【材質特色】\n硨磲珠體通常具有自然柔潤的光澤，觸感溫和，視覺上不張揚，卻帶有穩定而內斂的質感。大顆珠體更能呈現硨磲本身厚實飽滿的份量感，適合喜愛沉穩、莊重佛珠風格者。\n\n【佛教文化寓意】\n在佛教與民間傳統文化中，硨磲常被賦予清淨、吉祥、護念與平安的象徵意義，也常作為念佛、持咒及日常修持所使用的佛珠材質。\n\n佩戴或持用硨磲佛珠，不僅是對天然材質之美的欣賞，也可作為日常提醒自己攝心、持念、安住正念的一件隨身法物。\n\n【傳統吉祥寓意】\n傳統文化中，硨磲亦有消災解厄、避邪護身、祈求平安等吉祥寓意。這些說法主要源自宗教文化與民間信仰，象徵對安定、順遂與遠離障礙的美好祈願。\n\n【產品特色】\n天然硨磲色澤溫潤、質感柔和，兼具佛珠的莊重感與日常佩戴的親和感。大顆珠體視覺飽滿，握持時亦更具存在感，適合作為持珠、念珠、日常佩戴或佛教義賣結緣之用。\n\n【使用建議】\n適合日常念佛、持咒、靜坐、禪修或隨身佩戴。使用時可將佛珠視為一份日常提醒，在行住坐臥之間保持覺察與善念，使修持自然融入生活。\n\n【保養方式】\n請避免長時間接觸高溫、強酸鹼、香水及化學清潔用品。日常可使用柔軟乾布輕拭，並置於乾燥陰涼處保存，以維持材質原有的光澤與質感。\n\n——索達吉堪布開示",
    offeringLabel: "$2,800",
  },
  {
    title: "星月菩提108顆唸珠8MM+金剛杵",
    shortTitle: "星月菩提唸珠+金剛杵",
    image: "/support-volunteer/charity-shop/malas/malas301.png",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas302.png?v=20260808222442",
      "/support-volunteer/charity-shop/malas/malas303.png?v=20260808193530",
      "/support-volunteer/charity-shop/malas/malas304.png?v=20260808193523",
    ],
    code: "A0004",
    summary:
      "以 108 顆 8MM 星月菩提串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的念珠，它不只是法物，也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n星月菩提為傳統佛珠中極具代表性的材質之一。每顆珠粒表面散布細密自然的小點，並帶有一處較明顯的圓形凹點，宛如繁星環繞明月，因此得名「星月菩提」。\n\n其外觀古樸雅致，珠體溫厚而富有質感，既適合作為日常持珠，也具有鮮明的佛教修持氣息。\n\n【佛教文化寓意】\n「菩提」一詞在佛教中具有覺悟、智慧之意。《安樂集》中亦有「菩提者，乃是無上佛道之名」之說，因此菩提子自古便被廣泛製作為念珠，用於念佛、持咒與計數修持。\n\n傳統上認為，以菩提念珠持誦具有殊勝的修持意義。對修行者而言，念珠不只是一件隨身法物，也是一種提醒，在每一次撥珠與持誦之間收攝散亂之心，憶念三寶，使修行融入日常。\n\n【材質特色】\n星月菩提表面分布天然細小黑點，中間常見一處圓形「月眼」，形成眾星拱月般的天然紋理。不同籽粒的星點密度、月眼形態及色澤皆略有差異，因此每串念珠都具有自身獨特的天然面貌。\n\n品質良好的星月菩提通常珠質較為瓷實，具有一定油性與密度，經長時間持用後會逐漸呈現更加溫潤細膩的光澤。\n\n【盤玩變化】\n星月菩提最具魅力之處，在於它會隨著時間留下使用者持珠與修持的痕跡。\n\n新珠通常色澤較淺，隨著長期佩戴、持誦與自然氧化，珠體可能逐漸由淺色轉為蜜黃、紅潤乃至深褐色，表面亦可能形成細密自然的「開片」紋路。\n\n經年持用後，珠體光澤愈發溫潤，色澤與紋理也會逐漸產生獨特變化。一串星月菩提，因此不只是念珠，也會成為陪伴修行歲月、記錄時間痕跡的一件法物。\n\n【傳統吉祥寓意】\n在佛教及民間傳統文化中，星月菩提常被賦予增長智慧、減少煩惱、吉祥護念與遠離障礙等美好寓意。\n\n其真正珍貴之處，仍在於藉由念珠提醒自己攝心持念、觀照內心，在一珠一念之間培養清淨與安定。\n\n【產品特色】\n星月菩提兼具天然紋理、佛教文化意涵與長期持用後的歲月變化。珠體典雅而質樸，握持感扎實，適合念佛、持咒、禪修、日常佩戴或作為結緣法物。\n\n隨著長年持用，每一串念珠都會形成屬於自己的色澤與包漿，使天然材質與修行歲月彼此相伴。\n\n【保養方式】\n星月菩提屬天然植物種子材質，新珠尤其應避免長時間接觸水分。浸水或受潮可能造成珠體膨脹、脫皮、褪色或開裂。\n\n日常使用後可用乾淨柔軟的布輕拭，並置於乾燥、通風處保存。沐浴、游泳或長時間接觸大量水分時，建議先將念珠取下，以維持珠體良好狀態。\n\n——索達吉堪布開示",
    offeringLabel: "$2,580",
  },
  {
    title: "黃金硨磲108顆6MM+金剛杵直管配珠",
    shortTitle: "黃金硨磲+金剛杵",
    image: "/support-volunteer/charity-shop/malas/malas401.png",
    productImage: "/support-volunteer/charity-shop/malas/malas402.png?v=20260808193537",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas402.png?v=20260808193537",
      "/support-volunteer/charity-shop/malas/malas403.png?v=20260808222442",
    ],
    productImageTransform: "translateY(-5%) scale(1.18)",
    productImageTransforms: ["translateY(-5%) scale(1.18)"],
    code: "A0005",
    summary:
      "以 108 顆 8MM 黃金硨磲串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的念珠，它不只是法物，也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n硨磲來自海洋，是具有獨特天然紋理與溫潤質感的有機材質。其色澤柔和、質地細膩，自古便常被製作為珠飾、念珠與佛教相關法物，呈現清淨、沉靜而莊重的氣質。\n\n【佛教文化寓意】\n在藏傳佛教及密教文化中，硨磲常被視為具有吉祥意涵的珍貴材質，亦可見於佛珠、供養物及修持法物之中。\n\n傳統上，人們賦予硨磲清淨、護念、平安與遠離障礙等象徵意義。修行者持用硨磲念珠時，亦可藉由念佛、持咒與日常觀照，提醒自己減少貪、嗔、痴，培養智慧、慈悲與清淨心。\n\n【傳統吉祥寓意】\n民間與宗教文化中，硨磲亦常被賦予消災解厄、避邪護身、祈求平安等吉祥寓意。這些傳統說法所承載的，是人們對遠離障礙、身心安定與善緣增長的美好祈願。\n\n【產品特色】\n硨磲具有自然柔潤的光澤與細膩質感，整體氣質含蓄而雅致。作為佛珠使用，不僅具有天然材質的美感，也承載修持、憶念與吉祥護念的文化意涵，適合用於念佛、持咒、禪修、日常佩戴或結緣贈禮。\n\n天然硨磲的色澤、紋理及細微特徵各不相同，每件皆保留天然材質本身獨有的面貌。\n\n【保養方式】\n硨磲材質應避免接觸酸性、鹼性物質，以及香水、化妝品與刺激性清潔用品。\n\n日常佩戴後，如表面沾染汗液或髒污，可使用清水輕柔沖洗，再以柔軟細布擦拭乾燥。平時建議置於陰涼、乾燥處妥善保存，以維持其天然光澤與質感。\n\n——索達吉堪布開示",
    offeringLabel: "$2,500",
  },
  {
    title: "金沙黑曜石108顆8MM",
    shortTitle: "金沙黑曜石念珠",
    image: "/support-volunteer/charity-shop/malas/malas501.png",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas502.png?v=20260808222442",
      "/support-volunteer/charity-shop/malas/malas503.png?v=20260808193555",
    ],
    code: "A0006",
    summary:
      "以 108 顆 8MM 金沙黑曜石串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的念珠，它不只是法物，也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n金曜石，又常稱金沙黑曜石，屬於黑曜石的一種。深邃的黑色珠體中帶有金色光澤，在不同角度與光線照射下，可呈現如金沙般流動的金色「眼」或光帶，黑金交映，沉穩之中帶有華麗而莊重的氣質。\n\n【天然形成】\n黑曜石是一種天然火山玻璃，主要形成於富含二氧化矽的火山熔岩快速冷卻、來不及形成明顯礦物晶體的過程。其深色而富有光澤的外觀，也使其自古被製作成器物、珠飾與雕刻品。\n\n【金曜特色】\n與一般黑曜石相比，金曜石最具辨識度的特色，在於珠體表面隨著光線與觀看角度變化而浮現金色光澤。幽深黑色與金色光暈相互映襯，使每顆珠子的光影、紋理皆略有不同，呈現天然石材特有的層次與個性。\n\n【傳統文化寓意】\n在傳統民間文化與水晶文化中，黑曜石長久以來被賦予避邪、護身、化解負面能量與遠離障礙等象徵意義；金曜石則因其金色光澤，又延伸出招財、聚福與增長吉祥資糧的美好寓意。\n\n黑與金兩種色彩相互交融，也象徵沉穩守護與豐盛吉祥並存，適合作為日常佩戴、佛珠或結緣贈禮。\n\n【佛教文化寓意】\n在佛教文化語境中，念珠本身更重要的意義，在於提醒修行者攝心、持念與觀照自身。以金曜石製成念珠，其沉穩深邃的色澤，可作為日常修持中的一份陪伴，在持咒、念佛與靜坐時提醒自己安住當下、減少散亂。\n\n傳統所稱的「護身、避邪」，亦可理解為一份對遠離障礙、增長善緣與身心安定的吉祥祈願。\n\n【佩戴寓意】\n金曜石沉穩厚重的視覺氣質，常被賦予穩定心緒、堅定意志與提升行動力等象徵意涵。對於工作繁忙、思緒較多或需要長時間專注者，也可將其作為提醒自己收攝心神、保持穩定節奏的隨身飾物。\n\n【產品特色】\n黑色珠體深邃沉穩，金色光眼隨光線流轉，兼具天然礦石的獨特美感與吉祥文化寓意。適合用於念佛、持咒、禪修、日常佩戴或佛教義賣結緣。\n\n天然礦石的色澤、金眼大小、光帶位置及天然紋理皆可能有所差異，每一串皆具有獨特的自然面貌。\n\n【保養方式】\n日常佩戴後可使用柔軟乾布輕拭表面，避免與尖銳、堅硬物品長時間碰撞或摩擦。沐浴、游泳或接觸清潔劑、香水等化學用品時，建議先行取下，並於不使用時置於乾燥處妥善保存。\n\n——索達吉堪布開示",
    offeringLabel: "$1,880",
  },
  {
    title: "古雅土耳其石108顆8MM唸珠",
    shortTitle: "古雅土耳其石念珠",
    image: "/support-volunteer/charity-shop/malas/malas601.png",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas602.png?v=20260808222442",
      "/support-volunteer/charity-shop/malas/malas603.png?v=20260808193613",
    ],
    code: "A0007",
    summary:
      "以 108 顆 8MM 土耳其石串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的念珠，它不只是法物，也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n綠松石色澤溫潤，自古被視為吉祥之石，在不同文化中常寓意平安、守護、聚福與順遂。其藍綠色調沉靜自然，也象徵勇氣、安定與清明。\n\n【紅硃砂點綴】\n本品搭配紅硃砂圓珠，鮮明朱紅與綠松石相互映襯，更具東方傳統氣韻。硃砂在傳統文化中常被賦予辟邪、護身與吉祥平安的寓意。\n\n【「祿」之寓意】\n「祿」象徵福祿、豐足與事業順遂，寄託福慧增長、資糧具足與生活安穩的美好祝願。\n\n【產品特色】\n綠松石、紅硃砂與「祿」元素相結合，兼具天然材質美感與傳統吉祥寓意，適合作為日常佩戴、結緣贈禮或佛教義賣飾物。\n\n【佛教文化寓意】\n作為佛教義賣商店中的隨身飾物，其價值不只在材質本身，更在於讓一件日常佩戴之物成為提醒善念與修持的媒介。\n綠松石所象徵的安定與清明、硃砂所承載的吉祥護念，以及「祿」所代表的福德資糧，都可以轉化為一份日常提醒：珍惜當下、廣結善緣、培養福慧，並將所得與善行相連。\n\n【保養方式】\n綠松石材質相對細膩，建議避免長時間接觸香水、化妝品、清潔劑及其他化學用品，也應避免碰撞與長時間浸水。\n日常可使用柔軟乾布輕拭，並置於乾燥陰涼處保存。硃砂配件亦應避免磨損、撞擊與不必要的高溫接觸。\n\n——索達吉堪布開示",
    offeringLabel: "$1,880",
  },
  {
    title: "紅硃砂＆土耳其石108顆8MM唸珠",
    shortTitle: "紅硃砂＆土耳其石念珠",
    image: "/support-volunteer/charity-shop/malas/malas701.png",
    productImages: [
      "/support-volunteer/charity-shop/malas/malas702.png?v=20260808222505",
      "/support-volunteer/charity-shop/malas/malas703.png?v=20260808193625",
    ],
    code: "A0008",
    summary:
      "以 108 顆 8MM 土耳其石串成的念珠，承載「長瓦」恆常憶念、相續不斷的寓意。作為修行者隨身持用的念珠，它不只是法物，也是一份提醒自己時時憶念上師、本尊與諸佛的日常陪伴。",
    description:
      "【材質介紹】\n綠松石色澤溫潤，自古被視為吉祥之石，在不同文化中常寓意平安、守護、聚福與順遂。其藍綠色調沉靜自然，也象徵勇氣、安定與清明。\n\n【紅硃砂點綴】\n本品搭配紅硃砂圓珠，鮮明朱紅與綠松石相互映襯，更具東方傳統氣韻。硃砂有非常強的\"陽氣\"，具有鎮靜安神之功效。在風水學中，硃砂是經由日月精華的礦脈中採集，因吸收天地之正氣，所以帶有極強的磁場在傳統文化中常被賦予辟邪、護身與吉祥平安的寓意。\n\n【「祿」之寓意】\n「祿」象徵福祿、豐足與事業順遂，寄託福慧增長、資糧具足與生活安穩的美好祝願。\n\n【產品特色】\n綠松石、紅硃砂與「祿」元素相結合，兼具天然材質美感與傳統吉祥寓意，適合作為日常佩戴、結緣贈禮或佛教義賣飾物。\n\n【佛教文化寓意】\n作為佛教義賣商店中的隨身飾物，其價值不只在材質本身，更在於讓一件日常佩戴之物成為提醒善念與修持的媒介。\n綠松石所象徵的安定與清明、硃砂所承載的吉祥護念，以及「祿」所代表的福德資糧，都可以轉化為一份日常提醒：珍惜當下、廣結善緣、培養福慧，並將所得與善行相連。\n\n【保養方式】\n綠松石材質相對細膩，建議避免長時間接觸香水、化妝品、清潔劑及其他化學用品，也應避免碰撞與長時間浸水。\n日常可使用柔軟乾布輕拭，並置於乾燥陰涼處保存。硃砂配件亦應避免磨損、撞擊與不必要的高溫接觸。\n\n——索達吉堪布開示",
    offeringLabel: "$1,800",
  },
];

const otherItems: CharityShopItem[] = [
  {
    title: "轉經輪",
    image: "/support-volunteer/charity-shop/others/wheel101.png?v=20260810182850",
    productImage: "/support-volunteer/charity-shop/others/wheel102.png?v=20260810183256",
    code: "D0001",
    summary:
      "太陽能與電池雙模式設計，使用方便，可作為車載、佛堂或居家佛教擺件。轉動之間，既是空間中的一份莊嚴，也提醒自己時時保持善念、憶念三寶，讓修持自然融入日常生活。",
    description:
      "【產品介紹】\n佛教太陽能車載電動轉經輪，採太陽能與電池兩用設計，可置於車內或日常空間使用。彩繪外觀結合藏傳佛教轉經輪元素，在光線充足時可持續轉動，作為日常憶念三寶、持續修持與莊嚴空間的佛教法物。\n\n【內置經咒】\n轉經筒內含多種佛教經咒，包括：\n三寶經 50 遍、阿彌陀佛心咒 210 遍、蓮花生大士心咒 30 遍、綠度母心咒 75 遍、長壽佛心咒 30 遍、觀音菩薩心咒 30 遍、財神心咒 60 遍、緣起心咒 115 遍。\n\n【轉經輪的修持意義】\n轉經輪是藏傳佛教中常見的修持法物。傳統認為，將經文與心咒置於轉經筒內，以恭敬心轉動，可作為持誦經咒、憶念三寶及累積善業資糧的一種方便法門。\n\n索達吉堪布亦曾引用古德開示：若轉經輪中裝有大量心咒，轉動一匝，即具有相應持誦經咒的功德意涵。對修行者而言，轉經輪的重要之處，不只在於轉動本身，更在於轉動時所生起的恭敬心、菩提心與善念。\n\n【佛教文化背景】\n轉經輪在藏地寺院、家庭與日常生活中十分常見，無論僧俗皆可藉由轉經、持咒與繞行等方式修持。漢傳佛教歷史中亦曾有「輪藏」傳統，《釋門正統》《神僧傳》等文獻中皆有推轉輪藏與讀誦經藏功德相關的記載。\n\n【吉祥寓意】\n依佛教傳統，轉經輪寓有累積福慧資糧、淨除障礙、增長善緣與祈願吉祥圓滿等意義。願每一次轉動，都成為一念清淨與一份善願的延續。\n\n——內容參考索達吉堪布《轉經筒可以讓你心想事成》",
    offeringLabel: "$1,000",
  },
];

export const charityShopCategories: CharityShopCategory[] = [
  {
    title: "香品",
    slug: "incense",
    image: "/support-volunteer/charity-shop/category/incense.png?v=202608121614",
    href: `${charityShopBasePath}/incense`,
    items: incenseItems,
  },
  {
    title: "念珠",
    slug: "malas",
    image: "/support-volunteer/charity-shop/category/malas.png?v=202608121630",
    href: `${charityShopBasePath}/malas`,
    items: malaItems,
  },
  {
    title: "其他",
    slug: "others",
    image: "/support-volunteer/charity-shop/category/others.png?v=202608121631",
    href: `${charityShopBasePath}/others`,
    items: otherItems,
  },
];

export function getCharityShopCategory(slug: string) {
  return charityShopCategories.find((category) => category.slug === slug);
}

export function getIncenseCategory(slug: string) {
  return getIncenseCategories().find((item) => item.slug === slug);
}

export function getIncenseCategories() {
  return incenseItems.filter(
    (item): item is CharityShopLinkedItem => Boolean(item.href && item.slug),
  );
}

export function getCharityShopItemCount(item: CharityShopItem) {
  return item.products?.length ?? 1;
}

export function getCharityShopCategoryItemCount(category: CharityShopCategory) {
  return category.items.reduce((total, item) => total + getCharityShopItemCount(item), 0);
}

export function getProductSlug(index: number) {
  return String(index + 1).padStart(3, "0");
}

export function getIncenseProducts(category: CharityShopLinkedItem) {
  const products = category.products ?? [
    {
      title: category.title,
      image: category.image,
    },
  ];

  return products.map((product, index) => ({
    ...product,
    href: `${category.href}/${getProductSlug(index)}`,
    slug: getProductSlug(index),
  }));
}

export function getIncenseProduct(categorySlug: string, productSlug: string) {
  const category = getIncenseCategory(categorySlug);

  if (!category) {
    return null;
  }

  const product = getIncenseProducts(category).find((item) => item.slug === productSlug);

  if (!product) {
    return null;
  }

  return {
    category,
    product,
  };
}

export function getCharityShopDirectProducts(category: CharityShopCategory) {
  return category.items.map((product, index) => ({
    ...product,
    href: `${category.href}/${getProductSlug(index)}`,
    slug: getProductSlug(index),
  }));
}

export function getCharityShopDirectProduct(categorySlug: string, productSlug: string) {
  const category = getCharityShopCategory(categorySlug);

  if (!category || category.slug === "incense") {
    return null;
  }

  const product = getCharityShopDirectProducts(category).find((item) => item.slug === productSlug);

  if (!product) {
    return null;
  }

  return {
    category,
    product,
  };
}

const relatedProductKeywords = [
  "念珠",
  "硨磲",
  "翡翠",
  "硃砂",
  "土耳其石",
  "星月菩提",
  "黑曜石",
  "金剛杵",
  "香",
  "藏香",
  "線香",
  "臥香",
  "香環",
  "煙供",
  "供佛",
  "禪修",
  "靜坐",
  "冥想",
  "薰香",
  "轉經輪",
  "清淨",
  "護念",
  "吉祥",
];

function getProductSearchText(product: CharityShopProduct, categoryTitle: string) {
  return [categoryTitle, product.title, product.shortTitle, product.summary, product.description]
    .filter(Boolean)
    .join(" ");
}

function getProductKeywords(product: CharityShopProduct, categoryTitle: string) {
  const searchText = getProductSearchText(product, categoryTitle);
  return relatedProductKeywords.filter((keyword) => searchText.includes(keyword));
}

function getOfferingAmount(offeringLabel?: string) {
  const amount = Number(offeringLabel?.replace(/[^\d]/g, "") ?? "");

  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

function getAllCharityShopProducts() {
  let sourceIndex = 0;

  return charityShopCategories.flatMap((category) => {
    if (category.slug === "incense") {
      return getIncenseCategories().flatMap((item) =>
        getIncenseProducts(item).map((product) => ({
          ...product,
          categorySlug: category.slug,
          categoryTitle: item.title,
          sourceIndex: sourceIndex++,
        })),
      );
    }

    return getCharityShopDirectProducts(category).map((product) => ({
      ...product,
      categorySlug: category.slug,
      categoryTitle: category.title,
      sourceIndex: sourceIndex++,
    }));
  });
}

export function getCharityShopRelatedProducts(currentHref: string, limit = 5): CharityShopRelatedProduct[] {
  const products = getAllCharityShopProducts();
  const currentProduct = products.find((product) => product.href === currentHref);

  if (!currentProduct) {
    return products.slice(0, limit);
  }

  const currentKeywords = new Set(getProductKeywords(currentProduct, currentProduct.categoryTitle));
  const currentAmount = getOfferingAmount(currentProduct.offeringLabel);

  return products
    .filter((product) => product.href !== currentHref)
    .map((product) => {
      const keywordScore = getProductKeywords(product, product.categoryTitle).filter((keyword) =>
        currentKeywords.has(keyword),
      ).length;
      const candidateAmount = getOfferingAmount(product.offeringLabel);
      const priceDiff =
        currentAmount !== null && candidateAmount !== null ? Math.abs(currentAmount - candidateAmount) : null;
      const priceScore =
        priceDiff === null ? 0 : priceDiff <= 100 ? 5 : priceDiff <= 500 ? 3 : priceDiff <= 2000 ? 1 : 0;
      const score =
        (product.categorySlug === currentProduct.categorySlug ? 16 : 0) +
        (product.categoryTitle === currentProduct.categoryTitle ? 6 : 0) +
        keywordScore * 8 +
        priceScore;

      return {
        product,
        score,
      };
    })
    .sort((a, b) => b.score - a.score || a.product.sourceIndex - b.product.sourceIndex)
    .slice(0, limit)
    .map(({ product }) => {
      const { sourceIndex, ...relatedProduct } = product;

      return relatedProduct;
    });
}
