import { FC, memo, useRef } from 'react';
import { useRouter } from 'next/router';
import Page from '../../src/components/Layout/Page';
import Footer from '../../src/components/Sections/Footer';
import PluginsHeader from '../../src/components/Sections/PluginsHeader';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import stockFootageData from '../../src/data/stockfootagedata';

const heroImage = "/images/headerbackground.webp"

const PortfolioMedia: FC<{ item: any }> = memo(({ item }) => {
  const { title, description, imageUrl, aspect, type } = item;
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);

  return (
    <div
      className={classNames(
        'relative w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl'
      )}
      style={{
        aspectRatio: aspect === 'portrait' ? '9 / 16' : '16 / 9',
      }}
    >
      {type === 'video' ? (
        <video
          ref={mediaRef as React.Ref<HTMLVideoElement>}
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
          muted
          autoPlay
          loop
          playsInline
        />
      ) : (
        <img
          ref={mediaRef as React.Ref<HTMLImageElement>}
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      )}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100"
      >
        <div className="text-center text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-4 right-4 h-6 w-6 text-white" />
      </a>
    </div>
  );
});

PortfolioMedia.displayName = 'PortfolioMedia';

const StockFootageCategory: FC = memo(() => {
  const router = useRouter();
  const { slug } = router.query;

  const category = stockFootageData.find((category) => category.slug === slug);

  if (!category) {
    return (
      <Page description="Category not found" title="404 - Category Not Found">
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <h1 className="text-4xl">Category Not Found</h1>
        </div>
      </Page>
    );
  }

  return (
    <Page description={category.description} title={`${category.name} Stock Footage`}>
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />
        <div className="flex-1 bg-black/50 backdrop-blur-md">
          <main className="container mx-auto py-8 px-4 lg:px-8">
            {/* Hero Section */}
            <section className="py-12 text-center text-white">    <h1 className="text-sm mb-2">
  &#8203;
</h1>    <h1 className="text-sm mb-2">
  &#8203;
</h1>
              <h1 className="text-4xl font-bold lg:text-5xl mb-4">{category.name} Stock Footage</h1>
              <p className="text-lg lg:text-xl max-w-3xl mx-auto">{category.description}</p>
            </section>

            {/* Detailed Description */}
            <section className="py-8">
              <div className="text-white space-y-6">
                <h2 className="text-3xl font-bold">About the Collection</h2>
                <p>{category.detailedDescription}</p>
                <ul className="list-disc pl-5 space-y-4">
                  {category.highlights.map((highlight, index) => (
                    <li key={index} className="text-white">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-8">
              <h2 className="text-3xl font-bold text-white mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <PortfolioMedia key={item.id} item={item} />
                ))}
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </Page>
  );
});

StockFootageCategory.displayName = 'StockFootageCategory';
export default StockFootageCategory;
