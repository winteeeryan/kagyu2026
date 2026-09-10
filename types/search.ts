export type SearchDocument = {
  id: string;
  title: string;
  url: string;
  category: string;
  excerpt: string;
  content: string;
  keywords: string[];
};

export type SearchIndexPayload = {
  documents: SearchDocument[];
  index: object;
};
