"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { LanguageToggle } from './language-toggle';

export function FixedNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center mb-32">
      <Navbar className="top-8" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-max sm:max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="News">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/breaking-news">Breaking News</HoveredLink>
            <HoveredLink href="/politics">Politics</HoveredLink>
            <HoveredLink href="/business">Business</HoveredLink>
            <HoveredLink href="/technology">Technology</HoveredLink>
            <HoveredLink href="/health">Health</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Top Stories"
              href="/top-stories"
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&w=640&q=75&auto=format&fit=crop"
              description="Must-read articles of the day"
            />
            <ProductItem
              title="In-Depth Reports"
              href="/in-depth"
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&w=640&q=75&auto=format&fit=crop"
              description="Detailed analysis and investigative journalism"
            />
            <ProductItem
              title="Opinion"
              href="/opinion"
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&w=640&q=75&auto=format&fit=crop"
              description="Expert perspectives and editorial content"
            />
            <ProductItem
              title="Multimedia"
              href="/multimedia"
              src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-4.0.3&w=640&q=75&auto=format&fit=crop"
              description="Video reports, photo galleries, and interactive content"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sections">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/world">World</HoveredLink>
            <HoveredLink href="/sports">Sports</HoveredLink>
            <HoveredLink href="/entertainment">Entertainment</HoveredLink>
            <HoveredLink href="/lifestyle">Lifestyle</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Language
        ">
          <LanguageToggle />
        </MenuItem>
        <span className="text-red-600 text-green-500">&nbsp;●&nbsp;</span>
      </Menu>
    </div>
  );
}
