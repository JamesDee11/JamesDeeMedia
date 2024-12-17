import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Page from "../src/components/Layout/Page";
import Footer from "../src/components/Sections/Footer";
import PluginsHeader from "../src/components/Sections/PluginsHeader";

const heroImage = "/images/headerbackground.webp";

// Define the Plugin type
interface Plugin {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  rating: number;
}

const initialPlugins: Plugin[] = [
  {
    id: 1,
    title: "Short Form Creation Workflow",
    description: "My personal Shorts creation workflow that has gotten me over 50 million views.",
    price: "$29.99",
    imageUrl: "/images/workflow.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Wallpaper Pack",
    description: "10 phone and 4 computer wallpapers created from some of my favourite shots.",
    price: "$4.99",
    imageUrl: "/images/wallpaper.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Cinematic LUT Pack",
    description: "Enhance your visuals with professional-grade cinematic LUTs.",
    price: "$19.99",
    imageUrl: "/images/lutpack.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Stock Footage Collection",
    description: "100s of photos and videos for personal or commercial use",
    price: "",
    imageUrl: "/images/stockfootage.jpg",
    rating: 5,
  },
];

const Testimonials: FC = memo(() => {
  const [testimonialsList, setTestimonialsList] = useState<
    { name: string; text: string }[]
  >([]);
  const [review, setReview] = useState({ comment: "", author: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonialsList.length / testimonialsPerPage);
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        if (data.success) {
          setTestimonialsList(data.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleReviewSubmit = async () => {
    if (!review.comment || !review.author) return;

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: review.author, text: review.comment }),
      });
      const data = await response.json();
      if (data.success) {
        setTestimonialsList((prev) => [...prev, data.data]);
        setReview({ comment: "", author: "" });
        setCurrentPage(0);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const scrollToPage = useCallback((pageIndex: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft =
        scrollContainer.current.offsetWidth * pageIndex;
      setCurrentPage(pageIndex);
    }
  }, []);

  return (
    <div className="w-10/12 max-w-screen-lg mx-auto py-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Testimonials
      </h2>
      <h1 className="text-sm mb-2">&#8203;</h1>
      <div className="overflow-hidden mb-8">
        {loading ? (
          <p className="text-center text-white">Loading reviews...</p>
        ) : (
          <div
            ref={scrollContainer}
            className="flex transition-all duration-700 snap-x snap-mandatory overflow-x-auto no-scrollbar"
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0 snap-start w-full px-4"
              >
                {testimonialsList
                  .slice(
                    pageIndex * testimonialsPerPage,
                    (pageIndex + 1) * testimonialsPerPage
                  )
                  .map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/80 p-4 rounded-lg shadow-md"
                    >
                      <p className="text-sm text-gray-300 italic">{`"${testimonial.text}"`}</p>
                      <p className="text-xs text-gray-400 mt-2 text-right">
                        — {testimonial.name}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className={classNames(
              "h-3 w-3 rounded-full bg-gray-300 transition-all duration-300",
              currentPage === index
                ? "bg-blue-500 scale-110"
                : "opacity-50 hover:opacity-100"
            )}
          ></button>
        ))}
      </div>
      <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Add a Testimonial
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReviewSubmit();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-white block mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={review.author}
              onChange={(e) =>
                setReview({ ...review, author: e.target.value })
              }
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="review" className="text-white block mb-1">
              Your Testimonial
            </label>
            <textarea
              id="review"
              placeholder="Write your testimonial here..."
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
              rows={3}
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-sm mb-2">&#8203;</h1>
    </div>
  );
});

const Plugins: FC = memo(() => {
  const router = useRouter();

  const handleItemClick = (plugin: Plugin) => {
    const pageName = plugin.imageUrl.split("/").pop()?.split(".")[0];
    if (pageName) {
      router.push(`/${pageName}`);
    }
  };

  return (
    <Page description="Discover amazing plugins!" title="My Plugins">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />
        <div
          className="flex-1 relative"
          style={{
            backgroundColor: "rgba(2, 2, 2, 0.4)",
            backdropFilter: "blur(17.5px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <main className="container mx-auto py-8 px-4 lg:px-8">
            <section className="py-8">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Discover My Favorite Digital Assets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {initialPlugins.map((plugin) => (
                  <div
                    key={plugin.id}
                    onClick={() => handleItemClick(plugin)}
                    className="p-6 rounded-lg shadow-lg bg-white cursor-pointer transform hover:scale-105 transition-transform"
                  >
                    <img
                      src={plugin.imageUrl}
                      alt={plugin.title}
                      className="rounded-lg mb-4 object-cover w-full h-48"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {plugin.title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {plugin.description}
                    </p>
                    <button className="py-2 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                      {plugin.price
                        ? `Buy Now - ${plugin.price}`
                        : "Purchase collection or individually"}
                    </button>
                  </div>
                ))}
              </div>
            </section>
            <Testimonials />
          </main>
        </div>
        <Footer />
      </div>
    </Page>
  );
});

export default Plugins;
