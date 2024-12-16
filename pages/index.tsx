import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../src/components/Layout/Page';
import About from '../src/components/Sections/About';
import Contact from '../src/components/Sections/Contact';
import Footer from '../src/components/Sections/Footer';
import Hero from '../src/components/Sections/Hero';
import Portfolio from '../src/components/Sections/Portfolio';
import Resume from '../src/components/Sections/Resume';
import Testimonials from '../src/components/Sections/Testimonials';
import { homePageMeta } from '../src/data/data';


// Dynamically import the Header component to optimize loading
const Header = dynamic(() => import('../src/components/Sections/Header'), {
  ssr: false, // Disables server-side rendering for this component
  loading: () => <div className="text-center text-white">Loading header...</div>, // Fallback loader
});

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      {/* Header Section */}
      <Header />

      {/* Main Sections */}
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />

      {/* Footer Section */}
      <Footer />
    </Page>
  );
});

Home.displayName = 'Home';
export default Home;
