import { FC, memo } from 'react';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';
import Link from 'next/link';

const heroImage = "/images/headerbackground.webp";

const stockFootageCategories = [
  { name: 'travel', displayName: 'Travel' },
  { name: 'nature', displayName: 'Nature' },
  { name: 'urban', displayName: 'Urban' },
  { name: 'wildlife', displayName: 'Wildlife' },
];

const StockFootage: FC = memo(() => {
  return (
    <Page description="Explore high-quality stock footage" title="Stock Footage">
      {/* Background Image */}
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        {/* Overlay with Blur */}
        <div
          className="flex-1 relative"
          style={{
            backgroundColor: 'rgba(2, 2, 2, 0.4)',
            backdropFilter: 'blur(17.5px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {/* Content */}
          <PluginsHeader />
          <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
          <main className="container mx-auto py-8 px-4 lg:px-8">
            <section className="py-12 text-center text-white">
              <h1 className="text-4xl font-bold lg:text-4xl mb-4">Stock Footage</h1>
            </section>

            {/* Categories Section */}
            <section className="py-8 text-center">
              <p className="text-lg text-white lg:text-xl max-w-3xl mx-auto">
                Discover stunning content for your projects within my curated categories of stock footage. Individual file purchase is available.
              </p>
              <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
              <div className="flex justify-center mt-6">
                <button
                  className="py-2 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transform transition-transform hover:scale-105"
                >
                  Purchase the FULL stock footage Collection for $149.99
                </button>
              </div>
              <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {stockFootageCategories.map((category) => (
                  <Link key={category.name} href={`/stock-footage/${category.name}`} passHref>
                    <div className="cursor-pointer block bg-black/50 hover:bg-black/70 text-white text-center p-6 rounded-lg shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold capitalize">{category.displayName}</h3>
                      <p className="text-sm mt-2">Explore {category.displayName} stock footage</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </Page>
  );
});

StockFootage.displayName = 'StockFootage';
export default StockFootage;
