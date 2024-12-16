import { FC, memo } from 'react';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';

const heroImage = "/images/headerbackground.webp"

const LUTPack: FC = memo(() => {
  return (
    <Page description="Enhance your visuals with our Cinematic LUT Pack" title="LUT Pack">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />

        {/* Background Wrapper */}
        <div className="flex-1 bg-black/50 backdrop-blur-md">
          {/* Content Wrapper */}
          <main className="container mx-auto py-8 px-4 lg:px-8">
            {/* Hero Section */}
            <section className="py-12 text-center text-white">
            <h1 className="text-sm mb-2">
  &#8203;
</h1>
<h1 className="text-sm mb-2">
  &#8203;
</h1>

              <h1 className="text-4xl font-bold lg:text-5xl mb-4">Cinematic LUT Pack</h1>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

              <p className="text-lg lg:text-xl max-w-3xl mx-auto">
                Transform your videos into cinematic masterpieces with this professional-grade LUT
                pack, designed to elevate your visuals with rich, dynamic colors.
              </p>
              
<section className="py-8 text-center">
  <button
    className="py-4 px-8 bg-transparent rounded-lg text-lg font-bold hover:bg-red-500"
    style={{ color: '#FF0000', border: '4px solid #FF0000' }}
  >
    Purchase the Cinematic LUT Pack for $29.99
  </button>
</section>
            </section>

            {/* Add Gap Between Hero Section and List */}
            <div className="mb-16 text-white">
            <p>
                My <strong>Cinematic LUT Pack</strong> is a carefully curated collection of
                color-grading tools that will help you achieve stunning visuals effortlessly. These LUTs are designed to bring out the best
                in your footage, whether you're working on short films, YouTube videos, or client
                projects.
              </p>
              </div>
            {/* Content Section */}
            <section className="py-8 text-white space-y-6">
              <h2 className="text-2xl font-bold">What’s Included in the LUT Pack?</h2> 
           
              <ul className="list-disc pl-5 space-y-4">    <h1 className="text-sm mb-2">
  &#8203;
</h1>    
                <li>
                  <strong>25 unique cinematic LUTs</strong> for various styles, from warm and
                  vibrant tones to dramatic, moody aesthetics.
                </li>
                <li>
                  A detailed <strong>installation guide</strong> to help you quickly integrate LUTs
                  into your editing software (e.g., Premiere Pro, DaVinci Resolve, Final Cut Pro).
                </li>
                <li>
                  <strong>Sample before-and-after visuals</strong> to showcase the transformative
                  power of each LUT.
                </li>
                <li>
                  Optimized for <strong>all resolutions</strong> (HD, 4K, and beyond), ensuring
                  consistency across different platforms.
                </li>
              </ul>
            </section>   

            <section className="py-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Why Choose This LUT Pack?</h2>
              <p>
              </p>    
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  Save time with <strong>pre-designed looks</strong> that give your videos a
                  polished, cinematic finish without extensive color-grading work.
                </li>
                <li>
                  <strong>Versatility</strong>: Perfect for a range of projects, including weddings,
                  travel vlogs, documentaries, and commercial work.
                </li>
                <li>
                  <strong>Beginner-friendly</strong>: Even if you're new to color grading, this pack
                  makes it easy to achieve incredible results.
                </li>
                <li>
                  <strong>Tested by professionals</strong>: Each LUT has been used in real-world
                  projects to ensure quality and reliability.
                </li>
              </ul>
            </section>
            <section className="py-8 text-center">
  <button
    className="py-4 px-8 bg-transparent rounded-lg text-lg font-bold hover:bg-red-500"
    style={{ color: '#FF0000', border: '4px solid #FF0000' }}
  >
    Purchase the Cinematic LUT Pack for $29.99
  </button>
</section>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Page>
  );
});

LUTPack.displayName = 'LUTPack';
export default LUTPack;
