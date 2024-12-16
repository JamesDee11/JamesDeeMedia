// wallpapers.tsx
import { FC, memo, useRef } from 'react';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

const heroImage = "/images/headerbackground.jpg"

interface Wallpaper {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  aspect: 'landscape' | 'portrait';
  type: 'photo' | 'video';
}

const wallpapers: Wallpaper[] = [
  { id: 1, title: 'Landscape Photo 1', description: 'A beautiful landscape.', price: '$5.99', imageUrl: '/images/landscape1.jpg', aspect: 'landscape', type: 'photo' },
  { id: 2, title: 'Landscape Photo 2', description: 'Another stunning landscape.', price: '$5.99', imageUrl: '/images/landscape2.jpg', aspect: 'landscape', type: 'photo' },
  { id: 3, title: 'Portrait Photo 1', description: 'A calming portrait.', price: '$4.99', imageUrl: '/images/portrait1.jpg', aspect: 'portrait', type: 'photo' },
  { id: 4, title: 'Portrait Photo 2', description: 'Another beautiful portrait.', price: '$4.99', imageUrl: '/images/portrait2.jpg', aspect: 'portrait', type: 'photo' },
  { id: 5, title: 'Portrait Photo 3', description: 'A serene portrait.', price: '$4.99', imageUrl: '/images/portrait3.jpg', aspect: 'portrait', type: 'photo' },
  { id: 6, title: 'Portrait Photo 4', description: 'A vibrant portrait.', price: '$4.99', imageUrl: '/images/portrait4.jpg', aspect: 'portrait', type: 'photo' },
  { id: 7, title: 'Landscape Video 1', description: 'A dynamic landscape video.', price: '$6.99', imageUrl: '/videos/landscape1.mp4', aspect: 'landscape', type: 'video' },
  { id: 8, title: 'Landscape Video 2', description: 'Another scenic landscape video.', price: '$6.99', imageUrl: '/videos/landscape2.mp4', aspect: 'landscape', type: 'video' },
  { id: 9, title: 'Portrait Video 1', description: 'A beautiful portrait video.', price: '$6.99', imageUrl: '/videos/portrait1.mp4', aspect: 'portrait', type: 'video' },
  { id: 10, title: 'Portrait Video 2', description: 'Another stunning portrait video.', price: '$6.99', imageUrl: '/videos/portrait2.mp4', aspect: 'portrait', type: 'video' },
  { id: 11, title: 'Portrait Video 3', description: 'A breathtaking portrait video.', price: '$6.99', imageUrl: '/videos/portrait3.mp4', aspect: 'portrait', type: 'video' },
  { id: 12, title: 'Portrait Video 4', description: 'A dynamic portrait video.', price: '$6.99', imageUrl: '/videos/portrait4.mp4', aspect: 'portrait', type: 'video' },
];

const Wallpapers: FC = memo(() => {
  return (
    <Page description="Explore stunning wallpapers!" title="Portfolio">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />

        <main className="w-full py-8 px-4 lg:px-8">
          <section className="relative z-10 pt-20 pb-12 text-center text-white">
            <p className="text-2xl font-semibold lg:text-3xl">
            </p>
          </section>

          <section className="py-8">    
            <h2 className="text-4xl font-bold text-center underline mb-12 text-white">
              Wallpapers Pack
            </h2>  <section className="py-8 text-center">
  <button
    className="py-4 px-8 bg-transparent rounded-lg text-lg font-bold hover:bg-red-500"
    style={{ color: '#FF0000', border: '4px solid #FF0000' }}
  >
    Purchase the Wallpaper Pack for $4.99
  </button>
</section>  <h1 className="text-sm mb-2">
  &#8203;
</h1>   
            <div className="grid grid-cols-1 gap-6 max-w-none">
              {/* 2 Landscape Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {wallpapers
                  .filter((wallpaper) => wallpaper.aspect === 'landscape')
                  .slice(0, 2)
                  .map((wallpaper) => (
                    <div key={wallpaper.id} className="w-full">
                      <PortfolioMedia item={wallpaper} />
                    </div>
                  ))}
              </div>

              {/* 4 Portrait Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
                {wallpapers
                  .filter((wallpaper) => wallpaper.aspect === 'portrait')
                  .slice(0, 4)
                  .map((wallpaper) => (
                    <div key={wallpaper.id} className="w-full">
                      <PortfolioMedia item={wallpaper} />
                    </div>
                  ))}
              </div>

              {/* 2 More Landscape Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                {wallpapers
                  .filter((wallpaper) => wallpaper.aspect === 'landscape')
                  .slice(2, 4)
                  .map((wallpaper) => (
                    <div key={wallpaper.id} className="w-full">
                      <PortfolioMedia item={wallpaper} />
                    </div>
                  ))}
              </div>

              {/* 4 More Portrait Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
                {wallpapers
                  .filter((wallpaper) => wallpaper.aspect === 'portrait')
                  .slice(4, 8)
                  .map((wallpaper) => (
                    <div key={wallpaper.id} className="w-full">
                      <PortfolioMedia item={wallpaper} />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Page>
  );
});

const PortfolioMedia: FC<{ item: Wallpaper }> = memo(({ item }) => {
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

export default Wallpapers;
