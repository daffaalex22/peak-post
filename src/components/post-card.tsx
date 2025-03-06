"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MembersChip } from "./members-chip";
import { useRouter } from "next/router";
import { Article } from "../../graphql/generated";

interface PostCardProps {
  article: Article;
}

export default function PostCard({
  article: {
    title,
    description,
    author,
    coverURL,
    isMembersOnly,
    slug,
  },
}: PostCardProps) {
  const readMinutes = Math.ceil(180 / 60);
  const router = useRouter();

  const handleClicked = () => {
    if (!isMembersOnly) {
      router.push(`/${slug}`);
    }
  }

  return (
    <div className="max-w-xs w-full group/card" onClick={() => handleClicked()}>
      <div
        style={{ '--image-url': `url(${coverURL})` } as React.CSSProperties}
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
            alt={`${author?.name}'s avatar`}
            src={author?.avatarURL as string}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author?.name}
            </p>
            <p className="text-sm text-gray-400">{readMinutes} min read <span>{isMembersOnly && <MembersChip />}</span> </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}