import files from "./**/*.md";

export interface BlogPost {
  tags: string[];
  permalink: string;
  filename: string;
  html: string;
  title?: string;
  summary?: string;
  date?: Date;
  author?: string;
}

export interface BlogPostFilters {
  matchesPermalink?: string;
}

export const posts: BlogPost[] = files
  .map((file) => {
    const tags = (file.metadata.tags as string ?? "").split(",").map(tag => tag.trim());
    const author = file.metadata.author as string | undefined;
    const permalink = (file.metadata.permalink as string | undefined) ?? (file.filename as string).replace(/.md$/, "");
    const filename = file.filename as string;
    const html = file.html as string;
    const title = file.metadata.title as string | undefined;
    const summary = file.metadata.summary as string | undefined;
    const date = new Date(file.metadata.date) ?? undefined;
    return { tags, author, permalink, filename, html, title, summary, date };
  })
  .sort(({ date: dateA }, { date: dateB }) => dateA < dateB ? 1 : -1);

export const getPost = ({ matchesPermalink }: BlogPostFilters): BlogPost | null => {
  return posts.find((post) => post.permalink === matchesPermalink) ?? null;
}