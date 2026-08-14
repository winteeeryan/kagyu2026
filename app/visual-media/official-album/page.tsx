import type { Metadata } from "next";
import { EndMarker } from "@/components/ui/EndMarker";
import { SectionOpener } from "@/components/ui/SectionOpener";
import { WatermarkHeading } from "@/components/ui/WatermarkHeading";
import { OfficialAlbumGrid } from "./OfficialAlbumGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "官方相冊 | Kagyu",
  description: "噶瑪噶舉基金會官方相冊。",
};

const mealAlbumImageIds = [
  "20211118001",
  "20211118002",
  "20211118003",
  "20211118004",
  "20211118005",
  "20211118006",
  "20211118007",
  "20211118008",
  "20211118009",
  "20211118010",
  "20211118011",
  "20211118012",
];

const mealAlbumFolder = "/officialalbum/20211118高雄供餐花絮分享";

const mealAlbumPhotos = mealAlbumImageIds.map((imageId) => ({
  alt: `供餐花絮分享 ${imageId}`,
  id: imageId,
  src: `${mealAlbumFolder}/${imageId}.jpg`,
}));

const ksitigarbhaAlbumImageIds = [
  "20260128001",
  "20260128002",
  "20260128003",
  "20260128004",
  "20260128005",
  "20260128006",
  "20260128007",
  "20260128008",
  "20260128009",
  "20260128010",
  "20260128011",
  "20260128012",
  "20260128013",
  "20260128014",
  "20260128015",
  "20260128016",
  "20260128017",
  "20260128018",
];

const ksitigarbhaAlbumFolder = "/officialalbum/20260128地藏王菩薩開光儀式";

const ksitigarbhaAlbumPhotos = ksitigarbhaAlbumImageIds.map((imageId) => ({
  alt: `全台灣最高的地藏王菩薩 開光儀式 ${imageId}`,
  id: imageId,
  src: `${ksitigarbhaAlbumFolder}/${imageId}.jpg`,
}));

const landDonationAlbumImageIds = [
  "20250311001",
  "20250311002",
  "20250311003",
  "20250311004",
  "20250311005",
  "20250311006",
  "20250311007",
  "20250311008",
  "20250311009",
  "20250311010",
  "20250311011",
  "20250311012",
  "20250311013",
];

const landDonationAlbumFolder = "/officialalbum/20250311噶瑪噶舉基金會贈地";

const landDonationAlbumPhotos = landDonationAlbumImageIds.map((imageId) => ({
  alt: `噶瑪噶舉基金會贈地 光復公所共推環保值存 ${imageId}`,
  id: imageId,
  src: `${landDonationAlbumFolder}/${imageId}.jpg`,
}));

const memorialRiteAlbumImageIds = [
  "20230826001",
  "20230826002",
  "20230826003",
  "20230826004",
  "20230826005",
  "20230826006",
  "20230826007",
  "20230826008",
  "20230826009",
  "20230826010",
  "20230826011",
  "20230826012",
  "20230826013",
  "20230826014",
];

const memorialRiteAlbumFolder = "/officialalbum/20230826農曆七月孝親月蓮花菩提苑舉辦超薦法會";

const memorialRiteAlbumPhotos = memorialRiteAlbumImageIds.map((imageId) => ({
  alt: `農曆七月孝親月蓮花菩提苑舉辦超薦法會 ${imageId}`,
  id: imageId,
  src: `${memorialRiteAlbumFolder}/${imageId}.jpg`,
}));

const wealthDeityAlbumImageIds = [
  "20230126001",
  "20230126002",
  "20230126003",
  "20230126004",
  "20230126005",
  "20230126006",
  "20230126007",
  "20230126008",
  "20230126009",
  "20230126010",
  "20230126011",
  "20230126012",
  "20230126013",
  "20230126014",
  "20230126015",
  "20230126016",
];

const wealthDeityAlbumFolder = "/officialalbum/20230126高雄噶舉中心迎財神花絮";

const wealthDeityAlbumPhotos = wealthDeityAlbumImageIds.map((imageId) => ({
  alt: `高雄噶舉中心迎財神花絮 ${imageId}`,
  id: imageId,
  src: `${wealthDeityAlbumFolder}/${imageId}.jpg`,
}));

const yearEndPurificationAlbumImageIds = [
  "20230114001",
  "20230114002",
  "20230114003",
  "20230114004",
  "20230114005",
  "20230114006",
  "20230114007",
  "20230114008",
  "20230114009",
];

const yearEndPurificationAlbumFolder = "/officialalbum/20230114台灣噶舉佛學院歲末除障法會暨供僧活動";

const yearEndPurificationAlbumPhotos = yearEndPurificationAlbumImageIds.map((imageId) => ({
  alt: `2023台灣噶舉佛學院歲末除障法會暨供僧活動 ${imageId}`,
  id: imageId,
  src: `${yearEndPurificationAlbumFolder}/${imageId}.jpg`,
}));

const amitabaRiteAlbumImageIds = [
  "20200902001",
  "20200902002",
  "20200902003",
  "20200902004",
  "20200902005",
  "20200902006",
  "20200902007",
  "20200902008",
  "20200902009",
  "20200902010",
  "20200902011",
  "20200902012",
  "20200902013",
  "20200902014",
  "20200902015",
  "20200902016",
  "20200902017",
  "20200902018",
  "20200902019",
  "20200902020",
  "20200902021",
  "20200902022",
  "20200902023",
  "20200902024",
  "20200902025",
  "20200902026",
  "20200902027",
  "20200902028",
  "20200902029",
];

const amitabaRiteAlbumFolder = "/officialalbum/20200902七月孝親月舉辦阿彌陀佛超薦法會";

const amitabaRiteAlbumPhotos = amitabaRiteAlbumImageIds.map((imageId) => ({
  alt: `七月孝親月 舉辦阿彌陀佛超薦法會 ${imageId}`,
  id: imageId,
  src: `${amitabaRiteAlbumFolder}/${imageId}.jpg`,
}));

const windHorseRiteAlbumImageIds = [
  "20200530001",
  "20200530002",
  "20200530003",
  "20200530004",
  "20200530005",
  "20200530006",
  "20200530007",
  "20200530008",
];

const windHorseRiteAlbumFolder = "/officialalbum/20200530 薩嘎月吉祥日 法會煙供加持修法 代理懸掛風馬旗";

const windHorseRiteAlbumPhotos = windHorseRiteAlbumImageIds.map((imageId) => ({
  alt: `薩嘎月吉祥日 法會煙供加持修法 代理懸掛風馬旗 ${imageId}`,
  id: imageId,
  src: `${windHorseRiteAlbumFolder}/${imageId}.jpg`,
}));

const springOfferingAlbumImageIds = [
  "20200203001",
  "20200203002",
  "20200203003",
  "20200203004",
  "20200203005",
  "20200203006",
  "20200203007",
];

const springOfferingAlbumFolder = "/officialalbum/20200203新春送暖 供佛齋天的供品捐贈予花蓮弱勢團體";

const springOfferingAlbumPhotos = springOfferingAlbumImageIds.map((imageId) => ({
  alt: `新春送暖 供佛齋天的供品捐贈予花蓮弱勢團體 ${imageId}`,
  id: imageId,
  src: `${springOfferingAlbumFolder}/${imageId}.jpg`,
}));

const teaMeditationAlbumImageIds = [
  "20191019001",
  "20191019002",
  "20191019003",
  "20191019004",
  "20191019005",
  "20191019006",
  "20191019007",
  "20191019008",
  "20191019009",
  "20191019010",
];

const teaMeditationAlbumFolder = "/officialalbum/20191019茶禪花絮分享";

const teaMeditationAlbumPhotos = teaMeditationAlbumImageIds.map((imageId) => ({
  alt: `2019茶禪花絮分享 ${imageId}`,
  id: imageId,
  src: `${teaMeditationAlbumFolder}/${imageId}.jpg`,
}));

const guruRinpocheEmpowermentAlbumImageIds = [
  "20191013001",
  "20191013002",
  "20191013003",
  "20191013004",
  "20191013005",
  "20191013006",
  "20191013007",
  "20191013008",
  "20191013009",
  "20191013010",
  "20191013011",
  "20191013012",
  "20191013013",
  "20191013014",
  "20191013015",
  "20191013016",
  "20191013017",
  "20191013018",
  "20191013019",
];

const guruRinpocheEmpowermentAlbumFolder = "/officialalbum/20191013蓮師三寶總攝灌頂法會花絮";

const guruRinpocheEmpowermentAlbumPhotos = guruRinpocheEmpowermentAlbumImageIds.map((imageId) => ({
  alt: `蓮師三寶總攝灌頂法會花絮 ${imageId}`,
  id: imageId,
  src: `${guruRinpocheEmpowermentAlbumFolder}/${imageId}.jpg`,
}));

const redChenrezigMahakalaAlbumImageIds = [
  "20190926001",
  "20190926002",
  "20190926003",
  "20190926004",
  "20190926005",
  "20190926006",
  "20190926007",
  "20190926008",
  "20190926009",
  "20190926010",
  "20190926011",
  "20190926012",
  "20190926013",
  "20190926014",
  "20190926015",
  "20190926016",
  "20190926017",
  "20190926018",
  "20190926019",
  "20190926020",
  "20190926021",
  "20190926022",
  "20190926023",
  "20190926024",
  "20190926025",
];

const redChenrezigMahakalaAlbumFolder = "/officialalbum/20190926紅觀音灌頂&二臂瑪哈嘎拉修法";

const redChenrezigMahakalaAlbumPhotos = redChenrezigMahakalaAlbumImageIds.map((imageId) => ({
  alt: `紅觀音灌頂&二臂瑪哈嘎拉修法 ${imageId}`,
  id: imageId,
  src: `${redChenrezigMahakalaAlbumFolder}/${imageId}.jpg`,
}));

const midAutumnCareAlbumImageIds = [
  "20190831001",
  "20190831002",
  "20190831003",
  "20190831004",
  "20190831005",
  "20190831006",
  "20190831007",
  "20190831008",
  "20190831009",
  "20190831010",
  "20190831011",
  "20190831012",
  "20190831013",
  "20190831014",
  "20190831015",
  "20190831016",
  "20190831017",
];

const midAutumnCareAlbumFolder = "/officialalbum/20190831中秋佳節前夕愛心送暖";

const midAutumnCareAlbumPhotos = midAutumnCareAlbumImageIds.map((imageId) => ({
  alt: `花蓮中心與吉安鄉公所 中秋佳節前夕愛心送暖 ${imageId}`,
  id: imageId,
  src: `${midAutumnCareAlbumFolder}/${imageId}.jpg`,
}));

const hualienAmitabhaRiteAlbumImageIds = [
  "20190810001",
  "20190810002",
  "20190810003",
  "20190810004",
  "20190810005",
  "20190810006",
  "20190810007",
  "20190810008",
  "20190810009",
  "20190810010",
  "20190810011",
  "20190810012",
  "20190810013",
  "20190810014",
  "20190810015",
  "20190810016",
  "20190810017",
  "20190810018",
  "20190810019",
  "20190810020",
  "20190810021",
  "20190810022",
  "20190810023",
  "20190810024",
  "20190810025",
  "20190810026",
  "20190810027",
  "20190810028",
  "20190810029",
  "20190810030",
  "20190810031",
  "20190810032",
  "20190810033",
  "20190810034",
  "20190810035",
  "20190810036",
];

const hualienAmitabhaRiteAlbumFolder = "/officialalbum/20190810阿彌陀佛超薦法會";

const hualienAmitabhaRiteAlbumPhotos = hualienAmitabhaRiteAlbumImageIds.map((imageId) => ({
  alt: `2019阿彌陀佛超薦法會 ${imageId}`,
  id: imageId,
  src: `${hualienAmitabhaRiteAlbumFolder}/${imageId}.jpg`,
}));

const cundiEmpowermentAlbumImageIds = [
  "20190420001",
  "20190420002",
  "20190420003",
  "20190420004",
  "20190420005",
  "20190420006",
  "20190420007",
  "20190420008",
  "20190420009",
  "20190420010",
  "20190420011",
  "20190420012",
  "20190420013",
];

const cundiEmpowermentAlbumFolder = "/officialalbum/20190420準提佛母灌頂大法會";

const cundiEmpowermentAlbumPhotos = cundiEmpowermentAlbumImageIds.map((imageId) => ({
  alt: `準提佛母灌頂大法會 ${imageId}`,
  id: imageId,
  src: `${cundiEmpowermentAlbumFolder}/${imageId}.jpg`,
}));

const studyPracticeRainTwoAlbumImageIds = Array.from(
  { length: 128 },
  (_, index) => `20181230${String(index + 1).padStart(3, "0")}`,
);

const studyPracticeRainTwoAlbumFolder = "/officialalbum/20181230聞思修 雨露均霑";

const studyPracticeRainTwoAlbumPhotos = studyPracticeRainTwoAlbumImageIds.map((imageId) => ({
  alt: `聞思修 雨露均霑 （二） ${imageId}`,
  id: imageId,
  src: `${studyPracticeRainTwoAlbumFolder}/${imageId}.jpg`,
}));

const jianCareAlbumImageIds = Array.from(
  { length: 11 },
  (_, index) => `20180814${String(index + 1).padStart(3, "0")}`,
);

const jianCareAlbumFolder = "/officialalbum/20180814關懷吉安鄉弱勢家庭 提供物資幫助";

const jianCareAlbumPhotos = jianCareAlbumImageIds.map((imageId) => ({
  alt: `關懷吉安鄉弱勢家庭 提供物資幫助 ${imageId}`,
  id: imageId,
  src: `${jianCareAlbumFolder}/${imageId}.jpg`,
}));

const dragonReleaseAlbumImageIds = Array.from(
  { length: 18 },
  (_, index) => `20180513${String(index + 1).padStart(3, "0")}`,
);

const dragonReleaseAlbumFolder = "/officialalbum/20180513龍王放生花絮";

const dragonReleaseAlbumPhotos = dragonReleaseAlbumImageIds.map((imageId) => ({
  alt: `2018龍王放生花絮 ${imageId}`,
  id: imageId,
  src: `${dragonReleaseAlbumFolder}/${imageId}.jpg`,
}));

const greatPrayerAlbumImageIds = Array.from(
  { length: 43 },
  (_, index) => `20180301${String(index + 1).padStart(3, "0")}`,
);

const greatPrayerAlbumFolder = "/officialalbum/20180301第35屆大祈願法會花絮";

const greatPrayerAlbumPhotos = greatPrayerAlbumImageIds.map((imageId) => ({
  alt: `第35屆大祈願法會花絮 ${imageId}`,
  id: imageId,
  src: `${greatPrayerAlbumFolder}/${imageId}.jpg`,
}));

const greatPrayerCeremonyAlbumImageIds = Array.from(
  { length: 55 },
  (_, index) => `20180301A${String(index + 1).padStart(3, "0")}`,
);

const greatPrayerCeremonyAlbumFolder = "/officialalbum/20180301第35屆大祈願法會";

const greatPrayerCeremonyAlbumPhotos = greatPrayerCeremonyAlbumImageIds.map((imageId) => ({
  alt: `2018第35屆大祈願法會 ${imageId}`,
  id: imageId,
  src: `${greatPrayerCeremonyAlbumFolder}/${imageId}.jpg`,
}));

const hualienBlanketAlbumImageIds = Array.from(
  { length: 37 },
  (_, index) => `20180218A${String(index + 1).padStart(3, "0")}`,
);

const hualienBlanketAlbumFolder = "/officialalbum/20180218新春送暖 學院至花蓮貧戶發放毛毯";

const hualienBlanketAlbumPhotos = hualienBlanketAlbumImageIds.map((imageId) => ({
  alt: `2018新春送暖 學院至花蓮貧戶發放毛毯 ${imageId}`,
  id: imageId,
  src: `${hualienBlanketAlbumFolder}/${imageId}.jpg`,
}));

const lampBlessingAlbumImageIds = Array.from(
  { length: 29 },
  (_, index) => `20180218${String(index + 1).padStart(3, "0")}`,
);

const lampBlessingAlbumFolder = "/officialalbum/20180218萬燈祈福暨開光花";

const lampBlessingAlbumPhotos = lampBlessingAlbumImageIds.map((imageId) => ({
  alt: `2018萬燈祈福暨開光花 ${imageId}`,
  id: imageId,
  src: `${lampBlessingAlbumFolder}/${imageId}.jpg`,
}));

const mindNatureMeditationAlbumImageIds = Array.from(
  { length: 9 },
  (_, index) => `20171101${String(index + 1).padStart(3, "0")}`,
);

const mindNatureMeditationAlbumFolder = "/officialalbum/20171101 明心見性課程禪修次第";

const mindNatureMeditationAlbumPhotos = mindNatureMeditationAlbumImageIds.map((imageId) => ({
  alt: `10/23&24日 明心見性課程 10/26 禪修次第 ${imageId}`,
  id: imageId,
  src: `${mindNatureMeditationAlbumFolder}/${imageId}.jpg`,
}));

const compassionCareAlbumImageIds = Array.from(
  { length: 9 },
  (_, index) => `20171008${String(index + 1).padStart(3, "0")}`,
);

const compassionCareAlbumFolder = "/officialalbum/20171008 慈悲喜捨 愛心送暖";

const compassionCareAlbumPhotos = compassionCareAlbumImageIds.map((imageId) => ({
  alt: `2017慈悲喜捨 愛心送暖 ${imageId}`,
  id: imageId,
  src: `${compassionCareAlbumFolder}/${imageId}.jpg`,
}));

const studyPracticeRainOneAlbumImageIds = Array.from(
  { length: 218 },
  (_, index) => `20170922${String(index + 1).padStart(3, "0")}`,
);

const studyPracticeRainOneAlbumFolder = "/officialalbum/20170922聞思修 雨露均霑";

const studyPracticeRainOneAlbumPhotos = studyPracticeRainOneAlbumImageIds.map((imageId) => ({
  alt: `聞思修 雨露均霑 （一） ${imageId}`,
  id: imageId,
  src: `${studyPracticeRainOneAlbumFolder}/${imageId}.jpg`,
}));

const amitabhaFeastAlbumImageIds = Array.from(
  { length: 11 },
  (_, index) => `20170715${String(index + 1).padStart(3, "0")}`,
);

const amitabhaFeastAlbumFolder = "/officialalbum/20170715 阿彌陀佛超薦暨薈供大法會";

const amitabhaFeastAlbumPhotos = amitabhaFeastAlbumImageIds.map((imageId) => ({
  alt: `阿彌陀佛超薦暨薈供大法會 ${imageId}`,
  id: imageId,
  src: `${amitabhaFeastAlbumFolder}/${imageId}.jpg`,
}));

const karmapaBirthdayMinshengAlbumImageIds = Array.from(
  { length: 18 },
  (_, index) => `20170624A${String(index + 1).padStart(3, "0")}`,
);

const karmapaBirthdayMinshengAlbumFolder =
  "/officialalbum/20170624 民生第十七世大寶法王祝壽法會獻供 ";

const karmapaBirthdayMinshengAlbumPhotos = karmapaBirthdayMinshengAlbumImageIds.map((imageId) => ({
  alt: `尊貴的 第十七世大寶法王祝壽法會獻供 民生中心 ${imageId}`,
  id: imageId,
  src: `${karmapaBirthdayMinshengAlbumFolder}/${imageId}.jpg`,
}));

const karmapaBirthdayHualienAlbumImageIds = Array.from(
  { length: 34 },
  (_, index) => `20170624B${String(index + 1).padStart(3, "0")}`,
);

const karmapaBirthdayHualienAlbumFolder =
  "/officialalbum/20170624 花蓮第十七世大寶法王祝壽法會獻供";

const karmapaBirthdayHualienAlbumPhotos = karmapaBirthdayHualienAlbumImageIds.map((imageId) => ({
  alt: `尊貴的 第十七世大寶法王祝壽法會獻供 花蓮中心 ${imageId}`,
  id: imageId,
  src: `${karmapaBirthdayHualienAlbumFolder}/${imageId}.jpg`,
}));

const karmapaBirthdayKaohsiungAlbumImageIds = Array.from(
  { length: 22 },
  (_, index) => `20170624C${String(index + 1).padStart(3, "0")}`,
);

const karmapaBirthdayKaohsiungAlbumFolder =
  "/officialalbum/20170624 高雄第十七世大寶法王祝壽法會獻供";

const karmapaBirthdayKaohsiungAlbumPhotos = karmapaBirthdayKaohsiungAlbumImageIds.map((imageId) => ({
  alt: `尊貴的 第十七世大寶法王祝壽法會獻供 高雄中心 ${imageId}`,
  id: imageId,
  src: `${karmapaBirthdayKaohsiungAlbumFolder}/${imageId}.jpg`,
}));

const auspiciousReleaseAlbumImageIds = Array.from(
  { length: 21 },
  (_, index) => `20170609${String(index + 1).padStart(3, "0")}`,
);

const auspiciousReleaseAlbumFolder = "/officialalbum/20170609 殊勝吉祥日";

const auspiciousReleaseAlbumPhotos = auspiciousReleaseAlbumImageIds.map((imageId) => ({
  alt: `殊勝吉祥日 凱筑堪布．蔣揚師父幫忙大家放生活動 ${imageId}`,
  id: imageId,
  src: `${auspiciousReleaseAlbumFolder}/${imageId}.jpg`,
}));

const rinzinGarchenTeachingAlbumImageIds = Array.from(
  { length: 30 },
  (_, index) => `20170319${String(index + 1).padStart(3, "0")}`,
);

const rinzinGarchenTeachingAlbumFolder =
  "/officialalbum/20170319 尊貴 仁增嘉春仁波切－四座上師相應法教授";

const rinzinGarchenTeachingAlbumPhotos = rinzinGarchenTeachingAlbumImageIds.map((imageId) => ({
  alt: `尊貴 仁增嘉春仁波切－四座上師相應法教授 ${imageId}`,
  id: imageId,
  src: `${rinzinGarchenTeachingAlbumFolder}/${imageId}.jpg`,
}));

const karmaLhabuEmptinessAlbumImageIds = Array.from(
  { length: 6 },
  (_, index) => `20161114${String(index + 1).padStart(3, "0")}`,
);

const karmaLhabuEmptinessAlbumFolder = "/officialalbum/20161114 尊貴 堪布噶瑪拉布 仁波切";

const karmaLhabuEmptinessAlbumPhotos = karmaLhabuEmptinessAlbumImageIds.map((imageId) => ({
  alt: `尊貴 堪布噶瑪拉布 仁波切－〖空性見．宗門實義淺釋〗暨『空性禪修』課程 ${imageId}`,
  id: imageId,
  src: `${karmaLhabuEmptinessAlbumFolder}/${imageId}.jpg`,
}));

const hualienOpeningAlbumImageIds = Array.from(
  { length: 17 },
  (_, index) => `20160924${String(index + 1).padStart(3, "0")}`,
);

const hualienOpeningAlbumFolder = "/officialalbum/20160924 台灣噶舉佛學院花蓮中心開光落成典禮";

const hualienOpeningAlbumPhotos = hualienOpeningAlbumImageIds.map((imageId) => ({
  alt: `台灣噶舉佛學院花蓮中心開光落成典禮 ${imageId}`,
  id: imageId,
  src: `${hualienOpeningAlbumFolder}/${imageId}.jpg`,
}));

const karmapaBirthday2016AlbumImageIds = Array.from(
  { length: 45 },
  (_, index) => `20160626${String(index + 1).padStart(3, "0")}`,
);

const karmapaBirthday2016AlbumFolder =
  "/officialalbum/20160626 尊勝 第十七世大寶法王噶瑪巴祝壽法會";

const karmapaBirthday2016AlbumPhotos = karmapaBirthday2016AlbumImageIds.map((imageId) => ({
  alt: `2016年 尊勝 第十七世大寶法王噶瑪巴祝壽法會 ${imageId}`,
  id: imageId,
  src: `${karmapaBirthday2016AlbumFolder}/${imageId}.jpg`,
}));

const karmaLhabuProfoundTeachingAlbumImageIds = Array.from(
  { length: 20 },
  (_, index) => `20151128${String(index + 1).padStart(3, "0")}`,
);

const karmaLhabuProfoundTeachingAlbumFolder =
  "/officialalbum/20151128 堪布噶瑪拉布 仁波切 甚深法教 成就修學";

const karmaLhabuProfoundTeachingAlbumPhotos = karmaLhabuProfoundTeachingAlbumImageIds.map((imageId) => ({
  alt: `尊貴 堪布噶瑪拉布 仁波切～甚深法教 成就修學～ ${imageId}`,
  id: imageId,
  src: `${karmaLhabuProfoundTeachingAlbumFolder}/${imageId}.jpg`,
}));

type AlbumEntry = {
  coverImage?: string;
  date: string;
  gallery?: typeof mealAlbumPhotos;
  label: string;
  title: string;
};

const albumEntries: AlbumEntry[] = [
  {
    date: "2018.02.18",
    gallery: hualienBlanketAlbumPhotos,
    label: "花蓮中心",
    title: "2018新春送暖 學院至花蓮貧戶發放毛毯",
  },
  {
    date: "2018.02.18",
    gallery: lampBlessingAlbumPhotos,
    label: "花蓮中心",
    title: "2018萬燈祈福暨開光花",
  },
  {
    date: "2018.03.01",
    gallery: greatPrayerAlbumPhotos,
    label: "未標示",
    title: "第35屆大祈願法會花絮",
  },
  {
    date: "2018.12.30",
    gallery: studyPracticeRainTwoAlbumPhotos,
    label: "未標示",
    title: "聞思修 雨露均霑 （二）",
  },
  {
    date: "2019.04.20",
    gallery: cundiEmpowermentAlbumPhotos,
    label: "高雄中心",
    title: "準提佛母灌頂大法會",
  },
  {
    date: "2019.08.10",
    gallery: hualienAmitabhaRiteAlbumPhotos,
    label: "花蓮中心",
    title: "2019阿彌陀佛超薦法會",
  },
  {
    date: "2019.08.31",
    gallery: midAutumnCareAlbumPhotos,
    label: "花蓮中心",
    title: "花蓮中心與吉安鄉公所 中秋佳節前夕愛心送暖",
  },
  {
    date: "2019.09.26",
    gallery: redChenrezigMahakalaAlbumPhotos,
    label: "台北中心",
    title: "紅觀音灌頂&二臂瑪哈嘎拉修法",
  },
  {
    date: "2019.10.13",
    gallery: guruRinpocheEmpowermentAlbumPhotos,
    label: "民生中心",
    title: "蓮師三寶總攝灌頂法會花絮",
  },
  {
    coverImage: `${teaMeditationAlbumFolder}/20191019002.jpg`,
    date: "2019.10.19",
    gallery: teaMeditationAlbumPhotos,
    label: "高雄中心",
    title: "2019茶禪花絮分享",
  },
  {
    date: "2020.02.03",
    gallery: springOfferingAlbumPhotos,
    label: "花蓮中心",
    title: "新春送暖 供佛齋天的供品捐贈予花蓮弱勢團體",
  },
  {
    date: "2020.05.30",
    gallery: windHorseRiteAlbumPhotos,
    label: "台南",
    title: "薩嘎月吉祥日 法會煙供加持修法 代理懸掛風馬旗",
  },
  {
    date: "2020.09.02",
    gallery: amitabaRiteAlbumPhotos,
    label: "花蓮中心",
    title: "七月孝親月 舉辦阿彌陀佛超薦法會",
  },
  {
    coverImage: `${mealAlbumFolder}/20211118004.jpg`,
    date: "2021.11.18",
    gallery: mealAlbumPhotos,
    label: "高雄中心",
    title: "供餐花絮分享",
  },
  {
    date: "2023.01.14",
    gallery: yearEndPurificationAlbumPhotos,
    label: "高雄中心",
    title: "2023台灣噶舉佛學院歲末除障法會暨供僧活動",
  },
  {
    coverImage: `${wealthDeityAlbumFolder}/20230126010.jpg`,
    date: "2023.01.26",
    gallery: wealthDeityAlbumPhotos,
    label: "高雄中心",
    title: "高雄噶舉中心迎財神花絮",
  },
  {
    date: "2023.08.26",
    gallery: memorialRiteAlbumPhotos,
    label: "花蓮閉關禪苑",
    title: "農曆七月孝親月蓮花菩提苑舉辦超薦法會",
  },
  {
    date: "2025.03.11",
    gallery: landDonationAlbumPhotos,
    label: "高雄中心",
    title: "噶瑪噶舉基金會贈地 光復公所共推環保值存",
  },
  {
    date: "2026.01.28",
    gallery: ksitigarbhaAlbumPhotos,
    label: "花蓮光復鄉佛祖街保安寺",
    title: "全台灣最高的地藏王菩薩 開光儀式",
  },
  {
    date: "2015.11.28",
    gallery: karmaLhabuProfoundTeachingAlbumPhotos,
    label: "高雄中心",
    title: "尊貴 堪布噶瑪拉布 仁波切～甚深法教 成就修學～",
  },
  {
    date: "2016.06.26",
    gallery: karmapaBirthday2016AlbumPhotos,
    label: "民生中心",
    title: "2016年 尊勝 第十七世大寶法王噶瑪巴祝壽法會",
  },
  {
    date: "2016.09.24",
    gallery: hualienOpeningAlbumPhotos,
    label: "花蓮中心",
    title: "台灣噶舉佛學院花蓮中心開光落成典禮",
  },
  {
    date: "2016.11.14",
    gallery: karmaLhabuEmptinessAlbumPhotos,
    label: "民生中心",
    title: "尊貴 堪布噶瑪拉布 仁波切－〖空性見．宗門實義淺釋〗暨『空性禪修』課程",
  },
  {
    date: "2017.03.19",
    gallery: rinzinGarchenTeachingAlbumPhotos,
    label: "民生中心",
    title: "尊貴 仁增嘉春仁波切－四座上師相應法教授",
  },
  {
    date: "2017.06.09",
    gallery: auspiciousReleaseAlbumPhotos,
    label: "基隆和平島",
    title: "殊勝吉祥日 凱筑堪布．蔣揚師父幫忙大家放生活動",
  },
  {
    date: "2017.06.24",
    gallery: karmapaBirthdayHualienAlbumPhotos,
    label: "花蓮中心",
    title: "尊貴的 第十七世大寶法王祝壽法會獻供",
  },
  {
    date: "2017.06.24",
    gallery: karmapaBirthdayKaohsiungAlbumPhotos,
    label: "高雄中心",
    title: "尊貴的 第十七世大寶法王祝壽法會獻供",
  },
  {
    date: "2017.06.24",
    gallery: karmapaBirthdayMinshengAlbumPhotos,
    label: "民生中心",
    title: "尊貴的 第十七世大寶法王祝壽法會獻供",
  },
  {
    date: "2017.07.15",
    gallery: amitabhaFeastAlbumPhotos,
    label: "高雄中心",
    title: "阿彌陀佛超薦暨薈供大法會",
  },
  {
    coverImage: `${studyPracticeRainOneAlbumFolder}/20170922036.jpg`,
    date: "2017.09.22",
    gallery: studyPracticeRainOneAlbumPhotos,
    label: "未標示",
    title: "聞思修 雨露均霑 （一）",
  },
  {
    coverImage: `${compassionCareAlbumFolder}/20171008008.jpg`,
    date: "2017.10.08",
    gallery: compassionCareAlbumPhotos,
    label: "花蓮中心",
    title: "2017慈悲喜捨 愛心送暖",
  },
  {
    date: "2017.11.01",
    gallery: mindNatureMeditationAlbumPhotos,
    label: "民生中心&高雄中心",
    title: "10/23&24日 明心見性課程 10/26 禪修次第",
  },
  {
    date: "2018.03.01",
    gallery: greatPrayerCeremonyAlbumPhotos,
    label: "未標示",
    title: "2018第35屆大祈願法會",
  },
  {
    coverImage: `${dragonReleaseAlbumFolder}/20180513002.jpg`,
    date: "2018.05.13",
    gallery: dragonReleaseAlbumPhotos,
    label: "未標示",
    title: "2018龍王放生花絮",
  },
  {
    date: "2018.08.14",
    gallery: jianCareAlbumPhotos,
    label: "花蓮中心",
    title: "關懷吉安鄉弱勢家庭 提供物資幫助",
  },
];

function getDateTime(date: string) {
  const [year, month, day] = date.split(".").map(Number);

  return new Date(year, month - 1, day).getTime();
}

const albumCards = [...albumEntries]
  .sort((first, second) => getDateTime(second.date) - getDateTime(first.date))
  .map((entry) => ({
    ...entry,
    image: entry.coverImage ?? entry.gallery?.[0]?.src,
  }));

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.section} aria-labelledby="official-album-title">
        <div className={styles.inner}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>Visual Media</p>
            <WatermarkHeading as="h2">官方相冊</WatermarkHeading>
            <h1 className={styles.hiddenTitle} id="official-album-title">
              官方相冊
            </h1>
            <SectionOpener />
          </header>

          <OfficialAlbumGrid cards={albumCards} />

          <div className={styles.endMarker}>
            <EndMarker />
          </div>
        </div>
      </section>
    </main>
  );
}
