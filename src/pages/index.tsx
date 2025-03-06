import { FixedNavbar } from "@/components/navbar";
import ArticleList from '@/components/article-list';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { FeaturedArticles } from './../components/featured-articles';
import { Article, GetArticlesDocument } from "../../graphql/generated";
import { GetStaticProps } from "next";
import client from "@/lib/apollo-client";

interface HomeProps {
  articles: Article[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const { data } = await client.query({
      query: GetArticlesDocument,
      variables: {
        locale: "en",
        tenant: "Java"
      },
    });

    return {
      props: {
        articles: data.articles || [],
      },
      revalidate: 60, // Revalidate every 60 seconds using ISR
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
      },
      revalidate: 60,
    };
  }
};

export default function Home({ articles }: HomeProps) {

  return (
    <>
      <FixedNavbar />
      {/* Title */}
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-6xl font-bold italic">
            Peak Post
          </h1>
          <p className="text-lg mt-4">Cutting-Edge Journalism for the Digital Age</p>
        </div>
      </div>
      <FeaturedArticles articles={articles?.filter((i) => i?.tenants && i.tenants.length > 1) as Article[]} />
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-6xl font-bold italic">
            Explore
          </h1>
          <p className="text-lg mt-4">Discover our latest stories and in-depth reporting from around the world</p>
        </div>
      </div>
      <ArticleList articles={articles?.filter((i) => i?.tenants.length == 1) as Article[]} />
      <div className="h-[12rem] flex items-center justify-center">
        <TextHoverEffect text="Peak Post" />
      </div>
    </>
  );
}