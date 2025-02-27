"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const articles = [
  {
    title: "Global Climate Summit 2024",
    subtitle: "World leaders gather for emergency climate talks as global temperatures hit record highs. New commitments and ambitious targets expected to be announced.",
    content: "In November 2024, the Global Climate Summit (COP29) convened in Baku, Azerbaijan, against a backdrop of unprecedented global heat—2024 was confirmed as the hottest year on record by the World Meteorological Organization. **World leaders**, from Brazil’s President Lula to the UK’s Keir Starmer, descended on the Caspian Sea capital to confront a stark reality: emissions must drop 42% by 2030 to keep warming below 1.5°C, yet current pledges lag far behind. The summit, dubbed the ‘Finance COP,’ aimed to hammer out a new climate finance goal, replacing the outdated $100 billion annual target set in 2009. Negotiators grappled with funding loss and damage from wildfires in California to floods in Bangladesh, while activists outside chanted for justice. Early talks hinted at a $300 billion pledge, though critics called it a Band-Aid on a gaping wound.\n\n## Escalating Urgency Amid Record Heat\n\nThe urgency was palpable as scientists briefed delegates on 2024’s toll: Antarctic ice shelves shrinking, Amazon droughts worsening, and heatwaves killing thousands. UN Secretary-General António Guterres set the tone: *“This year was a masterclass in climate destruction—we must pay up, or humanity pays the price.”* Wealthier nations faced pressure to fund clean energy transitions in the Global South, with India and South Africa tabling bold proposals for green hydrogen and solar grids. A surprise came when China signaled openness to phased coal reductions, though fossil fuel lobbyists—over 1,500 strong—lurked in the halls, pushing carbon capture as a ‘solution.’ By mid-summit, a coalition of 50 nations vowed to triple renewable capacity by 2030, but details remained hazy.\n\nDeveloping nations stole the spotlight, demanding equity alongside action. Small island states like Vanuatu showcased their plight with virtual reality exhibits of sinking coastlines, while Nigeria’s delegation pitched a $10 billion reforestation plan. Key commitments emerged:\n\n- **Finance Boost**: G20 nations floated a $1 trillion climate fund by 2035, pending approval.\n- **Fossil Fuel Phaseout**: 30 countries signed a pact to end new coal projects by 2027.\n- **Adaptation**: $50 billion earmarked for resilient infrastructure in vulnerable regions.\n\nThese wins, though, hinged on follow-through—COP28’s promises had faltered by 15% within a year. Optimists pointed to Brazil’s upcoming COP30 hosting as a chance to lock in gains, but skeptics warned of geopolitical gridlock, especially with the U.S. delegation muted post-election.\n\n## What’s Next for Global Climate Action?\n\nAs COP29 wrapped up, the mood was cautiously hopeful yet fraught with tension. A new collective quantified goal (NCQG) on climate finance landed at $250 billion annually, a compromise that pleased few—developing nations sought $500 billion, while richer states balked at costs. The summit’s legacy may rest on 2025’s nationally determined contributions (NDCs), due in February, with Brazil and the EU promising economy-wide cuts. Grassroots voices, from Indigenous leaders to youth strikers, vowed to hold leaders accountable, citing [UNEP’s Emissions Gap Report](https://www.unep.org) warning of a 2.6°C trajectory. For now, Baku’s talks offered a lifeline—not a cure—for a planet teetering on the edge."
  },
  {
    title: "Breakthrough in Renewable Energy",
    subtitle: "Scientists announce revolutionary solar technology breakthrough, promising to double current efficiency rates and significantly reduce costs of renewable energy.",
    content: "In January 2025, a team from Stanford University unveiled a game-changing solar panel design, shattering efficiency records and igniting hope for a renewable energy boom. **The breakthrough**, dubbed ‘SolarX,’ boosts conversion rates from 22% to an astonishing 45% using a novel perovskite-tandem structure, layered with micro-lenses to trap sunlight. Announced at a packed press conference, the technology promises to halve solar energy costs within three years, dropping from $0.04 to $0.02 per kilowatt-hour. Lead researcher Dr. Elena Martinez called it a ‘moonshot moment,’ with pilot projects already lighting up rural Kenya. Industry giants like Tesla and Siemens are circling, eyeing mass production by 2026.\n\n## How SolarX Works\n\nThe science behind SolarX is as elegant as it is revolutionary. Unlike traditional silicon panels, it pairs perovskites—cheap, abundant minerals—with a silicon base, doubling photon absorption. Dr. Martinez explained: *“It’s like giving solar panels a second stomach—they digest sunlight twice as well.”* Early tests in California’s Mojave Desert clocked outputs 50% higher than top-tier competitors, even under cloudy skies. The team’s paper, published in [Nature Energy](https://www.nature.com), details how manufacturing costs plummet by skipping rare metals like silver. Environmentalists cheered, noting it could slash the 1.2 billion tons of CO2 from global coal plants if scaled fast.\n\nThe implications ripple far beyond labs. Here’s what’s at stake:\n\n1. **Energy Access**: Affordable solar could electrify 600 million off-grid homes by 2030.\n2. **Jobs Boom**: Analysts predict 5 million new green jobs in manufacturing and installation.\n3. **Grid Shift**: Utilities eye SolarX to meet soaring demand from AI data centers.\n\nGovernments took note—Germany pledged $2 billion to retrofit its solar farms, while India fast-tracked patents. Critics, though, warn of supply chain hiccups; perovskite mining lags behind demand. Still, the International Energy Agency hailed it as a ‘tipping point’ for renewables.\n\n## Challenges and the Road Ahead\n\nDespite the hype, SolarX faces hurdles before it blankets rooftops. Stability remains a kink—early panels degraded 10% after 18 months, far from the 25-year lifespan of silicon models. Researchers are tweaking chemical coatings to fix this, aiming for a 2027 commercial rollout. Meanwhile, Big Oil lobbyists are quietly pushing back, fearing a dent in fossil fuel reliance—renewables already hit 30% of global power in 2024. For rural communities and climate warriors, SolarX isn’t just tech—it’s a lifeline, promising cleaner air and cheaper bills. If Stanford’s team delivers, 2025 could mark the year solar finally outshines coal."
  },
  {
    title: "Major Diplomatic Breakthrough",
    subtitle: "Historic peace agreement signed between long-standing rival nations, marking a new era of cooperation and stability in the region.",
    content: "On February 20, 2025, a historic handshake in Geneva ended decades of hostility between rival nations Astoria and Valdoria, two fictional stand-ins for real-world foes in Eastern Europe. **The Astoria-Valdoria Accord**, brokered by the UN after 18 months of secret talks, dismantles a 70-year feud sparked by border disputes and Cold War proxies. Signed amid cheers and tears, it commits both to demilitarize a 50-mile buffer zone, open trade, and co-manage the Velka River’s hydropower. UN Secretary-General Guterres hailed it as ‘a beacon of hope,’ with Astorian President Elena Kovač and Valdorian Premier Marko Dragic vowing to bury the hatchet. The deal’s ink was barely dry before markets surged 8% in both capitals.\n\n## Roots of Reconciliation\n\nThe path to peace was thorny, paved with bloodshed and mistrust—over 200,000 died in their 1990s war. Mediator Anna Lindstrom of Norway shared the turning point: *“They realized war’s cost outweighed pride—water shortages hit both last summer.”* Talks kicked off in 2023 after a youth-led ‘Peace Now’ movement flooded social media, pressuring leaders to negotiate. Key concessions included Astoria ceding a disputed valley and Valdoria dropping reparations claims. A joint commission will oversee compliance, with [UN Peacekeeping](https://peacekeeping.un.org) deploying 2,000 troops by March. Analysts see this as a model for other frozen conflicts, from Cyprus to Korea.\n\nThe accord’s dividends are already tangible. Within days, cross-border rail resumed, and Valdorian tech firms inked deals with Astorian startups. Citizens shared priorities for the new era:\n\n- **Trade**: Open markets could boost GDP by 15% in five years.\n- **Energy**: A shared dam project aims to power 3 million homes.\n- **Healing**: Truth commissions will address war crimes, starting June.\n\nSkeptics warn of spoilers—hardliners in both parliaments grumble about ‘surrender.’ Yet, a joint cultural festival in April signals goodwill, with poets and singers bridging old divides.\n\n## A Fragile Future?\n\nStability hangs in the balance as both nations pivot from rivalry to partnership. The accord’s success hinges on economic wins—unemployment, at 20% in Valdoria, needs tackling fast. International aid, including $5 billion from the EU, will fund infrastructure, but corruption scandals loom as a risk. Regionally, neighbors watch keenly; if Astoria and Valdoria thrive, it could thaw tensions elsewhere. For now, citizens like Astorian farmer Mila Petrović savor peace: ‘I’ll sleep without hearing drones.’ The world hopes this détente holds, proving diplomacy can still triumph over division."
  },
  {
    title: "Medical Research Milestone",
    subtitle: "Researchers announce successful trials of revolutionary treatment for previously incurable disease, offering hope to millions worldwide.",
    content: "In a packed auditorium at Johns Hopkins University on February 15, 2025, researchers unveiled a breakthrough treatment for Huntington’s disease, a genetic disorder long deemed incurable. **The therapy**, called NeuroShield, uses CRISPR-edited stem cells to halt the brain’s degeneration, reversing symptoms in 80% of trial patients. After a decade of work and a $500 million push, the Phase III trials—spanning 3,000 volunteers across the U.S., UK, and Japan—showed patients regaining motor skills and memory within six months. Lead scientist Dr. Priya Anand called it ‘a new dawn,’ with the FDA fast-tracking approval for late 2025. For 36 million at-risk globally, it’s a lifeline once unthinkable.\n\n## Decoding NeuroShield’s Magic\n\nThe science is dazzling yet grounded in precision. NeuroShield targets the mutant huntingtin gene, snipping it out and replacing it with a healthy copy via a one-time IV infusion. Dr. Anand beamed: *“We’re not just slowing the disease—we’re rewriting its story.”* Trials revealed a 70% drop in toxic protein clumps in the brain, with patients like 42-year-old Sarah Kim walking unaided after years in a wheelchair. Published in [The Lancet](https://www.thelancet.com), the study notes side effects—mild fevers in 10%—pale next to gains. Big Pharma’s already bidding, with Pfizer eyeing a $10 billion rollout by 2027.\n\nThe ripple effects are profound, touching patients, families, and economies. Here’s what’s unfolding:\n\n1. **Hope Restored**: 500,000 diagnosed worldwide could access treatment by 2030.\n2. **Cost Debate**: Initial $1 million price tags spark insurance battles.\n3. **Research Boom**: Success fuels CRISPR trials for Alzheimer’s and ALS.\n\nAdvocates like Huntington’s Hope pushed for funding, while caregivers wept at the news. Critics, though, flag ethical risks—gene editing’s Pandora’s box—but regulators insist safeguards are tight.\n\n## Beyond Huntington’s\n\nNeuroShield’s win isn’t just about one disease—it’s a blueprint for tackling others. Labs are adapting it for Parkinson’s, with mice trials showing promise by December 2024. Globally, health systems brace for a shift: if costs drop, as Anand predicts, developing nations could join the revolution. Patient advocate Jamal Carter, symptom-free after 15 years, said, ‘This is my second chance.’ Meanwhile, bioethicists urge caution—unintended mutations lurk as a ghost in the machine. For now, 2025 marks a medical moon landing, with millions daring to dream of a cure once beyond reach."
  }
];

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
