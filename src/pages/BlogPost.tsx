import { motion } from "framer-motion";
import { Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { useBlogPost } from "@/hooks/useBlogPosts";

// Fallback content for static slugs
const fallbackContent: Record<string, { title: string; excerpt: string; category: string; author: string; authorRole: string; readTime: string; date: string; content: string }> = {
  "future-of-web-development-2024": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "From AI-powered development to edge computing, discover the technologies shaping the next generation of web experiences.",
    category: "Development", author: "Alex Thompson", authorRole: "Lead Developer", readTime: "5 min read", date: "January 15, 2024",
    content: `## The Evolution of Web Development\n\nWeb development is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications.\n\n### 1. AI-Powered Development\n\nArtificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow.\n\n### 2. Edge Computing\n\nThe edge is where the action is. By processing data closer to users, edge computing reduces latency and improves performance.\n\n### 3. Web Components\n\nThe rise of web components is enabling more modular, reusable code.\n\n### 4. Server Components\n\nReact Server Components are changing how we think about the client-server boundary.`,
  },
  "mastering-conversion-optimization": {
    title: "Mastering Conversion Rate Optimization", excerpt: "Learn the science behind turning visitors into customers.",
    category: "Marketing", author: "Sarah Chen", authorRole: "Marketing Lead", readTime: "7 min read", date: "January 10, 2024",
    content: `## The Science of Conversion\n\nConversion Rate Optimization (CRO) is a systematic approach to increasing the percentage of website visitors who take a desired action.\n\n### Understanding Your Funnel\n\nEvery visitor goes through a journey. Understanding and optimizing each step is key to improving conversions.\n\n### A/B Testing\n\nData-driven decisions beat gut feelings every time. Learn how to set up effective A/B tests.`,
  },
  "design-systems-at-scale": {
    title: "Building Design Systems That Scale", excerpt: "How to create and maintain design systems that grow with your organization.",
    category: "Design", author: "Marcus Lee", authorRole: "Lead Designer", readTime: "6 min read", date: "January 5, 2024",
    content: `## Why Design Systems Matter\n\nA design system is more than a component library — it's a shared language for your team.\n\n### Building Blocks\n\nStart with tokens (colors, spacing, typography), then build components, then patterns.\n\n### Governance\n\nWithout governance, a design system becomes a graveyard of unused components.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: dbPost, isLoading } = useBlogPost(slug || "");

  // Use DB post if available, otherwise fallback
  const fallback = slug ? fallbackContent[slug] : null;
  const post = dbPost || fallback;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-64 bg-muted rounded" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Normalize fields between DB and fallback
  const title = dbPost ? dbPost.title : (fallback?.title || "");
  const category = dbPost ? dbPost.category : (fallback?.category || "");
  const author = dbPost ? dbPost.author : (fallback?.author || "");
  const authorRole = dbPost ? (dbPost.author_role || "") : (fallback?.authorRole || "");
  const readTime = dbPost ? (dbPost.read_time || "") : (fallback?.readTime || "");
  const content = dbPost ? (dbPost.content || "") : (fallback?.content || "");
  const date = dbPost ? new Date(dbPost.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : (fallback?.date || "");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              {category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-6 leading-tight">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-foreground font-medium text-sm">{author}</div>
                  <div className="text-xs text-muted-foreground">{authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span>{date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
