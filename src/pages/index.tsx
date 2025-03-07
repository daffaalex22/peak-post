import { FixedNavbar } from "@/components/navbar";
import ArticleList from '@/components/article-list';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { FeaturedArticles } from './../components/featured-articles';
import { Article, GetArticlesDocument, GetHomeDocument, Home as HomeContent } from "../../graphql/generated";
import { GetStaticProps } from "next";
import client from "@/lib/apollo-client";
import { LineShadowText } from './../components/magicui/line-shadow-text';

interface StaticPropsContext {
  locale?: string;
}

interface HomeProps {
  articles: Article[];
  content: HomeContent;
}

export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: StaticPropsContext
) => {
  try {
    const { data: articlesData } = await client.query({
      query: GetArticlesDocument,
      variables: {
        locale: context.locale,
        tenant: process.env.NEXT_PUBLIC_TENANT_NAME
      },
    });

    const { data: homeData } = await client.query({
      query: GetHomeDocument,
      variables: {
        locale: context.locale
      },
    });

    return {
      props: {
        articles: articlesData.articles || [],
        content: homeData.home || {},
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
        content: {
          documentId: '',
          localizations: [],
          siteTitle: 'Error loading content'
        }
      },
      revalidate: 60,
    };
  }
};

export default function Home({ articles, content }: HomeProps) {
  const tenantName = " " + process.env.NEXT_PUBLIC_TENANT_NAME;

  return (
    <>
      <FixedNavbar content={content} />
      {/* Title */}
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-6xl font-bold italic">
            {content.siteTItle}{" "}
            <LineShadowText
              shadowColor={tenantName === " Java" ? "white" : "black"}
              className="italic"
            >
              {tenantName}
            </LineShadowText>

          </h1>
          <p className="text-lg mt-4">{content.siteTagline}</p>
        </div>
      </div>
      <FeaturedArticles articles={articles?.filter((i) => i?.tenants && i.tenants.length > 1) as Article[]} />
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-6xl font-bold italic">
            {content.exploreTitle}
          </h1>
          <p className="text-lg mt-4">{content.exploreSubtitle}</p>
        </div>
      </div>
      <ArticleList articles={articles?.filter((i) => i?.tenants.length == 1) as Article[]} />
      <div className="h-[12rem] flex items-center justify-center">
        <TextHoverEffect text="Peak Post" />
      </div>
    </>
  );
}