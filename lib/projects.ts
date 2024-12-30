import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  publishedAt?: string;
  slug: string;
};

const rootDirectory = path.join(process.cwd(), "content", "project");

export async function getProjectBySlug(slug: string): Promise<Project | null> {
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

//prende un limite per quanti Project prendere
export async function getProject(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory); //legge il contenuto della root directory (i Projects)

  const Projects = files
    .map((file) => getProjectMetadata(file)) //prende i metadata del Project
    .sort((a, b) => {
      //li ordiniamo in base alla data di publicazione
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    //se c'è un limite ritorna solo quel tot di Project
    return Projects.slice(0, limit);
  }

  return Projects;
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath); //legge il contenuto del Project (file)
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" }); //prende il contenuto del Project (file)
  const { data } = matter(fileContent);
  return { ...data, slug }; //ritorna solo i metadata e non il corpo del Project
}
