import { FC, memo, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { portfolioItems, SectionId } from "../../data/data";
import Section from "../Layout/Section";
import { PortfolioItem } from "../../data/dataDef";

const categorizePortfolioItems = (items: PortfolioItem[]) => {
  const landscapePhotos = items.filter(
    (item) => item.image && item.aspect === "landscape",
  );
  const portraitPhotos = items.filter(
    (item) => item.image && item.aspect === "portrait",
  );
  const portraitVideos = items.filter(
    (item) => item.video && item.aspect === "portrait",
  );
  const landscapeVideos = items.filter(
    (item) => item.video && item.aspect === "landscape",
  );

  return { landscapePhotos, portraitPhotos, portraitVideos, landscapeVideos };
};

const Portfolio: FC = memo(() => {
  const { landscapePhotos, portraitPhotos, portraitVideos, landscapeVideos } =
    categorizePortfolioItems(portfolioItems);

  return (
    <Section className="bg-neutral-800 pb-20" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-10">
        <h2
          className="self-center text-xl font-bold text-white"
          style={{ fontSize: "35px" }}
        >
          Portfolio
        </h2>
        {/* Top Row: 2 Landscape Photos */}
        <div className="flex justify-center gap-4">
          {landscapePhotos.slice(0, 2).map((item, index) => (
            <PortfolioMedia item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
        {/* Second Row: 4 Portrait Photos */}
        <div className="flex justify-center gap-4">
          {portraitPhotos.slice(0, 4).map((item, index) => (
            <PortfolioMedia item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
        {/* Third Row: 4 Portrait Videos */}
        <div className="flex justify-center gap-4">
          {portraitVideos.slice(0, 4).map((item, index) => (
            <PortfolioMedia item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
        {/* Bottom Row: 2 Landscape Videos */}
        <div className="flex justify-center gap-4">
          {landscapeVideos.slice(0, 2).map((item, index) => (
            <PortfolioMedia item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;

const PortfolioMedia: FC<{ item: PortfolioItem }> = memo(({ item }) => {
  const { title, video, image, aspect } = item;
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    if (isMobile && video) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            mediaRef.current instanceof HTMLVideoElement
          ) {
            mediaRef.current.play();
          } else if (mediaRef.current instanceof HTMLVideoElement) {
            mediaRef.current.pause();
          }
        },
        { threshold: 0.5 },
      );

      if (mediaRef.current) {
        observer.observe(mediaRef.current);
      }

      // Cleanup function
      return () => {
        if (mediaRef.current) {
          observer.unobserve(mediaRef.current);
        }
      };
    }

    // Return an empty cleanup function for desktop or when no observer is needed
    return () => {};
  }, [isMobile, video]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (mediaRef.current instanceof HTMLVideoElement) {
        mediaRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (mediaRef.current instanceof HTMLVideoElement) {
        mediaRef.current.pause();
      }
    }
  };

  return (
    <div
      className={classNames(
        "relative w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl",
      )}
      style={{
        aspectRatio: aspect === "portrait" ? "9 / 16" : "16 / 9",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {video ? (
        <>
          <video
            ref={mediaRef as React.Ref<HTMLVideoElement>}
            className="absolute inset-0 w-full h-full object-cover"
            src={video}
            muted
            playsInline
            loop
          />
          {!isMobile && !isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="px-4 py-2 rounded-md bg-neutral-900/40 shadow-md">
                <span className="text-sm text-gray-300 font-medium">
                  HOVER TO PLAY
                </span>
              </div>
            </div>
          )}
        </>
      ) : (
        <img
          ref={mediaRef as React.Ref<HTMLImageElement>}
          className="absolute inset-0 w-full h-full object-cover"
          src={image as string}
          alt={title}
        />
      )}
    </div>
  );
});

PortfolioMedia.displayName = "PortfolioMedia";
