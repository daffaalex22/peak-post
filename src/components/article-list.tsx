import PostCard from "@/components/post-card";
import { LoginModal } from "./ui/login-modal";
import { Article } from "../../graphql/generated";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        {articles?.map((article: Article, index: number) => (
          article.isMembersOnly ? (
            <LoginModal key={index}>
              <div className="flex flex-wrap justify-center w-full">
                <PostCard article={article} />
              </div>
            </LoginModal>) : (
            <div key={index} className="flex flex-wrap justify-center w-full md:w-1/3 lg:w-1/4">
              <PostCard article={article} />
            </div>
          )
        ))}
      </div>
    </>
  )
}