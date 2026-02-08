import { motion } from "framer-motion";
import { Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";

// Fallback data
const fallbackPosts: BlogPost[] = [
  {
    id: "1", slug: "future-of-web-development-2024", title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "From AI-powered development to edge computing, discover the technologies shaping the next generation of web experiences.",
    category: "Development", author: "Alex Thompson", author_role: "Lead Developer", read_time: "5 min read",
    featured: true, published: true, content: null, created_at: "2024-01-15", updated_at: "2024-01-15",
  },
  {
    id: "2", slug: "mastering-conversion-optimization", title: "Mastering Conversion Rate Optimization",
    excerpt: "Learn the science behind turning visitors into customers with data-driven CRO strategies.",
    category: "Marketing", author: "Sarah Chen", author_role: "Marketing Lead", read_time: "7 min read",
    featured: false, published: true, content: null, created_at: "2024-01-10", updated_at: "2024-01-10",
  },
  {
    id: "3", slug: "design-systems-at-scale", title: "Building Design Systems That Scale",
    excerpt: "How to create and maintain design systems that grow with your organization.",
    category: "Design", author: "Marcus Lee", author_role: "Lead Designer", read_time: "6 min read",
    featured: false, published: true, content: null, created_at: "2024-01-05", updated_at: "2024-01-05",
  },
  {
    id: "4", slug: "seo-strategies-2024", title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise and focus on SEO tactics that drive real organic growth.",
    category: "Marketing", author: "Emily Rodriguez", author_role: "SEO Lead", read_time: "8 min read",
    featured: false, published: true, content: null, created_at: "2023-12-28", updated_at: "2023-12-28",
  },
  {
    id: "5", slug: "react-performance-tips", title: "10 React Performance Tips Every Developer Should Know",
    excerpt: "Optimize your React applications with these battle-tested performance techniques.",
    category: "Development", author: "David Kim", author_role: "Senior Developer", read_time: "10 min read",
    featured: false, published: true, content: null, created_at: "2023-12-20", updated_at: "2023-12-20",
  },
  {
    id: "6", slug: "psychology-of-color", title: "The Psychology of Color in Web Design",
    excerpt: "How color choices affect user perception and behavior on your website.",
    category: "Design", author: "Jessica Park", author_role: "UX Researcher", read_time: "5 min read",
    featured: false, published: true, content: null, created_at: "2023-12-15", updated_at: "2023-12-15",
  },
];

const categories = ["All", "Development", "Marketing", "Design"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: dbPosts } = useBlogPosts();
  const allPosts = dbPosts && dbPosts.length > 0 ? dbPosts : fallbackPosts;

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground font-display mb-6">
              Insights &<br />
              <span className="text-primary text-glow-primary">Industry Trends</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on web development, design, and digital marketing.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="group h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all flex flex-col">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4 w-fit">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.read_time}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
