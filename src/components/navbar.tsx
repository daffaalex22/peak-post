"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { LanguageToggle } from './language-toggle';
import { Home } from "../../graphql/generated";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function FixedNavbar({ content, home = true }: { content: Home, home?: boolean }) {
  return (
    <div className="relative w-full flex items-center justify-center mb-32">
      <Navbar content={content} home={home} className="top-8" />
    </div>
  );
}

function Navbar({ className, content, home = true }: { className?: string, content: Home, home: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  const { status } = useSession();
  const router = useRouter();

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-max sm:max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {!home &&
          <MenuItem setActive={setActive} active={null} item="Home" onClick={() => router.push("/")}>
          </MenuItem>
        }
        <MenuItem setActive={setActive} active={active} item={content.navItems[0]}>
          <div className="flex flex-col space-y-4 text-sm">
            {content.newsTypes.map((newsType: string) => (
              <HoveredLink key={newsType} href={`/`}>
                {newsType}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={content.navItems[1]}>
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            {content.siteFeatures.map((feature: Record<string, string>) => (
              <ProductItem
                key={feature.title}
                title={feature.title}
                href={"/"}
                src={feature.imageURL}
                description={feature.subtitle}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={content.navItems[2]}>
          <div className="flex flex-col space-y-4 text-sm">
            {content.siteSections.map((section: string) => (
              <HoveredLink key={section} href={`/`}>
                {section}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        {home &&
          <MenuItem setActive={setActive} active={active} item={content.navItems[3]}>
            <LanguageToggle />
          </MenuItem>
        }
        <span className={status === "authenticated" ? "text-green-500" : "text-red-600"}>&nbsp;●&nbsp;</span>
      </Menu>
    </div>
  );
}
