import { blogBodies } from "./blogBodies";

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  status: "published" | "external" | "coming-soon";
  externalUrl?: string;
  /** raw HTML body — verbatim from the source post. Image assets are placeholders. */
  body?: string;
  /** TODO: replace with the real cover image once dropped into src/assets/blogs/ */
  coverNote: string;
};

export const blogs: Blog[] = [
  {
    slug: "how-machines-learn",
    title: "How do Machines Learn?",
    excerpt:
      "Lets Understanbt how Machene learning Work Loads be coded and Trained.",
    category: "Data Science",
    readTime: "20 min read",
    status: "published",
    coverNote: "DataScience/machine-learning-technology-free-vector.jpg",
    body: blogBodies["how-machines-learn"],
  },
  {
    slug: "your-companion",
    title: "Your Companion",
    excerpt:
      "An AI chatbot, this blog will provide a step-by-step guide on how it is built and deployed.",
    category: "AI Engineering",
    readTime: "18 min read",
    status: "published",
    coverNote: "chatbotimg.jpg",
    body: blogBodies["your-companion"],
  },
  {
    slug: "forward-propagation",
    title: "Forward Propagation",
    excerpt:
      "This blog will give a Indepth understanding of feed forward Neural Networks.",
    category: "Deep Learning",
    readTime: "10 min read",
    status: "published",
    coverNote: "ANN/nngif.gif",
    body: blogBodies["forward-propagation"],
  },
  {
    slug: "notification-system",
    title: "Notification System & Live Scoring",
    excerpt:
      "Learn about Redis Pub/Sub, SSE, and real-time notification systems for dashboards and live scoring.",
    category: "System Design",
    readTime: "12 min read",
    status: "published",
    coverNote: "notification.png",
    body: blogBodies["notification-system"],
  },
  {
    slug: "factory-method",
    title: "Factory Method Design Pattern",
    excerpt:
      "Conceptual understanding of Factory Method, Using an realtime example in Golang.",
    category: "Design Patterns",
    readTime: "6 min read",
    status: "external",
    externalUrl:
      "https://dev.to/chinnolla_koteshwar/factory-method-design-pattern-207p",
    coverNote: "Factory_git.gif",
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);