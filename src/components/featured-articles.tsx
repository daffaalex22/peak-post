"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function FeaturedArticles() {
  return (
    <div className="h-[80vh] w-full sm:w-3/4 mx-auto">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Global Climate Summit 2024
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        World leaders gather for emergency climate talks as global temperatures hit record highs. New commitments and ambitious targets expected to be announced.
      </p>
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Breakthrough in Renewable Energy
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Scientists announce revolutionary solar technology breakthrough, promising to double current efficiency rates and significantly reduce costs of renewable energy.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Major Diplomatic Breakthrough
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Historic peace agreement signed between long-standing rival nations, marking a new era of cooperation and stability in the region.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Medical Research Milestone
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Researchers announce successful trials of revolutionary treatment for previously incurable disease, offering hope to millions worldwide.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3", // Climate summit image
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3", // Solar panels image
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3", // Diplomatic handshake image
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3", // Medical research image
  },
];
