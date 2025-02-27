import PostCard from "@/components/post-card";
import { LoginModal } from "./ui/login-modal";

const articles = [
  {
    title: "Breaking Down the Webb Telescope Discoveries",
    subtitle: "New insights into the early universe",
    readDuration: 180,
    avatarURL: "https://avatar.iran.liara.run/public/32",
    author: "Alex Thompson",
    email: "alex.thompson@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: false,
    content: "Since its dramatic launch on Christmas Day 2021, the James Webb Space Telescope has delivered a cosmic revolution, peering into the universe’s murky beginnings with unprecedented clarity. **Its infrared instruments**, a marvel of modern engineering, slice through clouds of interstellar dust that once obscured our view, revealing galaxies that flickered into existence just 200 million years after the Big Bang—a mere blink in cosmic time. These ancient light sources, some appearing as faint red smudges in Webb’s deep-field images, are reshaping theories about how galaxies formed and evolved in the chaotic dawn of the universe. In early 2024, astronomers announced the discovery of a galaxy dubbed JADES-GS-z14-0, clocking in at 13.5 billion light-years away, making it the most distant object ever observed. This finding suggests that massive stellar structures coalesced far more rapidly than models predicted, prompting heated debates at conferences worldwide. Scientists are now scrambling to recalibrate simulations, blending Webb’s data with cutting-edge AI to map the early cosmos in finer detail than ever before.\n\nBeyond distant galaxies, the telescope is unraveling some of the universe’s most perplexing mysteries, from black holes to potential alien worlds. Here’s what Dr. Jane Holt, a lead researcher at Caltech, had to say:\n\n> “This is like a time machine on steroids. Every image we get peels back another layer of the universe’s story, and we’re just starting to read the fine print.”\n\nWebb’s observations of supermassive black holes at the hearts of early galaxies reveal they may have seeded star formation rather than simply devouring matter—an unexpected twist that’s upending conventional astrophysics. Meanwhile, its spectrographs have analyzed the atmospheres of exoplanets like TRAPPIST-1e, detecting traces of water vapor and methane that hint at conditions suitable for life, though nothing’s conclusive yet. A standout moment came in late 2024 when Webb imaged a protoplanetary disk around a young star 1,000 light-years away, capturing the birth of planets in vivid detail—rings of dust and gas swirling into embryonic worlds. These revelations aren’t just scientific wins; they’re cultural touchstones, sparking documentaries, podcasts, and even art exhibits inspired by the telescope’s hauntingly beautiful snapshots of cosmic history.\n\nThe ripple effects of Webb’s mission are only starting to unfold, promising to reshape our grasp of existence itself. **Data releases in 2025** are expected to refine measurements of the universe’s expansion rate, a contentious figure that could resolve whether we’re headed for a ‘Big Freeze’ or a ‘Big Crunch’ billions of years from now. Dark matter, that invisible glue holding galaxies together, is another target—Webb’s gravitational lensing studies are hinting at its distribution in ways the Hubble Space Telescope never could. On Earth, the telescope’s success has galvanized public imagination, with over 10 million people tuning into NASA’s live streams of its latest images, a testament to its ability to connect the arcane to the everyday. International collaborations are gearing up too, with observatories in Chile and Hawaii syncing their efforts to cross-validate Webb’s findings, ensuring no stone—or star—is left unturned. Costing $10 billion and decades of human ingenuity, this orbiting eye in the sky is proving that the early universe isn’t just a distant past—it’s a living story we’re still learning to read."
  },
  {
    title: "The Changing Dynamics of Indo-Pacific Relations",
    subtitle: "Analysis of regional geopolitical shifts",
    readDuration: 240,
    avatarURL: "https://avatar.iran.liara.run/public/54",
    author: "Sarah Chen",
    email: "sarah.chen@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: true,
    content: "The Indo-Pacific has emerged as the world’s geopolitical crucible, where economic ambition and military might collide in a high-stakes drama. **China’s Belt and Road Initiative**, a trillion-dollar web of infrastructure projects, has stitched its influence across Southeast Asia, from ports in Sri Lanka to highways in Laos, aiming to cement Beijing’s role as the region’s economic linchpin. Its navy, now boasting over 350 ships, patrols the South China Sea with growing boldness, claiming reefs and waters contested by Vietnam and the Philippines, often sparking tense standoffs over fishing rights and oil reserves. In counterpoint, the Quad alliance—uniting the U.S., Japan, Australia, and India—has flexed its muscles with joint naval drills stretching from the Indian Ocean to the Pacific, a clear signal they won’t cede control of these vital arteries. These waterways carry 60% of global trade, including oil tankers and container ships that fuel economies worldwide, making the region a linchpin of 21st-century prosperity—and a potential powder keg.\n\nIndia’s ascent adds a thrilling subplot to this unfolding saga, balancing tradition with ambition on a global stage. Analyst Rajiv Patel captures it well: *“The Indo-Pacific is a chessboard, and India’s the rising queen,”* a nod to its growing clout. With a tech industry rivaling Silicon Valley and a navy commissioning its second aircraft carrier in 2024, New Delhi is no longer a bystander but a power broker, courted by both East and West. Smaller players like Indonesia and Malaysia, meanwhile, are threading a needle—welcoming Chinese investment in bridges and railways while quietly bolstering ties with the U.S. to hedge their bets. Climate change looms large too, as rising seas threaten low-lying nations like the Maldives, forcing leaders to negotiate resource-sharing pacts amid fears of mass migration. This intricate dance of diplomacy and deterrence is playing out against a backdrop of cultural diversity and historical rivalries, making every move a calculated risk with global repercussions.\n\nAs 2025 dawns, the region teeters on a knife-edge, with flashpoints testing the limits of cooperation. **A late-2024 incident** near Taiwan saw a U.S. carrier group tail Chinese warships for 72 hours, a silent showdown that rattled markets and drew fiery editorials from Beijing to Washington. Here are some key tensions heating up:\n\n- **Tech Wars**: Japan and South Korea race to onshore semiconductor production, countering China’s grip on rare earths.\n- **Military Moves**: Australia’s AUKUS submarines stoke France’s ire but bolster Pacific deterrence.\n- **Diplomacy**: ASEAN pushes a maritime code of conduct, yet progress stalls amid distrust.\n\nAnalysts see this as a defining moment: will the Indo-Pacific forge a new era of collaboration, perhaps through climate-focused summits, or descend into Cold War-style blocs? For now, the world holds its breath, knowing this region’s fate will echo far beyond its shores."
  },
  {
    title: "Formula 1: Evolution of Racing Technology",
    subtitle: "How engineering shapes modern motorsports",
    readDuration: 150,
    avatarURL: "https://avatar.iran.liara.run/public/26",
    author: "Michael Rodriguez",
    email: "michael.rodriguez@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1609013304225-26a1b84ac180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: false,
    content: "Formula 1 has morphed from a daredevil’s playground into a laboratory on wheels, where engineering ingenuity dictates who conquers the podium. **The 2022 regulation shakeup** brought back ground-effect aerodynamics, a throwback to the 1980s but reimagined with modern precision, letting cars slice through air with less turbulence and boosting overtaking by a thrilling 20%. Teams like Mercedes and Red Bull wield AI supercomputers to run millions of simulations, tweaking everything from wing angles to suspension geometry before a prototype even hits the wind tunnel. Today’s cars, clocking speeds north of 220 mph, blend hybrid powertrains with turbocharged engines, slashing emissions compared to the gas-guzzling V8s of yesteryear. Safety’s a priority too—carbon-fiber monocoques and halo devices have turned high-speed wrecks from death sentences into walkaways, a testament to decades of relentless innovation.\n\nThe tech doesn’t stop at the car’s skin—it’s a symphony of data and adaptability pulsing through every race. McLaren engineer Luca Bianchi sums it up: *“It’s not just speed—it’s science fiction made real,”* a sentiment echoed in the pit lane. During a Grand Prix, telemetry beams over 300 gigabytes of data per car—tire pressure, brake temps, even the driver’s heart rate—letting pit crews fine-tune strategies mid-lap with surgical precision. The 2025 season will roll out biofuels sourced from agricultural waste, cutting the sport’s carbon footprint by 30% as part of a bold 2030 net-zero goal. Materials science plays a starring role too: titanium exhausts withstand blistering heat, while graphene-infused composites trim weight without sacrificing strength. This isn’t just racing—it’s a proving ground where split-second decisions and bleeding-edge tech turn drivers into cyborgs of the track.\n\nThe impact of F1’s tech obsession reverberates far beyond the checkered flag, reshaping industries and captivating fans. **Carmakers like Porsche** are cherry-picking innovations—think kinetic energy recovery systems now trickling into electric roadsters, or aerodynamic tricks boosting fuel efficiency in SUVs. The fan experience has evolved too: apps sync with live data, letting armchair engineers dissect lap times and pit stops like pros, driving TV ratings to new highs. Critics, though, lament that the sport’s soul—raw, roaring chaos—is being polished away by sterile tech wizardry, a debate that flares up on forums and podcasts weekly. Yet, as F1 gears up for its next chapter, with VR broadcasts and sustainable circuits on the horizon, it’s clear this isn’t just about who wins—it’s about pushing human and machine to the edge, then redefining where that edge lies."
  },
  {
    title: "Climate Change: Arctic Ice Recovery Patterns",
    subtitle: "Latest research on polar climate trends",
    readDuration: 120,
    avatarURL: "https://avatar.iran.liara.run/public/84",
    author: "Emma Wilson",
    email: "emma.wilson@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: true,
    content: "The Arctic is whispering tales of resilience amid a warming world, with glimmers of ice recovery stirring hope and confusion among scientists. **Data from 2024 satellites** shows a surprising 5% bump in summer ice cover near Greenland, a patch of white defying the relentless melt that’s stripped 13% of the region’s ice per decade since the 1970s. Researchers pin this on quirks in the North Atlantic Oscillation, a weather pattern that’s funneled colder currents and whipped up winds to pile ice into thicker stacks. But it’s not all good news—elsewhere, like the Chukchi Sea, ice is vanishing faster than ever, leaving polar bears stranded and shipping lanes eerily open. Teams from NOAA and the European Space Agency are poring over terabytes of data, trying to tease out whether this is a freak blip or a sign the Arctic might claw back some of its frozen past.\n\nZoom in, and the picture grows more tangled, a mosaic of loss and adaptation playing out beneath the ice. Climatologist Dr. Olaf Svensson warns: *“Nature’s tough, but it’s hanging by a thread,”* a sobering take from someone who’s tracked polar shifts for two decades. Methane plumes are bubbling up from thawing permafrost near Siberia, a greenhouse gas bomb that could dwarf CO2’s impact and turn any ice gains into a cruel mirage. Meanwhile, plankton blooms are shifting with warmer waters, rippling up the food chain to walruses and whales, while indigenous hunters report ice too thin to cross safely. A 2024 expedition found microplastics embedded in newly formed ice, a stark reminder of humanity’s fingerprint even in Earth’s wildest corners. The Arctic Council’s next report, due in 2025, will lean on AI to model these contradictions, hoping to predict if recovery can hold—or if it’s just the calm before a bigger collapse.\n\nStep back, and the Arctic’s fleeting rebound is a footnote in a dire global saga, a warning wrapped in a riddle. Here’s what’s at stake:\n\n- **Emissions**: 2024 saw 41 billion tons of CO2 from coal and deforestation, dwarfing any ice recovery.\n- **Shipping**: New routes risk oil spills in pristine waters, a boon turned curse.\n- **Communities**: Inuit traditions fade as ice retreats, mirroring Pacific island woes.\n\nScientists stress this isn’t redemption—it’s a statistical hiccup in a meltdown that’s already locked in decades of warming. As research vessels gear up for another harsh winter, the Arctic remains a fragile frontline, pleading for action before its white expanse becomes a memory."
  },
  {
    title: "The Rise of Women's Football",
    subtitle: "Changing landscape in professional sports",
    readDuration: 200,
    avatarURL: "https://avatar.iran.liara.run/public/5",
    author: "James Parker",
    email: "james.parker@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: true,
    content: "Women’s football has stormed onto the global stage, shattering ceilings and rewriting the rules of professional sports with every thunderous goal. **The 2023 FIFA Women’s World Cup** was a watershed, drawing 1.9 million fans to stadiums from Sydney to Auckland and beaming matches to over 2 billion viewers—numbers that dwarfed some men’s tournaments and silenced doubters. Leagues like England’s WSL have exploded, with average crowds leaping from 1,000 in 2018 to over 15,000 in 2024, fueled by icons like Vivianne Miedema and Megan Rapinoe, whose flair and activism have turned games into cultural events. Sponsorships are flooding in—Adidas and Visa have inked multimillion-dollar deals—pushing revenues up 300% in five years, while grassroots clubs report girls’ signups doubling in places like Nigeria and Sweden. This isn’t a trend; it’s a tidal wave, proving women’s football is no longer the underdog but a powerhouse in its own right.\n\nBehind the roar of the crowds lies a revolution in equity and ambition, though the fight’s far from won. Coach Maria Gomez of Barcelona Femení puts it bluntly: *“It’s not just sport—it’s a reckoning,”* a call to arms for a game long sidelined. Pioneers like Brazil’s Marta have inspired academies from São Paulo to Seoul, where young girls now dream of packed stadiums, not just playground kicks. Yet, the pay gap yawns wide—top women earn $400,000 a year while men like Neymar rake in $70 million, a disparity that’s sparked fiery campaigns like #EqualGame, backed by stars and fans alike. Broadcast deals are leveling up, with ESPN and BBC pouring resources into coverage, but facilities lag—many teams still share muddy pitches with amateurs. This surge is about more than goals; it’s about dismantling decades of neglect and building a legacy that mirrors the sport’s soaring popularity.\n\nThe horizon for women’s football glows with promise, as 2025 looms as a pivotal year. **UEFA’s inaugural Women’s Club World Cup** will pit giants like Lyon against rising squads from South Africa and Japan, a global showdown set to debut in June and stream to millions via platforms like DAZN. Prize money’s climbing—FIFA’s pledged $150 million for the next World Cup, up from $40 million in 2019—while initiatives like Australia’s ‘Matildas Effect’ funnel cash into youth leagues, ensuring talent pipelines run deep. For fans, it’s a feast: watching players like England’s Leah Williamson orchestrate defenses or Colombia’s Linda Caicedo weave through backlines is pure poetry in motion. Critics still mutter about ‘marketability,’ but the sold-out finals and viral highlight reels beg to differ. Women’s football isn’t just rising—it’s remaking sports into something fiercer, fairer, and unapologetically its own."
  },
  {
    title: "Breakthrough in Quantum Computing",
    subtitle: "Recent advances in quantum error correction",
    readDuration: 160,
    avatarURL: "https://avatar.iran.liara.run/public/58",
    author: "Lisa Kumar",
    email: "lisa.kumar@peakpost.com",
    backgroundURL: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    isMembersOnly: false,
    content: "Quantum computing took a giant leap in 2025, cracking a puzzle that’s stumped scientists for decades: how to tame the wild qubits at its core. **MIT’s breakthrough** slashed error rates by 50%, thanks to a revamped error-correction technique that steadies these quantum bits—units that dance between 0 and 1 in ways classical bits can’t dream of. Unlike traditional computers plodding through linear calculations, quantum systems exploit superposition and entanglement, offering the horsepower to solve problems like protein folding or climate modeling in hours instead of centuries. The team’s ‘surface code 2.0’ uses fewer physical qubits to anchor data, a tweak that’s cut the noise plaguing earlier experiments. Announced at a packed conference in Boston, this milestone has tech giants and startups alike racing to build machines that could outthink anything silicon-based in our lifetimes.\n\nThe stakes are sky-high, and the players are all-in, turning labs into battlegrounds for the next digital frontier. Dr. Alan Chen, the MIT physicist who spearheaded the project, captures the excitement: *“This is the brink of a revolution—buckle up,”* a rallying cry for a field on fire. Google’s Sycamore chip already flexed its muscles in 2019, claiming ‘quantum supremacy’ on a contrived task, but IBM’s betting on its Eagle processor to scale up for real-world wins by 2026. The promise? Imagine drug companies designing molecules atom-by-atom in a day, or cryptographers forging codes no supercomputer could crack—applications that sound like sci-fi but are inching closer. Governments are watching too: China’s poured $10 billion into its quantum program, while the U.S. countered with a $1.2 billion boost in 2025, fearing a lag could cede economic and security edges. It’s a high-wire act of physics and ambition, with each advance peeling back the impossible.\n\nStill, quantum’s not ready to ditch your laptop—the road ahead is littered with hurdles and hype. Here’s a rundown of the challenges:\n\n1. **Cooling**: Qubits need -459°F, a costly feat limiting setups to labs.\n2. **Cost**: Building a quantum rig runs millions, far from consumer reach.\n3. **Scale**: MIT’s tweak cuts qubit needs, but thousands are still required.\n\nCompanies like Rigetti and IonQ are hustling to miniaturize, but critics warn the buzz could outpace reality—think dot-com bubble, but with more math. Everyday uses might be a decade off, yet the groundwork’s electric: Wall Street’s betting big, with venture capital flooding quantum startups, while universities churn out PhDs to meet demand. Whether it’s cracking climate riddles or rewriting encryption, quantum computing’s no longer a distant dream—it’s a ticking clock, and 2025 just wound it tighter."
  }
];

export default function ArticleList() {
  return (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        {articles.map((article, index) => (
          article.isMembersOnly ? (
            <LoginModal key={index}>
              <div className="flex flex-wrap justify-center w-full">
                <PostCard article={article} />
              </div>
            </LoginModal>) : (
            <div key={index} className="flex flex-wrap justify-center w-full md:w-1/3 lg:w-1/4">
              <PostCard article={article} />
            </div>
          )
        ))}
      </div>
    </>
  )
}