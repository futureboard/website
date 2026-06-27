const DEFAULT_FEED_API_URL = "https://feed.futureboard.studio/api/posts";

export type BlogAuthor = {
  id?: string | number;
  name?: string;
  email?: string;
};

export type BlogCategory = {
  id?: string | number;
  title?: string;
  name?: string;
  slug?: string;
};

type LexicalTextNode = {
  type: "text";
  text?: string;
  format?: number;
};

type LexicalNode = {
  type?: string;
  tag?: string;
  listType?: string;
  text?: string;
  url?: string;
  altText?: string;
  src?: string;
  fields?: {
    url?: string;
    alt?: string;
    altText?: string;
  };
  children?: Array<LexicalNode | LexicalTextNode>;
};

type BlogImage = string | null | { url?: string; alt?: string };

export type BlogPost = {
  id: string | number;
  title: string;
  heroImage?: BlogImage;
  content?: { root?: LexicalNode } | null;
  excerpt?: string;
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  categories?: BlogCategory[];
  authors?: BlogAuthor[];
  populatedAuthors?: BlogAuthor[];
  meta?: {
    title?: string | null;
    image?: BlogImage;
    description?: string | null;
  };
  _status?: string;
};

type BlogApiResponse = {
  docs?: BlogPost[];
};

export const BLOG_API_URL =
  import.meta.env.FUTUREBOARD_FEED_API_URL ?? DEFAULT_FEED_API_URL;

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(BLOG_API_URL, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.status}`);
  }

  const data = (await response.json()) as BlogApiResponse;
  return (data.docs ?? []).filter((post) => post.slug && post.title);
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export function formatPostDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function getPostDescription(post: BlogPost) {
  return (
    post.meta?.description ??
    post.excerpt ??
    lexicalToPlainText(post.content?.root).slice(0, 160) ??
    "Latest news and updates from Futureboard Studio."
  );
}

export function getImageUrl(image?: BlogImage) {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.url ?? null;
}

export function lexicalToHtml(root?: LexicalNode | null) {
  if (!root?.children?.length) return "";
  return root.children.map(renderLexicalNode).filter(Boolean).join("\n");
}

export function lexicalToPlainText(root?: LexicalNode | null): string {
  if (!root) return "";
  if (root.type === "text") return root.text ?? "";

  return (root.children ?? [])
    .map((child) => lexicalToPlainText(child as LexicalNode))
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function renderLexicalNode(node: LexicalNode | LexicalTextNode): string {
  if (isLexicalTextNode(node)) return renderTextNode(node);

  const children = (node.children ?? [])
    .map(renderLexicalNode)
    .filter(Boolean)
    .join("");

  switch (node.type) {
    case "heading": {
      const tag = sanitizeHeadingTag(node.tag);
      return `<${tag}>${children}</${tag}>`;
    }
    case "paragraph":
      return children ? `<p>${children}</p>` : "";
    case "quote":
      return `<blockquote>${children}</blockquote>`;
    case "list": {
      const tag = node.listType === "number" ? "ol" : "ul";
      return `<${tag}>${children}</${tag}>`;
    }
    case "listitem":
      return `<li>${children}</li>`;
    case "link": {
      const href = escapeAttribute(node.url ?? "#");
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`;
    }
    case "upload":
    case "image": {
      const src = node.src ?? node.fields?.url;
      if (!src) return "";

      const alt = escapeAttribute(
        node.altText ?? node.fields?.altText ?? node.fields?.alt ?? "",
      );
      return `<img src="${escapeAttribute(src)}" alt="${alt}" loading="lazy" />`;
    }
    case "linebreak":
      return "<br />";
    default:
      return children;
  }
}

function isLexicalTextNode(
  node: LexicalNode | LexicalTextNode,
): node is LexicalTextNode {
  return node.type === "text";
}

function renderTextNode(node: LexicalTextNode) {
  let text = escapeHtml(node.text ?? "");
  const format = node.format ?? 0;

  if (format & 1) text = `<strong>${text}</strong>`;
  if (format & 2) text = `<em>${text}</em>`;
  if (format & 8) text = `<u>${text}</u>`;
  if (format & 16) text = `<code>${text}</code>`;

  return text;
}

function sanitizeHeadingTag(tag?: string) {
  return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag ?? "") ? tag : "h2";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value: string) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
