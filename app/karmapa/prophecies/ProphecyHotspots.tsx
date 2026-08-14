"use client";

import { FocusEvent, MouseEvent, useRef, useState } from "react";
import styles from "./ProphecyHotspots.module.css";

type RectHotspot = {
  content: string;
  height: number;
  id: string;
  kind: "rect";
  label: string;
  width: number;
  x: number;
  y: number;
};

type CircleHotspot = {
  content: string;
  cx: number;
  cy: number;
  id: string;
  kind: "circle";
  label: string;
  r: number;
};

type Hotspot = RectHotspot | CircleHotspot;

const karmapaNumberPositions = [
  [43, 148.5],
  [69.5, 146],
  [105.5, 146],
  [141.5, 143],
  [181, 143],
  [218.2, 142],
  [259, 142],
  [400, 142],
  [436, 146],
  [470, 148],
  [506, 149],
  [536, 153],
  [571, 157],
  [610, 161],
];

const karmapaNumberLabels = [7, 6, 5, 4, 3, 2, 1, 8, 9, 10, 11, 12, 13, 14];

const karmapaNumberTitles: Record<number, string> = {
  1: "第一世",
  2: "第二世",
  3: "第三世",
  4: "第四世",
  5: "第五世",
  6: "第六世",
  7: "第七世",
  8: "第八世",
  9: "第九世",
  10: "第十世",
  11: "第十一世",
  12: "第十二世",
  13: "第十三世",
  14: "第十四世",
};

const karmapaNumberContent: Record<number, string> = {
  1: "第一世噶瑪巴杜松虔巴 /遍知三世",
  2: "第二世噶瑪巴噶瑪巴西 /戒律師",
  3: "第三世噶瑪巴讓炯多傑 /自然金剛",
  4: "第四世噶瑪巴柔培多傑 /遊戲金剛",
  5: "第五世噶瑪巴德新謝巴 /如來",
  6: "第六世噶瑪巴通瓦敦滇 /了義",
  7: "第七世噶瑪巴卻扎嘉措/法稱海",
  8: "第八世噶瑪巴米覺多傑 /不動金剛",
  9: "第九世噶瑪巴汪丘多傑/自在金剛",
  10: "第十世噶瑪巴卻英多傑/法界金剛",
  11: "第十一世噶瑪巴依希多傑/世智金剛",
  12: "第十二世噶瑪巴蔣丘多傑 /菩提金剛",
  13: "第十三世噶瑪巴督杜多傑/伏魔金剛",
  14: "第十四世噶瑪巴帖丘多傑 /妙乘金剛",
};

const hotspots: Hotspot[] = [
  {
    content: "前十四世噶瑪巴",
    height: 72,
    id: "area-b",
    kind: "rect",
    label: "B｜前十四世噶瑪巴",
    width: 620,
    x: 18,
    y: 22,
  },
  ...karmapaNumberPositions.map(([cx, cy], index) => ({
    content: karmapaNumberContent[karmapaNumberLabels[index]],
    cx,
    cy,
    id: `karmapa-${karmapaNumberLabels[index]}`,
    kind: "circle" as const,
    label: `${karmapaNumberLabels[index]}｜${karmapaNumberTitles[karmapaNumberLabels[index]]}噶瑪巴`,
    r: 16,
  })),
  {
    content: "蓮花生大師",
    height: 330,
    id: "area-a",
    kind: "rect",
    label: "A｜蓮花生大師",
    width: 280,
    x: 235,
    y: 210,
  },
  {
    content: "第十五世噶瑪巴卡恰多傑/遍虛空金剛",
    height: 410,
    id: "area-c",
    kind: "rect",
    label: "C｜第十五世噶瑪巴",
    width: 112,
    x: 515,
    y: 220,
  },
  {
    content: "第十六世噶瑪巴讓炯立佩多傑/自然全知金剛",
    height: 325,
    id: "area-d",
    kind: "rect",
    label: "D｜第十六世噶瑪巴",
    width: 205,
    x: 29,
    y: 210,
  },
  {
    content: "第十七世噶瑪巴烏金聽列多傑 /烏金事業金剛",
    height: 165,
    id: "area-e",
    kind: "rect",
    label: "E｜第十七世噶瑪巴",
    width: 205,
    x: 29,
    y: 540,
  },
  {
    content: "第十八世轉世與弟子們在營帳中",
    height: 175,
    id: "area-f",
    kind: "rect",
    label: "F｜第十八世噶瑪巴",
    width: 260,
    x: 235,
    y: 540,
  },
  {
    content: "第十九世轉世在海中的船上",
    height: 110,
    id: "area-g",
    kind: "rect",
    label: "G｜第十九世噶瑪巴",
    width: 170,
    x: 455,
    y: 635,
  },
  {
    content: "第二十世坐在茂盛的樹蔭下",
    height: 193,
    id: "area-h",
    kind: "rect",
    label: "H｜第二十世噶瑪巴",
    width: 118,
    x: 270,
    y: 740,
  },
  {
    content: "第二十一世轉世坐在僧侶所抬的轎子上",
    height: 195,
    id: "area-i",
    kind: "rect",
    label: "I｜第二十一世噶瑪巴",
    width: 250,
    x: 382,
    y: 738,
  },
  {
    content: "小乘的戒律",
    height: 225,
    id: "area-j",
    kind: "rect",
    label: "J｜小乘律儀",
    width: 240,
    x: 24,
    y: 710,
  },
];

function getTooltipPosition(
  clientX: number,
  clientY: number,
  tooltip: HTMLDivElement | null,
) {
  const tooltipRect = tooltip?.getBoundingClientRect();
  const width = tooltipRect?.width ?? 260;
  const height = tooltipRect?.height ?? 96;
  const offset = 18;
  const viewportPadding = 14;

  let x = clientX + offset;
  let y = clientY + offset;

  if (x + width + viewportPadding > window.innerWidth) {
    x = clientX - width - offset;
  }

  if (y + height + viewportPadding > window.innerHeight) {
    y = clientY - height - offset;
  }

  return {
    x: Math.max(viewportPadding, x),
    y: Math.max(viewportPadding, y),
  };
}

export function ProphecyHotspots() {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  function moveTooltip(event: MouseEvent) {
    setTooltipPosition(getTooltipPosition(event.clientX, event.clientY, tooltipRef.current));
  }

  function focusTooltip(event: FocusEvent<SVGGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition(
      getTooltipPosition(rect.left + rect.width / 2, rect.top + rect.height / 2, tooltipRef.current),
    );
  }

  return (
    <section className={styles.section} aria-label="噶瑪巴預言圖互動導覽">
      <div className={styles.figure}>
        <img
          alt="噶瑪巴預言圖"
          className={styles.image}
          src="/karmapa/karmapaprophecies.jpg"
        />

        <svg
          aria-label="噶瑪巴預言圖熱點"
          className={styles.overlay}
          preserveAspectRatio="none"
          role="img"
          viewBox="0 0 656 960"
        >
          {hotspots.map((hotspot) => (
            <g
              aria-label={hotspot.label}
              className={styles.hotspot}
              key={hotspot.id}
              onBlur={() => setActiveHotspot(null)}
              onFocus={(event) => {
                setActiveHotspot(hotspot);
                focusTooltip(event);
              }}
              onMouseEnter={(event) => {
                setActiveHotspot(hotspot);
                moveTooltip(event);
              }}
              onMouseLeave={() => setActiveHotspot(null)}
              onMouseMove={moveTooltip}
              role="button"
              tabIndex={0}
            >
              {hotspot.kind === "rect" ? (
                <rect
                  height={hotspot.height}
                  rx="8"
                  width={hotspot.width}
                  x={hotspot.x}
                  y={hotspot.y}
                />
              ) : (
                <circle cx={hotspot.cx} cy={hotspot.cy} r={hotspot.r} />
              )}
            </g>
          ))}
        </svg>
      </div>
      <p className={`imageCaption ${styles.hint}`}>
        （提示：將滑鼠移至圖中佛像數字或字母，自動顯示該區域的詳細介紹。）
      </p>

      <div
        className={`${styles.tooltip}${activeHotspot ? ` ${styles.visible}` : ""}`}
        ref={tooltipRef}
        role="status"
        style={{
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
        }}
      >
        {activeHotspot ? (
          <>
            <strong>{activeHotspot.label}</strong>
            <span>{activeHotspot.content}</span>
          </>
        ) : null}
      </div>
    </section>
  );
}
