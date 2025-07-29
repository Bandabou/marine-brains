// app/animals/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const animalData = {
  dolphin: {
    name: 'Dolphin',
    image: '/animals/dolphin/dolphin_page.jpg',
    scientificName: 'Delphinidae',
    overview:
      'Dolphins are highly social and intelligent marine mammals. They are known for their complex communication and problem-solving skills.',
    brainAnatomy:
      'Dolphins have a large brain-to-body ratio and a highly convoluted neocortex, which is linked to advanced cognitive abilities.',
    behavior:
      'They use echolocation, display self-awareness, and even exhibit cultural behaviors passed through generations.',
    funFact:
      'Some dolphins have been observed calling each other by unique “signature whistles” — like names!',
  },
  octopus: {
    name: 'Octopus',
    image: '/animals/octopus/octopus_page.jpg',
    scientificName: 'Octopoda',
    overview:
      'Octopuses are solitary, highly intelligent mollusks with complex nervous systems. They’re masters of disguise and problem-solving.',
    brainAnatomy:
      'Two-thirds of an octopus’s neurons are in its arms, allowing each arm to act semi-independently — almost like having 8 mini-brains.',
    behavior:
      'They use tools, escape enclosures, open jars, and even decorate their dens — behaviors rarely seen in invertebrates.',
    funFact:
      'Octopuses can change both the color and texture of their skin using specialized cells called chromatophores and papillae!',
  },
  whale: {
    name: 'Whale',
    image: '/animals/whale/whale_page.jpg',
    scientificName: 'Cetacea',
    overview:
      'Whales are the largest mammals on Earth, known for their long migrations, deep dives, and complex vocalizations.',
    brainAnatomy:
      'Whales have large brains with advanced limbic systems, potentially linked to complex emotions, empathy, and social bonding.',
    behavior:
      'They sing intricate songs, form lifelong family bonds, and some species even pass cultural knowledge across generations.',
    funFact:
      'The blue whale’s brain weighs around 15 pounds, yet it feeds mostly on tiny krill — talk about brain vs. brawn!',
  },
};

type PageProps = {
  params: { slug: string };  // <-- Not a Promise
};

export default async function AnimalPage({ params }: PageProps) {
  const slug = params.slug;

  const animal = animalData[slug as keyof typeof animalData];

  if (!animal) {
    return <div className="text-white p-8">Animal not found</div>;
  }

  return (
    <main className="text-white px-6 py-10 max-w-4xl mx-auto">
      <Link
        href="/animals"
        className="inline-block mb-4 text-purple-300 border border-purple-400 px-3 py-1 rounded hover:bg-purple-700/20 transition"
      >
        ← Back
      </Link>

      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">{animal.name}</h1>
          <p className="italic text-lg">{animal.scientificName}</p>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">{animal.overview}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Brain Anatomy</h2>
        <p className="text-gray-300">{animal.brainAnatomy}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Behavior & Intelligence</h2>
        <p className="text-gray-300">{animal.behavior}</p>
      </section>

      <section className="mb-10 p-4 border-l-4 border-purple-500 bg-purple-900/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-1">Did you know?</h3>
        <p className="text-purple-200">{animal.funFact}</p>
      </section>
    </main>
  );
}
