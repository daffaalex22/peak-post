import PostCard from "@/components/post-card";

const articles = [
  {
    title: "Breaking Down the Webb Telescope Discoveries",
    subtitle: "New insights into the early universe",
    readDuration: 180,
    avatarURL: "https://avatar.iran.liara.run/public/32", // Alex - male
    author: "Alex Thompson",
    backgroundURL: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "The Changing Dynamics of Indo-Pacific Relations",
    subtitle: "Analysis of regional geopolitical shifts",
    readDuration: 240,
    avatarURL: "https://avatar.iran.liara.run/public/54", // Sarah - female
    author: "Sarah Chen",
    backgroundURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Formula 1: Evolution of Racing Technology",
    subtitle: "How engineering shapes modern motorsports",
    readDuration: 150,
    avatarURL: "https://avatar.iran.liara.run/public/26", // Michael - male
    author: "Michael Rodriguez",
    backgroundURL: "https://images.unsplash.com/photo-1609013304225-26a1b84ac180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Climate Change: Arctic Ice Recovery Patterns",
    subtitle: "Latest research on polar climate trends",
    readDuration: 120,
    avatarURL: "https://avatar.iran.liara.run/public/84", // Emma - female
    author: "Emma Wilson",
    backgroundURL: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "The Rise of Women's Football",
    subtitle: "Changing landscape in professional sports",
    readDuration: 200,
    avatarURL: "https://avatar.iran.liara.run/public/5", // James - male
    author: "James Parker",
    backgroundURL: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title: "Breakthrough in Quantum Computing",
    subtitle: "Recent advances in quantum error correction",
    readDuration: 160,
    avatarURL: "https://avatar.iran.liara.run/public/58", // Lisa - female
    author: "Lisa Kumar",
    backgroundURL: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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