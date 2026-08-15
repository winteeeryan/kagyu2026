const externalHrefPattern = /^https?:\/\//i;
const downloadHrefPattern = /\.(?:docx?|xlsx?|xls|zip)(?:[?#].*)?$/i;

export function isExternalHref(href: string) {
  return externalHrefPattern.test(href);
}

export function getLinkBehavior(href: string) {
  if (downloadHrefPattern.test(href)) {
    return { download: true as const };
  }

  if (isExternalHref(href)) {
    return {
      rel: "noopener noreferrer" as const,
      target: "_blank" as const,
    };
  }

  return {};
}
