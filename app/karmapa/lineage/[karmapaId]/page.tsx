import { notFound } from "next/navigation";
import DusumKhyenpaPage, { metadata as dusumKhyenpaMetadata } from "../dusum-khyenpa/page";
import KarmaPakshiPage, { metadata as karmaPakshiMetadata } from "../karma-pakshi/page";
import RangjungDorjePage, { metadata as rangjungDorjeMetadata } from "../rangjung-dorje/page";
import RolpeDorjePage, { metadata as rolpeDorjeMetadata } from "../rolpe-dorje/page";
import DeshinShekpaPage, { metadata as deshinShekpaMetadata } from "../deshin-shekpa/page";
import ThongwaDondenPage, { metadata as thongwaDondenMetadata } from "../thongwa-donden/page";
import ChodrakGyatsoPage, { metadata as chodrakGyatsoMetadata } from "../chodrak-gyatso/page";
import MikyoDorjePage, { metadata as mikyoDorjeMetadata } from "../mikyo-dorje/page";
import WangchukDorjePage, { metadata as wangchukDorjeMetadata } from "../wangchuk-dorje/page";
import ChoyingDorjePage, { metadata as choyingDorjeMetadata } from "../choying-dorje/page";
import YesheDorjePage, { metadata as yesheDorjeMetadata } from "../yeshe-dorje/page";
import ChangchubDorjePage, { metadata as changchubDorjeMetadata } from "../changchub-dorje/page";
import DudulDorjePage, { metadata as dudulDorjeMetadata } from "../dudul-dorje/page";
import ThekchokDorjePage, { metadata as thekchokDorjeMetadata } from "../thekchok-dorje/page";
import KhakhyabDorjePage, { metadata as khakhyabDorjeMetadata } from "../khakhyab-dorje/page";
import RangjungRigpeDorjePage, { metadata as rangjungRigpeDorjeMetadata } from "../rangjung-rigpe-dorje/page";
import OgyenTrinleyDorjePage, { metadata as ogyenTrinleyDorjeMetadata } from "../ogyen-trinley-dorje/page";

const karmapaPages = {
  "karmapa-1": { metadata: dusumKhyenpaMetadata, Page: DusumKhyenpaPage },
  "karmapa-2": { metadata: karmaPakshiMetadata, Page: KarmaPakshiPage },
  "karmapa-3": { metadata: rangjungDorjeMetadata, Page: RangjungDorjePage },
  "karmapa-4": { metadata: rolpeDorjeMetadata, Page: RolpeDorjePage },
  "karmapa-5": { metadata: deshinShekpaMetadata, Page: DeshinShekpaPage },
  "karmapa-6": { metadata: thongwaDondenMetadata, Page: ThongwaDondenPage },
  "karmapa-7": { metadata: chodrakGyatsoMetadata, Page: ChodrakGyatsoPage },
  "karmapa-8": { metadata: mikyoDorjeMetadata, Page: MikyoDorjePage },
  "karmapa-9": { metadata: wangchukDorjeMetadata, Page: WangchukDorjePage },
  "karmapa-10": { metadata: choyingDorjeMetadata, Page: ChoyingDorjePage },
  "karmapa-11": { metadata: yesheDorjeMetadata, Page: YesheDorjePage },
  "karmapa-12": { metadata: changchubDorjeMetadata, Page: ChangchubDorjePage },
  "karmapa-13": { metadata: dudulDorjeMetadata, Page: DudulDorjePage },
  "karmapa-14": { metadata: thekchokDorjeMetadata, Page: ThekchokDorjePage },
  "karmapa-15": { metadata: khakhyabDorjeMetadata, Page: KhakhyabDorjePage },
  "karmapa-16": { metadata: rangjungRigpeDorjeMetadata, Page: RangjungRigpeDorjePage },
  "karmapa-17": { metadata: ogyenTrinleyDorjeMetadata, Page: OgyenTrinleyDorjePage },
};

type KarmapaId = keyof typeof karmapaPages;

type PageProps = {
  params: Promise<{
    karmapaId: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(karmapaPages).map((karmapaId) => ({ karmapaId }));
}

export async function generateMetadata({ params }: PageProps) {
  const { karmapaId } = await params;
  return karmapaPages[karmapaId as KarmapaId]?.metadata ?? {};
}

export default async function KarmapaAliasPage({ params }: PageProps) {
  const { karmapaId } = await params;
  const page = karmapaPages[karmapaId as KarmapaId];

  if (!page) {
    notFound();
  }

  return <page.Page />;
}
