import { FC, memo } from 'react';
import { useRouter } from 'next/router';
import Page from '../../src/components/Layout/Page';
import Footer from '../../src/components/Sections/Footer';
import PluginsHeader from '../../src/components/Sections/PluginsHeader';

const heroImage = "/images/headerbackground.webp";

const stockCategories = [
  { id: 1, name: 'Travel', slug: 'travel' },
  { id: 2, name: 'Nature', slug: 'nature' },
  { id: 3, name: 'Urban', slug: 'urban' },
  { id: 4, name: 'Wildlife', slug: 'wildlife' },
  { id: 5, name: 'Aerial', slug: 'aerial' },
];

const StockFootageIndex: FC = memo(() => {
  const router = useRouter();

  return (
    <Page description="Explore stock footage categories" title="Stock Footage Categories">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />

        <main className="container mx-auto py-8 px-4 lg:px-8">
          <section className="py-12 text-center text-white">
            <h1 className="text-3xl font-bold lg:text-5xl">Stock Footage Categories</h1>
            <p className="text-lg text-gray-300 mt-2">
              Browse through our extensive stock footage collections. Click a category to explore more!
            </p>
          </section>

          <section className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stockCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => router.push(`/stock-footage/${category.slug}`)}
                  className="bg-black/50 backdrop-blur-md text-center p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300 transform hover:-translate-y-1"
                >
                  <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                  <p className="text-sm text-gray-400">Explore {category.name} stock footage</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Page>
  );
});

StockFootageIndex.displayName = 'StockFootageIndex';
export default StockFootageIndex;
