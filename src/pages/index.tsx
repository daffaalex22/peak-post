"use client";
import { FixedNavbar } from "@/components/navbar";
import ArticleList from '@/components/article-list';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { FeaturedArticles } from './../components/featured-articles';

export default function Home() {
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
      <FeaturedArticles />
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-6xl font-bold italic">
            Explore
          </h1>
          <p className="text-lg mt-4">Discover our latest stories and in-depth reporting from around the world</p>
        </div>
      </div>
      <ArticleList />
      <div className="h-[12rem] flex items-center justify-center">
        <TextHoverEffect text="Peak Post" />
      </div>
    </>
  );
}
