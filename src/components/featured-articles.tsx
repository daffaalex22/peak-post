"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Article } from "../../graphql/generated";

const defaultSkeletonContents = [
  {
    title: "Global Climate Summit 2024",
    description: "World leaders gather for emergency climate talks as global temperatures hit record highs. New commitments and ambitious targets expected to be announced.",
    slug: "global-climate-summit-2024",
    thumbnail: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Breakthrough in Renewable Energy",
    description: "Scientists announce revolutionary solar technology breakthrough, promising to double current efficiency rates and significantly reduce costs of renewable energy.",
    slug: "breakthrough-in-renewable-energy",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Major Diplomatic Breakthrough",
    description: "Historic peace agreement signed between long-standing rival nations, marking a new era of cooperation and stability in the region.",
    slug: "major-diplomatic-breakthrough",
    thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Medical Research Milestone",
    description: "Researchers announce successful trials of revolutionary treatment for previously incurable disease, offering hope to millions worldwide.",
    slug: "medical-research-milestone",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

export function FeaturedArticles({ articles }: { articles: Article[] }) {
  const Skeleton = ({ title, description }: SkeletonProps) => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {description}
        </p>
      </div>
    );
  };

  const skeletonContents = articles ? articles.map((article) => ({
    title: article?.title ? article.title : "",
    description: article?.description ? article.description : "",
    slug: article?.slug ? article.slug : "",
    thumbnail: article?.coverURL ? article.coverURL : "",
  })) : defaultSkeletonContents

  const cards = skeletonContents.map((c, index) => {
    return {
      id: c.slug,
      content: <Skeleton {...c} />,
      className: (index === 0 || index === 3) ? "md:col-span-2" : "md:col-span-1",
      thumbnail: c.thumbnail,
      slug: c.slug
    };
  })

  return (
    <div className="h-[80vh] w-full sm:w-3/4 mx-auto">
      <LayoutGrid cards={cards} />
    </div>
  );
}

interface SkeletonProps {
  title: string;
  description: string;
}