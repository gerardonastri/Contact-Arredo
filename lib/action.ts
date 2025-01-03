"use server";

import { getNewsByTitle, NewsMetadata } from "./news";

export const getNews = async (searchQuery: string): Promise<NewsMetadata[]> => {
  "use server";
  const news = await getNewsByTitle(searchQuery);
  return news;
};
