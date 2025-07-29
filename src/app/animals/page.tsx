import Link from 'next/link';
import Image from 'next/image';

type AnimalCard = {
  name: string;
  slug: string;
  img: string;
};

const animals: AnimalCard[] = [
  { name: 'Dolphin', slug: 'dolphin', img: '/animals/dolphin/dolphin.jpg' },
  { name: 'Octopus', slug: 'octopus', img: '/animals/octopus/octopus.jpg' },
  { name: 'Whale', slug: 'whale', img: '/animals/whale/whale.jpg' },
];

export default function AnimalsPage() {
  return (
    <main className="p-8">
      {/* Back Button */}
      <Link 
        href="/" 
        className="inline-flex items-center mb-6 text-purple-300 border border-purple-400 px-3 py-1 rounded hover:bg-purple-700/20 transition"
      >
        <span className="mr-2 text-lg">&#8592;</span> 
        Back to Home
      </Link>

      {/* Animal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <Link 
            href={`/animals/${animal.slug}`} 
            key={animal.slug}
            className="group"
          >
            <div className="border rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={animal.img}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-xl font-semibold text-center bg-white/5">
                {animal.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}