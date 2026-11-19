
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaRegClock,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const HASHNODE_USERNAME = "faisalsiddiqui";
const PROFILE_URL = `https://hashnode.com/@${HASHNODE_USERNAME}`;
const ENDPOINT = "https://gql-beta.hashnode.com";

const QUERY = `
  query UserPosts($username: String!) {
    user(username: $username) {
      posts(first: 6) {
        edges {
          node {
            id
            title
            brief
            url
            coverImage {
              url
            }
            readTimeInMinutes
            publishedAt
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

const fetchBlogs = async (signal) => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        username: HASHNODE_USERNAME,
      },
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Hashnode API error: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  return (
    result.data?.user?.posts?.edges.map((edge) => edge.node) ?? []
  );
};

const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

const openArticle = (url) => {
  if (url && url !== "#") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

const BlogImage = ({ post }) => (
  <div className="relative h-52 overflow-hidden bg-purple-500/10">
    {post.coverImage?.url ? (
      <img
        src={post.coverImage.url}
        alt={post.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div className="flex h-full items-center justify-center text-5xl text-purple-400">
        <FaHashnode />
      </div>
    )}
  </div>
);

const LatestBlogCard = ({ post }) => (
  <article
    onClick={() => openArticle(post.url)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openArticle(post.url);
      }
    }}
    role="link"
    tabIndex={0}
    aria-label={`Read article: ${post.title}`}
    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a24] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
  >
    <BlogImage post={post} />

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag.name}
            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
          >
            {tag.name}
          </span>
        ))}
      </div>

      <h3 className="mb-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-purple-300">
        {post.title}
      </h3>

      <p className="mb-5 line-clamp-3 text-sm leading-7 text-gray-400">
        {post.brief}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-gray-500">
        {post.publishedAt && (
          <span className="inline-flex items-center gap-2">
            <FaRegCalendarAlt />
            {formatDate(post.publishedAt)}
          </span>
        )}

        {post.readTimeInMinutes > 0 && (
          <span className="inline-flex items-center gap-2">
            <FaRegClock />
            {post.readTimeInMinutes} min read
          </span>
        )}
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
        Read Article
        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </article>
);

const PreviousBlogCard = ({ post }) => (
  <article
    onClick={() => openArticle(post.url)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openArticle(post.url);
      }
    }}
    role="link"
    tabIndex={0}
    aria-label={`Read article: ${post.title}`}
    className="group flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-[#1a1a24] p-4 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
  >
    <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-purple-500/10">
      {post.coverImage?.url ? (
        <img
          src={post.coverImage.url}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-2xl text-purple-400">
          <FaHashnode />
        </div>
      )}
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-white transition-colors group-hover:text-purple-300">
        {post.title}
      </h3>

      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
        {post.tags?.[0] && (
          <span className="text-purple-300">
            {post.tags[0].name}
          </span>
        )}

        {post.readTimeInMinutes > 0 && (
          <span className="inline-flex items-center gap-1">
            <FaRegClock />
            {post.readTimeInMinutes} min read
          </span>
        )}
      </div>
    </div>

    <FaArrowRight className="shrink-0 text-purple-400 transition-transform group-hover:translate-x-1" />
  </article>
);

const BlogSkeleton = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="h-96 animate-pulse rounded-2xl bg-white/5"
      />
    ))}
  </div>
);

const Blog = () => {
  const [state, setState] = useState({
    status: "loading",
    posts: [],
  });

  useEffect(() => {
    const controller = new AbortController();

    const loadBlogs = async () => {
      try {
        const posts = await fetchBlogs(controller.signal);

        setState({
          status: "ready",
          posts,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Hashnode error:", error);

          setState({
            status: "error",
            posts: [],
          });
        }
      }
    };

    loadBlogs();

    return () => controller.abort();
  }, []);

  const latestBlogs = state.posts.slice(0, 3);
  const previousBlogs = state.posts.slice(3, 6);

  return (
    <section
      id="blog"
      className="px-6 py-20 text-white md:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            My <span className="text-purple-400">Blogs</span>
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-gray-400">
            Sharing my knowledge, experiences and learning
            journey through articles about web development.
          </p>
        </div>

        {/* Loading */}
        {state.status === "loading" && <BlogSkeleton />}

        {/* Error */}
        {state.status === "error" && (
          <div className="rounded-2xl border border-white/10 bg-[#1a1a24] p-8 text-center">
            <FaHashnode className="mx-auto mb-4 text-4xl text-purple-400" />

            <p className="mb-4 text-gray-300">
              Unable to load my articles right now.
            </p>

            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Visit my Hashnode profile
            </a>
          </div>
        )}

        {/* Blog Content */}
        {state.status === "ready" && (
          <>
            {state.posts.length === 0 ? (
              <p className="text-center text-gray-400">
                No published articles found yet.
              </p>
            ) : (
              <>
                {/* Latest Articles */}
                <div className="mb-14">
                  <div className="mb-7 flex items-center justify-between">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      Latest <span className="text-purple-400">Articles</span>
                    </h3>

                    <span className="text-xs text-gray-500">
                      Newest posts
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latestBlogs.map((post) => (
                      <LatestBlogCard
                        key={post.id}
                        post={post}
                      />
                    ))}
                  </div>
                </div>

                {/* Previous Articles */}
                {previousBlogs.length > 0 && (
                  <div>
                    <div className="mb-7 flex items-center justify-between">
                      <h3 className="text-xl font-semibold md:text-2xl">
                        Previous <span className="text-purple-400">Articles</span>
                      </h3>

                      <span className="text-xs text-gray-500">
                        More from my journey
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {previousBlogs.map((post) => (
                        <PreviousBlogCard
                          key={post.id}
                          post={post}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Hashnode Profile Link */}
        <div className="mt-12 text-center">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-purple-400 px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple-500/20"
          >
            View All Blogs
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;
