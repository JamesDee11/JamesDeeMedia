import {
  BuildingOffice2Icon,
  CakeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import YoutubeIcon from "../components/Icon/YoutubeIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";

// Correct imports for images and videos (removed /public from paths)
const heroImage = "/images/headerbackground.webp";
const portfolioImage1 = "/images/portfolio1.jpg";
const portfolioImage2 = "/images/portfolio2.jpg";
const portfolioImage3 = "/images/portfolio3.jpg";
const portfolioImage4 = "/images/portfolio4.jpg";
const portfolioImage5 = "/images/portfolio5.jpg";
const profilepic = "/images/profilepic.jpg";
const testimonialImage = "/images/testimonial.webp";

const portfolioVideo4 = "/videos/portfolio4.mp4";
const portfolioVideo8 = "/videos/portfolio8.mp4";
const portfolioVideo9 = "/videos/portfolio9.mp4";
const portfolioVideo10 = "/videos/portfolio10.mp4";
const portfolioVideo11 = "/videos/portfolio11.mp4";

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "James Dee Media",
  description:
    "Professional freelance videographer specializing in paintball and action sports.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "Home",
  About: "About",
  Contact: "Contact",
  Portfolio: "Portfolio",
  Resume: "Experience",
  Testimonials: "Reviews",
  Store: "Store",
  Gearlists: "Gear lists",
  TestimonialsReview: 'Reviews-review"',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `JamesDeeMedia`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Freelance videographer with years of experience working with
        professional teams, companies, and individuals.
      </p>
    </>
  ),
  actions: [
    {
      href: "/store",
      text: "Asset Store",
      primary: true,
    },
    {
      href: "/gearlist",
      text: "Gear Lists",
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact Me",
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My name is James D'Ilario. I am a professional freelance videographer and photographer specializing in paintball and action sports.

I picked up a camera four years ago after experiencing a life-changing knee injury and found a passion for filmmaking that has taken me around the world.

Since I started shooting ive had the opportunity to work with multiple professional paintball teams and paintballers, corporate clients, car enthusiasts, solo entrepreneurs and now GoSportsLive!

I run multiple social media accounts on Instagram, TikTok, and YouTube which have acquired over 50 million views, and I'm looking to share my knowledge, skills, and tools so you can do the same.

Be sure to out my creative profile on instagram @JamesDee.Media!`,
  aboutItems: [
    { label: "Location", text: "Niagara Falls", Icon: MapPinIcon },
    { label: "Age", text: "28", Icon: CakeIcon },
    {
      label: "Employment",
      text: "JamesDeeMedia, GoSportsLive",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Portfolio Photo 1",
    description: "A static image-based portfolio item.",
    url: "https://example.com",
    image: portfolioImage1,
    aspect: "landscape",
  },
  {
    id: 2,
    title: "Portfolio Photo 2",
    description: "Another static image-based portfolio item.",
    url: "https://example.com",
    image: portfolioImage2,
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Portfolio Photo 3",
    description: "An additional static image-based portfolio item.",
    url: "https://example.com",
    image: portfolioImage3,
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Portfolio Photo 4",
    description: "Yet another static image-based portfolio item.",
    url: "https://example.com",
    image: portfolioImage4,
    aspect: "portrait",
  },
  {
    id: 5,
    title: "Portfolio Photo 5",
    description: "Another static image-based portfolio item.",
    url: "https://example.com",
    image: portfolioImage5,
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Portfolio Video 1",
    description: "This is an example of a video portfolio item.",
    url: "https://example.com",
    video: portfolioVideo4,
    aspect: "portrait",
  },
  {
    id: 7,
    title: "Portfolio Video 2",
    description: "Another example of a video portfolio item.",
    url: "https://example.com",
    video: portfolioVideo8,
    aspect: "portrait",
  },
  {
    id: 8,
    title: "Portfolio Video 3",
    description: "A third video portfolio item example.",
    url: "https://example.com",
    video: portfolioVideo9,
    aspect: "portrait",
  },
  {
    id: 9,
    title: "Portfolio Video 4 (Placeholder)",
    description: "Placeholder for missing video 4.",
    url: "#",
    video: portfolioVideo10,
    aspect: "landscape",
  },
  {
    id: 10,
    title: "Portfolio Video 5 (Placeholder)",
    description: "Placeholder for missing video 5.",
    url: "#",
    video: portfolioVideo11,
    aspect: "landscape",
  },
];

/**
 * Resume section
 */
export const experience: TimelineItem[] = [
  {
    date: "March 2020 - Present",
    location: "JamesDeeMedia",
    title: "Videographer, Editor, Social Media",
    content: (
      <p>
        Owner of JamesDeeMedia. Specializing in paintball event coverage for
        Individuals and Teams but knowledgable in vehicle, real estate, wedding
        and travel. With four years of hands-on experience managing projects
        from start to finish I have all the skills needed in client
        communication, on-site shooting, post production and delivery to ensure
        client satisfaction and professional grade content.
      </p>
    ),
  },
  {
    date: "2024 - Present",
    location: "GoSportsLive",
    title: "Videographer",
    content: (
      <p>
        Shooting passion projects with GoSportsLive at National events, I have
        had the opportunity to shoot on the Professional NXL field and work
        alongside some of the top videographers within the industry. This has
        give me the skills and knowledge needed to truly become the best at what
        I do.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Ayah Doumani",
      text: "James was an absolute pleasure to work with. The entire process was seamless from start to finish and the final product was amazing. We would recommend his work to anyone.",
      image: "",
    },
    {
      name: "Clayton Rizzardo",
      text: "James has been providing me with gameplay coverage for over four years now and has always provided top-notch footage with zero issues. Would highly recommend him.",
      image: "",
    },
    {
      name: "MASSIVE Paintball",
      text: "James is our go to guy any time we need video work done. The footage he provides is so unique and unlike any other videographer within the industry.",
      image: "",
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: "Get in touch.",
  description: "Contact me for a quote or more information.",
  items: [
    {
      type: ContactType.Email,
      text: "Paintballfootage@hotmail.com",
      href: "mailto:Paintballfootage@hotmail.com",
    },
    {
      type: ContactType.Instagram,
      text: "@JamesDee.Media",
      href: "https://www.instagram.com/JamesDee.Media",
    },
    {
      type: ContactType.Location,
      text: "Niagara Falls, Ontario",
      href: "https://www.google.ca/maps/place/NiagaraFalls",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/JamesDee.Media",
  },
  {
    label: "YouTube",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/Jamesdee11",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/JamesDilario",
  },
];
