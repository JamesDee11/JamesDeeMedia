import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { isApple, isMobile } from "../../config";
import { SectionId, testimonial } from "../../data/data";
import type { Testimonial as TestimonialType } from "../../data/dataDef";
import QuoteIcon from "../Icon/QuoteIcon";
import Section from "../Layout/Section";

const Testimonials: FC = memo(() => {
  const [testimonialsList, setTestimonialsList] = useState(
    testimonial.testimonials,
  );
  const [review, setReview] = useState({ comment: "", author: "" });
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const testimonialsPerPage = 4;
  const scrollContainer = useRef<HTMLDivElement>(null);

  const { imageSrc } = testimonial;

  const resolveSrc = useMemo(
    () =>
      imageSrc
        ? typeof imageSrc === "string"
          ? imageSrc
          : imageSrc.src
        : undefined,
    [imageSrc],
  );

  // Enable parallax unless on iOS mobile
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  const handleReviewSubmit = () => {
    if (!review.comment || !review.author) return;

    const newTestimonial = {
      name: review.author,
      text: review.comment,
      image: "",
    };

    setTestimonialsList((prev) => [...prev, newTestimonial]);
    setReview({ comment: "", author: "" });
    setCurrentPage(0); // Reset to the first page
  };

  const totalPages = Math.ceil(testimonialsList.length / testimonialsPerPage);

  const scrollToPage = useCallback((pageIndex: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft =
        scrollContainer.current.offsetWidth * pageIndex;
      setCurrentPage(pageIndex);
    }
  }, []);

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          "flex w-full items-center justify-center bg-cover bg-center px-4 py-16 lg:px-8",
          parallaxEnabled && "bg-fixed",
        )}
        style={{
          backgroundImage: resolveSrc ? `url(${resolveSrc})` : undefined,
        }}
      >
        <div className="z-10 w-full max-w-screen-lg px-4 lg:px-0">
          {/* Testimonials Section */}
          <div className="overflow-hidden mb-8">
            <div
              ref={scrollContainer}
              className="flex transition-all duration-700 snap-x snap-mandatory overflow-x-auto no-scrollbar"
            >
              {[...Array(totalPages)].map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0 snap-start w-full px-2"
                >
                  {testimonialsList
                    .slice(
                      pageIndex * testimonialsPerPage,
                      (pageIndex + 1) * testimonialsPerPage,
                    )
                    .map((testimonial, index) => (
                      <Testimonial
                        key={`${testimonial.name}-${index}`}
                        testimonial={testimonial}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={classNames(
                  "h-3 w-3 rounded-full bg-gray-300 transition-all duration-300",
                  currentPage === index
                    ? "bg-blue-500 scale-110"
                    : "opacity-50 hover:opacity-100",
                )}
              ></button>
            ))}
          </div>

          {/* Add Review Form */}
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
                  placeholder="Write your review here..."
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
        </div>
      </div>
    </Section>
  );
});

const Testimonial: FC<{ testimonial: TestimonialType }> = memo(
  ({ testimonial: { text, name, image } }) => (
    <div className="flex flex-col bg-gray-700/80 p-4 rounded-lg shadow-md h-40">
      {image ? (
        <div className="h-10 w-10 mb-2 rounded-full bg-gray-600 flex items-center justify-center">
          <img src={image} alt={name} className="rounded-full" />
        </div>
      ) : (
        <QuoteIcon className="h-6 w-6 text-white mb-2" />
      )}
      <p className="text-sm text-gray-300 italic flex-grow">{`"${text}"`}</p>
      <p className="text-xs text-gray-400 mt-2 text-right">— {name}</p>
    </div>
  ),
);

export default Testimonials;
