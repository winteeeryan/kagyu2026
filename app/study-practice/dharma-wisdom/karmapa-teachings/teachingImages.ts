const teachingImageVersions: Partial<Record<string, string>> = {
  "117": "20260720-2",
  "118": "20260720-2",
  "252": "20260721-1",
};

export function getTeachingImageSrc(teachingNumber: string) {
  const version = teachingImageVersions[teachingNumber];
  const cacheVersion = version ? `?v=${version}` : "";

  return `/wisdom-original/wisdomoriginal${teachingNumber}.png${cacheVersion}`;
}

export function getTeachingThumbnailSrc(teachingNumber: string) {
  const version = teachingImageVersions[teachingNumber];
  const cacheVersion = version ? `?v=${version}` : "";

  return `/wisdom-thumbs/wisdomoriginal${teachingNumber}.jpg${cacheVersion}`;
}
