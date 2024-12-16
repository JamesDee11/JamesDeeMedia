import { FC, memo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';

const heroImage = "/images/headerbackground.webp"

interface Plugin {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  rating: number; // Rating from 0 to 5
  reviews: { id: number; stars: number; comment: string; author: string }[];
}

const initialPlugins: Plugin[] = [
  {
    id: 1,
    title: 'Short Form Creation Workflow',
    description: 'My personal Shorts creation workflow that has gotten me over 50 million views.',
    price: '$29.99',
    imageUrl: '/images/workflow.jpg',
    rating: 5,
    reviews: [],
  },
  {
    id: 2,
    title: 'Wallpaper Pack',
    description: '10 phone and 4 computer wallpapers created from some of my favourite shots.',
    price: '$4.99',
    imageUrl: '/images/wallpaper.jpg',
    rating: 5,
    reviews: [],
  },
  {
    id: 3,
    title: 'Cinematic LUT Pack',
    description: 'Enhance your visuals with professional-grade cinematic LUTs.',
    price: '$19.99',
    imageUrl: '/images/lutpack.jpg',
    rating: 5,
    reviews: [],
  },
  {
    id: 4,
    title: 'Stock Footage Collection',
    description: '100s of photos and videos for personal or commercial use',
    price: '',
    imageUrl: '/images/stockfootage.jpg',
    rating: 5,
    reviews: [],
  },
];

const initialTestimonials = [
  {
    id: 1,
    quote: 'The short form creation pack completely changed the way I created my videos and I’ll never look back!',
    author: 'Jake D.',
  },
  {
    id: 2,
    quote: 'A friend of mine mentioned James’ workflow pack when I started creating videos and it’s been one of the best tools I purchased as a beginner.',
    author: 'Nick M.',
  },
  {
    id: 3,
    quote: 'Absolutely love these wallpapers, cool to know where they are all taken too!',
    author: 'Mary D'
  },
  {
    id: 4,
    quote: 'The Short Form Workflow is a game-changer for content creators.',
    author: 'Chris P.',
  },
];

const Plugins: FC = memo(() => {
  const router = useRouter();
  const [plugins, setPlugins] = useState<Plugin[]>(initialPlugins);
  const [selectedPluginId, setSelectedPluginId] = useState<number | null>(null);
  const [review, setReview] = useState({ stars: 0, comment: '', author: '' });

  const handleItemClick = (plugin: Plugin) => {
    const pageName = plugin.imageUrl.split('/').pop()?.split('.')[0];
    if (pageName) {
      router.push(`/${pageName}`);
    }
  };

  const handleReviewSubmit = () => {
    if (!selectedPluginId) return;

    setPlugins((prev) =>
      prev.map((plugin) => {
        if (plugin.id === selectedPluginId) {
          const newReviews = [
            ...plugin.reviews,
            { id: Date.now(), ...review },
          ];
          const newRating =
            newReviews.reduce((sum, r) => sum + r.stars, 0) / newReviews.length;
          return { ...plugin, reviews: newReviews, rating: newRating };
        }
        return plugin;
      })
    );
    setReview({ stars: 0, comment: '', author: '' });
    setSelectedPluginId(null);
  };

  const renderStars = (rating: number) => {
    const percentage = (rating / 5) * 100;

    return (
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 24"
          className="w-32 h-6"
        >
          <defs>
            <clipPath id={`clip-${percentage}`}>
              <rect x="0" y="0" width={`${percentage}%`} height="24" />
            </clipPath>
          </defs>
          <g fill="gray">
            {[...Array(5)].map((_, i) => (
              <path
                key={`base-${i}`}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                transform={`translate(${i * 24}, 0)`}
              />
            ))}
          </g>
          <g fill="gold" clipPath={`url(#clip-${percentage})`}>
            {[...Array(5)].map((_, i) => (
              <path
                key={`filled-${i}`}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                transform={`translate(${i * 24}, 0)`}
              />
            ))}
          </g>
        </svg>
      </div>
    );
  };

  return (
    <Page description="Discover amazing plugins!" title="My Plugins">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />

        <nav className="text-center py-4">
          <Link href="/gearlist" className="text-yellow hover:underline text-lg">
          <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
          </Link>
        </nav>
        <h1 className="text-sm mb-2">
  &#8203;
</h1>    <h1 className="text-sm mb-2">
  &#8203;
</h1>   <h2 className="text-4xl font-bold text-center underline mb-12 text-white">
              Discover my favourite Digital Assets
            </h2>
            <h2 className="text-4xl font-bold text-center underline mb-12 text-white">
              COMING SOON!
            </h2>
        <main className="container mx-auto py-8 px-4 lg:px-8">
          {/* Plugins Section */}
          <section className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {plugins.map((plugin) => (
                <div
                  key={plugin.id}
                  onClick={() => handleItemClick(plugin)}
                  className="p-6 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  }}
                >
                  <img
                    src={plugin.imageUrl}
                    alt={plugin.title}
                    className="rounded-lg mb-4 object-cover w-full h-48"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white text-center">
                      {plugin.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-center">{plugin.description}</p>
                    <div className="flex justify-center">{renderStars(plugin.rating)}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <button
                      className="py-10 px-8 bg-red rounded-xl font-bold hover:bg-red"
                      style={{ color: '#FF0000', border: '4px solid #FF0000' }}
                    >
                      {plugin.price
                        ? `More Info and Purchase - ${plugin.price}`
                        : 'More Info and Purchase'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Testimonials</h2>    <h1 className="text-sm mb-2">
  &#8203;
</h1>    <h1 className="text-sm mb-2">
  &#8203;
</h1>    <h1 className="text-sm mb-2">
  &#8203;
</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initialTestimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.id}
                  className="p-6 rounded-lg shadow-md text-white flex flex-col items-start justify-between"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  }}
                >
                  <p className="italic">{`"${testimonial.quote}"`}</p>
                  <footer className="mt-4 text-right text-sm">{`- ${testimonial.author}`}</footer>
                </blockquote>
              ))}
            </div>
          </section>
          <h1 className="text-sm mb-2">
  &#8203;
</h1>  
          {/* Add Review Section */}
          <section className="py-12 flex justify-center">
            <div className="w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Add a Review</h2>    
              <h1 className="text-sm mb-2">&#8203;   
                 <h1 className="text-sm mb-2"> &#8203;
</h1>
</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleReviewSubmit();
                }}
                className="space-y-6"
              >
                {/* Select Plugin */}
                <div className="flex flex-col">
                  <label htmlFor="plugin" className="text-white mb-2">
                    Select a Plugin
                  </label>
                  <select
                    id="plugin"
                    value={selectedPluginId || ''}
                    onChange={(e) => setSelectedPluginId(Number(e.target.value))}
                    className="p-3 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:border-blue-500 outline-none">
                    <option value="" disabled>
                      Choose...
                    </option>
                    {plugins.map((plugin) => (
                      <option key={plugin.id} value={plugin.id}>
                        {plugin.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={review.author}
                    onChange={(e) => setReview({ ...review, author: e.target.value })}
                    className="p-3 bg-gray-700 text-black rounded-lg border-2 border-gray-600 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Review Input */}
                <div className="flex flex-col">
                  <label htmlFor="review" className="text-white mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    placeholder="Write your review here..."
                    value={review.comment}
                    onChange={(e) => setReview({ ...review, comment: e.target.value })}
                    className="p-3 bg-gray-700 text-black rounded-lg border-2 border-gray-600 focus:border-blue-500 outline-none"
                    rows={4}
                  />
                </div>

                {/* Rating Input */}
                <div className="flex flex-col">
                  <label htmlFor="rating" className="text-white mb-2">
                    Rating (1-5)
                  </label>
                  <input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Enter a rating"
                    value={review.stars || ''}
                    onChange={(e) =>
                      setReview({ ...review, stars: Number(e.target.value) })
                    }
                    className="p-3 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:border-blue-500 outline-none"
                  />
                </div>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Page>
  );
});

export default Plugins;


