import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router"; // Import useRouter for navigation
import styles from "./styles/Post.module.css";

export default function BlogPost({ source, frontMatter }) {
  const router = useRouter(); // Initialize the router

  return (
    <>
      <Head>
        <title>{frontMatter.metaTitle || frontMatter.title}</title>
        <meta name="description" content={frontMatter.metaDescription || ""} />
      </Head>
      <article className={styles.postContainer}>
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Go to the previous page
          className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition duration-300"
        >
        Back
        </button>

        {/* Blog Content */}
        <h1 className={styles.postTitle}>{frontMatter.title}</h1>
        <p className={styles.postAuthor}>By {frontMatter.author}</p>
        <p className={styles.postDate}>{frontMatter.date}</p>
        {frontMatter.thumbnail && (
          <img
            src={frontMatter.thumbnail}
            alt={frontMatter.title}
            className={styles.postImage}
          />
        )}
        <div className={styles.postContent}>
          <MDXRemote {...source} />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsPath);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsPath = path.join(process.cwd(), "posts");
  const filePath = path.join(postsPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
