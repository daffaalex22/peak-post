import { FixedNavbar } from '@/components/navbar';
import { MembersChip } from '../components/members-chip';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetArticlesDocument, Article } from "../../graphql/generated";
import { MarkdownRenderer } from './../components/markdown-renderer';
import client from '@/lib/apollo-client';

interface ArticlePageProps {
  article: Article;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://peak-post-strapi.onrender.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GetArticlesDocument,
    variables: {
      locale: "en",
      tenant: "Java"
    },
  });

  // Generate paths for each article
  const paths = data.articles.map((article: Article) => ({
    params: { slug: article.slug }
  }));

  return {
    paths,
    fallback: 'blocking' // or false if you want 404 for new paths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GetArticlesDocument,
    variables: {
      locale: "en",
      tenant: "Java"
    },
  });

  // Find the specific article by slug
  const article = data.articles.find(
    (article: Article) => article.slug === params?.slug
  );

  if (!article) {
    return {
      notFound: true // Returns 404 page
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 60, // Optional: revalidate every 60 seconds
  };
};

export default function ArticleDetails({ article }: ArticlePageProps) {

  return (
    <>
      <FixedNavbar />
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