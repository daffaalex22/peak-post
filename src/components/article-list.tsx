import PostCard from "@/components/post-card";

const articles = [
  {
    title: "The Future of Web Development in 2025",
    subtitle: "Exploring the latest trends in frontend technologies",
    readDuration: 180,
    avatarURL: "https://avatar.iran.liara.run/public/boy",
    author: "Alex Thompson",
    backgroundURL: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Mastering TypeScript: Best Practices",
    subtitle: "A comprehensive guide to writing better TypeScript code",
    readDuration: 240,
    avatarURL: "https://avatar.iran.liara.run/public/girl",
    author: "Sarah Chen",
    backgroundURL: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Building Scalable React Applications",
    subtitle: "Architecture patterns for large-scale apps",
    readDuration: 150,
    avatarURL: "https://avatar.iran.liara.run/public/boy",
    author: "Michael Rodriguez",
    backgroundURL: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Next.js 14: What's New?",
    subtitle: "Exploring the latest features and improvements",
    readDuration: 120,
    avatarURL: "https://avatar.iran.liara.run/public/girl",
    author: "Emma Wilson",
    backgroundURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "The Art of Clean Code",
    subtitle: "Writing maintainable and efficient JavaScript",
    readDuration: 200,
    avatarURL: "https://avatar.iran.liara.run/public/boy",
    author: "James Parker",
    backgroundURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "CSS Grid Mastery",
    subtitle: "Modern layout techniques for web developers",
    readDuration: 160,
    avatarURL: "https://avatar.iran.liara.run/public/girl",
    author: "Lisa Kumar",
    backgroundURL: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }
];

export default function ArticleList() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
      {articles.map((article, index) => (
        <div key={index} className="flex justify-center w-full md:w-1/4">
          <PostCard article={article} />
        </div>
      ))}
    </div>
  )
}