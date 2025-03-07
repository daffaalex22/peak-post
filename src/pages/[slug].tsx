import { FixedNavbar } from '@/components/navbar';
import { MembersChip } from '../components/members-chip';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetArticlesDocument, Article, GetHomeDocument, Home } from "../../graphql/generated";
import { MarkdownRenderer } from './../components/markdown-renderer';
import client from '@/lib/apollo-client';

interface ArticlePageProps {
  article: Article;
  content: Home
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en'] }) => {
  // Get paths for all locales
  const paths = await Promise.all(
    locales.map(async (locale) => {
      const { data } = await client.query({
        query: GetArticlesDocument,
        variables: {
          locale,
          tenant: "Java"
        },
      });

      // Generate paths for each article in each locale
      return data.articles.map((article: Article) => ({
        params: { slug: article.slug },
        locale
      }));
    })
  );

  // Flatten the array of arrays into a single array of paths
  const flatPaths = paths.flat();

  return {
    paths: flatPaths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale = 'en' }) => {
  const { data } = await client.query({
    query: GetArticlesDocument,
    variables: {
      locale,
      tenant: "Java"
    },
  });

  // Find the specific article by slug
  const article = data.articles.find(
    (article: Article) => article.slug === params?.slug
  );

  if (!article) {
    return {
      notFound: true
    };
  }

  const { data: homeData } = await client.query({
    query: GetHomeDocument,
    variables: {
      locale
    },
  });

  return {
    props: {
      article,
      content: homeData?.home || {}
    }
  };
};

export default function ArticleDetails({ article, content }: ArticlePageProps) {

  return (
    <>
      <FixedNavbar home={false} content={content} />
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-5xl font-bold italic">
            {article.title}
          </h1>
          <p className="text-md mt-4">
            {article.description} 
          </p>
          <p className="text-sm mt-4 text-gray-300">
            {article.author?.name} &nbsp;●&nbsp; December 12, 2025 &nbsp;●&nbsp; <MembersChip />
          </p>

          <section className='mt-4 text-justify text-md'>
            <div>
              <MarkdownRenderer
                content={article?.blocks && article.blocks[0]?.__typename == "ComponentSharedRichText" ? article.blocks[0].body as string : ""}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}