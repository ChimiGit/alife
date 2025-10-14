import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function getAllBlogs() {
  const blogsDirectory = join(process.cwd(), "src/content/blog");
  const blogFiles = readdirSync(blogsDirectory, { withFileTypes: true }).filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md")).map((dirent) => dirent.name);
  const blogs = blogFiles.map((filename) => {
    const filePath = join(blogsDirectory, filename);
    const fileContents = readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, "");
    return {
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      content,
      slug,
      category: data.category || "General",
      tags: data.tags || [],
      featuredImage: data.featuredImage || "/assets/images/Blog Loading.png"
    };
  });
  return blogs.sort(
    (a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
  );
}
function getBlogsByCategory(category) {
  const allBlogs = getAllBlogs();
  return allBlogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
}

export { getBlogsByCategory as a, getAllBlogs as g };
