import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type News = {
  metadata: NewsMetadata;
  content: string;
};

export type NewsMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  category?: string;
  slug: string;
};

const rootDirectory = path.join(process.cwd(), "content", "news");

export async function getNewsBySlug(slug: string): Promise<News | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    const { data, content } = matter(fileContent);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getNewsByTitle(title: string): Promise<NewsMetadata[]> {
  const files = fs.readdirSync(rootDirectory); // Legge tutti i file nella directory delle news

  // Filtra le news in base al titolo
  const filteredNews = files
    .map((file) => getNewsMetadata(file)) // Ottieni i metadati di ogni news
    .filter(
      (news) => news.title?.toLowerCase().includes(title.toLowerCase()) // Controlla se il titolo contiene la stringa passata
    )
    .sort((a, b) => {
      // Ordina per data di pubblicazione
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  return filteredNews; // Ritorna solo le news filtrate
}

//prende un limite per quanti News prendere
export async function getNews(limit?: number): Promise<NewsMetadata[]> {
  const files = fs.readdirSync(rootDirectory); //legge il contenuto della root directory (i Newss)

  const Newss = files
    .map((file) => getNewsMetadata(file)) //prende i metadata del News
    .sort((a, b) => {
      //li ordiniamo in base alla data di publicazione
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    //se c'è un limite ritorna solo quel tot di News
    return Newss.slice(0, limit);
  }

  return Newss;
}

export function getNewsMetadata(filepath: string): NewsMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath); //legge il contenuto del News (file)
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" }); //prende il contenuto del News (file)
  const { data } = matter(fileContent);
  return { ...data, slug }; //ritorna solo i metadata e non il corpo del News
}
