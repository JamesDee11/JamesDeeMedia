// stockFootageData.ts
export type StockFootageItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  aspect: "landscape" | "portrait";
  type: "photo" | "video";
};

export type StockFootageCategory = {
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  items: StockFootageItem[];
};

const stockFootageData: StockFootageCategory[] = [
  {
    name: "Travel",
    slug: "travel",
    description:
      "Experience the beauty of the world through our exclusive travel stock footage collection.",
    detailedDescription: ``,
    highlights: [
      "Versatile Content: Perfect for travel blogs, promotional videos, or website visuals.",
      "High Resolution: All items are available in stunning 4K and Full HD.",
      "Wide Variety: From serene beaches to bustling cityscapes, there's something for every project.",
    ],
    items: [
      {
        id: 1,
        title: "Beautiful Beach",
        description: "Crystal clear waters.",
        imageUrl: "/images/travel1.jpg",
        aspect: "landscape",
        type: "photo",
      },
      {
        id: 2,
        title: "Mountain Sunrise",
        description: "A breathtaking sunrise.",
        imageUrl: "/images/travel2.jpg",
        aspect: "landscape",
        type: "photo",
      },
    ],
  },
  {
    name: "Nature",
    slug: "nature",
    description:
      "Explore the wonders of the natural world with our curated nature stock footage.",
    detailedDescription: ``,
    highlights: [
      "Lush Scenery: Perfect for documentaries, educational content, or calming visuals.",
      "High-Quality Content: Professionally captured in Full HD and 4K.",
      "Unique Perspectives: From dense rainforests to majestic mountains.",
    ],
    items: [
      {
        id: 1,
        title: "Rainforest Waterfall",
        description: "Lush green scenery.",
        imageUrl: "/images/nature1.jpg",
        aspect: "portrait",
        type: "photo",
      },
    ],
  },
  {
    name: "Urban",
    slug: "urban",
    description:
      "Discover vibrant cityscapes and urban adventures through our urban stock footage.",
    detailedDescription: ``,
    highlights: [
      "Dynamic Energy: Perfect for corporate videos, promotional content, or social media.",
      "High Definition: Available in 4K for crystal-clear visuals.",
      "Versatile Themes: From skylines to bustling streets, everything you need.",
    ],
    items: [
      {
        id: 1,
        title: "City Lights",
        description: "A vibrant urban nightscape.",
        imageUrl: "/images/urban1.jpg",
        aspect: "landscape",
        type: "photo",
      },
    ],
  },
  {
    name: "Wildlife",
    slug: "wildlife",
    description:
      "Experience the majesty of wildlife with our captivating stock footage collection.",
    detailedDescription: ``,
    highlights: [
      "Close Encounters: Perfect for educational and conservation projects.",
      "Stunning Clarity: Available in Full HD and 4K for breathtaking visuals.",
      "Diverse Subjects: From predators to serene moments in nature.",
    ],
    items: [
      {
        id: 1,
        title: "Lion in the Wild",
        description: "A lion in its natural habitat.",
        imageUrl: "/images/wildlife1.jpg",
        aspect: "landscape",
        type: "photo",
      },
    ],
  },
];

export default stockFootageData;
