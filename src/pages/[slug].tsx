import { FixedNavbar } from '@/components/navbar';
import { MembersChip } from '../components/members-chip';
import { useRouter } from 'next/router';


export default function ArticleDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <FixedNavbar />
      <div className="flex flex-wrap gap-x-2 gap-y-6 p-6 justify-center">
        <div className="basis-[85%] sm:basis-[72%]">
          <h1 className="text-5xl font-bold italic">
            Article Title {slug}
          </h1>
          <p className="text-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <p className="text-sm mt-4 text-gray-300">
            Author &nbsp;●&nbsp; December 12, 2025 &nbsp;●&nbsp; <MembersChip />
          </p>

          <section className='mt-4 text-justify text-md'>
            <div>
              Since its dramatic launch on Christmas Day 2021, the James Webb Space Telescope has delivered a cosmic revolution, peering into the universe’s murky beginnings with unprecedented clarity. **Its infrared instruments**, a marvel of modern engineering, slice through clouds of interstellar dust that once obscured our view, revealing galaxies that flickered into existence just 200 million years after the Big Bang—a mere blink in cosmic time. These ancient light sources, some appearing as faint red smudges in Webb’s deep-field images, are reshaping theories about how galaxies formed and evolved in the chaotic dawn of the universe. In early 2024, astronomers announced the discovery of a galaxy dubbed JADES-GS-z14-0, clocking in at 13.5 billion light-years away, making it the most distant object ever observed. This finding suggests that massive stellar structures coalesced far more rapidly than models predicted, prompting heated debates at conferences worldwide. Scientists are now scrambling to recalibrate simulations, blending Webb’s data with cutting-edge AI to map the early cosmos in finer detail than ever before.\n\nBeyond distant galaxies, the telescope is unraveling some of the universe’s most perplexing mysteries, from black holes to potential alien worlds. Here’s what Dr. Jane Holt, a lead researcher at Caltech, had to say:\n\n> “This is like a time machine on steroids. Every image we get peels back another layer of the universe’s story, and we’re just starting to read the fine print.”\n\nWebb’s observations of supermassive black holes at the hearts of early galaxies reveal they may have seeded star formation rather than simply devouring matter—an unexpected twist that’s upending conventional astrophysics. Meanwhile, its spectrographs have analyzed the atmospheres of exoplanets like TRAPPIST-1e, detecting traces of water vapor and methane that hint at conditions suitable for life, though nothing’s conclusive yet. A standout moment came in late 2024 when Webb imaged a protoplanetary disk around a young star 1,000 light-years away, capturing the birth of planets in vivid detail—rings of dust and gas swirling into embryonic worlds. These revelations aren’t just scientific wins; they’re cultural touchstones, sparking documentaries, podcasts, and even art exhibits inspired by the telescope’s hauntingly beautiful snapshots of cosmic history.\n\nThe ripple effects of Webb’s mission are only starting to unfold, promising to reshape our grasp of existence itself. **Data releases in 2025** are expected to refine measurements of the universe’s expansion rate, a contentious figure that could resolve whether we’re headed for a ‘Big Freeze’ or a ‘Big Crunch’ billions of years from now. Dark matter, that invisible glue holding galaxies together, is another target—Webb’s gravitational lensing studies are hinting at its distribution in ways the Hubble Space Telescope never could. On Earth, the telescope’s success has galvanized public imagination, with over 10 million people tuning into NASA’s live streams of its latest images, a testament to its ability to connect the arcane to the everyday. International collaborations are gearing up too, with observatories in Chile and Hawaii syncing their efforts to cross-validate Webb’s findings, ensuring no stone—or star—is left unturned. Costing $10 billion and decades of human ingenuity, this orbiting eye in the sky is proving that the early universe isn’t just a distant past—it’s a living story we’re still learning to read.
            </div>
          </section>
        </div>
      </div>
    </>
  )
}