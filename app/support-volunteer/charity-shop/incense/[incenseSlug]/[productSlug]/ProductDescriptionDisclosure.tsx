"use client";

import { useState } from "react";
import pageStyles from "../../../page.module.css";

type ProductDescriptionDisclosureProps = {
  description: string;
  detailLabel?: string;
};

export function ProductDescriptionDisclosure({
  description,
  detailLabel = "香品詳情",
}: ProductDescriptionDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        className={pageStyles.productDetailToggle}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span>{detailLabel}</span>
        <b aria-hidden="true">+</b>
      </button>
    );
  }

  return (
    <div className={pageStyles.productDetailExpanded}>
      <div className={pageStyles.productMoreDescription}>{description}</div>
      <button
        className={pageStyles.productDetailToggle}
        onClick={() => setIsOpen(false)}
        type="button"
      >
        <span>收起詳情</span>
        <b aria-hidden="true">-</b>
      </button>
    </div>
  );
}
