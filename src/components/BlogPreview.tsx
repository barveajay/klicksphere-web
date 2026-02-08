import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";

// Fallback data when database is empty
const fallbackPosts = [
  {
    id: "1",
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "From AI-powered development to edge computing, discover the technologies shaping the next generation of web experiences.",
    category: "Development",
    author: "Alex Thompson",
    author_role: "Lead Developer",
    read_time: "5 min read",
    featured: true,
    published: true,
    content: null,
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
  },
  {
    id: "2",
    slug: "mastering-conversion-optimization",
    title: "Mastering Conversion Rate Optimization",
    excerpt: "Learn the science behind turning visitors into customers with data-driven CRO strategies.",
    category: "Marketing",
    author: "Sarah Chen",
    author_role: "Marketing Lead",
    read_time: "7 min read",
    featured: false,
    published: true,
    content: null,
    created_at: "2024-01-10",
    updated_at: "2024-01-10",
  },
  {
    id: "3",
    slug: "design-systems-at-scale",
    title: "Building Design Systems That Scale",
    excerpt: "How to create and maintain design systems that grow with your organization.",
    category: "Design",
    author: "Marcus Lee",
    author_role: "Lead Designer",
    read_time: "6 min read",
    featured: false,
    published: true,
    content: null,
    created_at: "2024-01-05",
    updated_at: "2024-01-05",
  },
];

const BlogPreview = () => {
  const { data: dbPosts } = useBlogPosts();
  const blogPosts = dbPosts && dbPosts.length > 0 ? dbPosts : fallbackPosts;
  const displayPosts = blogPosts.slice(0, 3);

  if (displayPosts.length === 0) return null;

  return (
    <section id="blog" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Our Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display">
              Latest insights &<br />
              <span className="text-primary text-glow-primary">industry trends.</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Post */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <Link to={`/blog/${displayPosts[0].slug}`}>
              <div className="group h-full relative rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border/50 p-8 md:p-12 flex flex-col justify-end min-h-[400px] overflow-hidden hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                    {displayPosts[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display group-hover:text-primary transition-colors">
                    {displayPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    {displayPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {displayPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {displayPosts[0].read_time}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Posts */}
          {displayPosts.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="group h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.read_time}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
