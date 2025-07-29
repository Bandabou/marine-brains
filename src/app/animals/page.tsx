import Link from 'next/link';
import Image from 'next/image';

const animals = [
  { name: 'Dolphin', slug: 'dolphin', img: '/animals/dolphin/dolphin.jpg' },
  { name: 'Octopus', slug: 'octopus', img: '/animals/octopus.jpg' },
  { name: 'Whale', slug: 'whale', img: '/animals/whale.jpg' },
];

export default function AnimalsPage() {
  return (
    <main className="p-8">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center mb-6 text-purple-300 border border-purple-400 px-3 py-1 rounded hover:bg-purple-700/20 transition">
        {/* Left arrow Unicode */}
        <span className="mr-2 text-lg">&#8592;</span> 
        Back to Home
      </Link>

      {/* Grid of animals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <Link href={`/animals/${animal.slug}`} key={animal.slug}>
            <div className="border rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden">
              <Image
                src={animal.img}
                alt={animal.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-xl font-semibold text-center">
                {animal.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
