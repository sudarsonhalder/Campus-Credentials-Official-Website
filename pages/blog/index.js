import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter"; // Import gray-matter for frontmatter parsing

export async function getStaticProps() {
  const postsPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsPath);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsPath, filename);
    const rawData = fs.readFileSync(filePath, "utf8");
    const { data } = matter(rawData); // Parse frontmatter using gray-matter

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      author: data.author,
      thumbnail: data.thumbnail,
      metaDescription: data.metaDescription,
    };
  });

  // Sort posts by date in descending order (latest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { posts },
  };
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");
  return `${dayWithSuffix} ${month}, ${year}`;
}

export default function BlogPage({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-left">
          Latest Blogs and Insights
        </h1>

        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">
            No blog posts available at the moment. Please check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl group transition-shadow duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {post.thumbnail && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {formatDate(post.date)} {/* Display the formatted date */}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.metaDescription}
                  </p>
                  <div className="text-xs text-gray-500 mb-2">
                    Author: {post.author || "Unknown"}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="w-full sm:w-auto inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
