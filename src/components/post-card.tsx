"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Article {
  title: string;
  subtitle: string;
  readDuration: number;
  avatarURL: string;
  author: string;
  backgroundURL: string;
  isMembersOnly: boolean;
}

interface PostCardProps {
  article: Article;
}

const MembersChip = () => {
  return (
    <button
      className="
      inline-flex h-5 ml-1
      animate-shimmer items-center 
      justify-center rounded-md border 
      border-slate-800 text-[75%]
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] px-1 font-medium 
      text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 
      focus:ring-offset-1 focus:ring-offset-slate-50
      "
      suppressHydrationWarning
    >
      Members Only
    </button>
  )
}

export default function PostCard({
  article: {
    title,
    subtitle,
    readDuration,
    avatarURL,
    author,
    backgroundURL,
    isMembersOnly
  },
}: PostCardProps) {
  const [showLogin, setShowLogin] = useState(false)

  const readMinutes = Math.ceil(readDuration / 60);

  const handleClicked = () => {
    if (isMembersOnly) {
      setShowLogin(true);
    }
  }

  return (
    <div className="max-w-xs w-full group/card" onClick={() => handleClicked()}>
      <div
        style={{ '--image-url': `url(${backgroundURL})` } as React.CSSProperties}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[image:var(--image-url)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt={`${author}'s avatar`}
            src={avatarURL}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author}
            </p>
            <p className="text-sm text-gray-400">{readMinutes} min read <span>{isMembersOnly && <MembersChip />}</span> </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}