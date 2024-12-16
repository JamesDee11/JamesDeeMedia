import { FC, memo } from 'react';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';
import Link from 'next/link';

const heroImage = "/images/headerbackground.webp"

interface GearItem {
  id: number;
  category: string;
  name: string;
  link: string;
  linkText?: string; // Optional custom link text for non-Amazon links
}

const gearList: GearItem[] = [
  { id: 1, category: 'Cameras', name: 'Canon T7', link: 'https://amzn.to/41qe2Bg' },
  { id: 2, category: 'Cameras', name: 'Canon 90D', link: 'https://amzn.to/3B8Xt2k' },
  { id: 3, category: 'Cameras', name: 'Canon R5', link: 'https://amzn.to/3OPA60W' },
  { id: 4, category: 'Lenses', name: '55-250mm IS STM', link: 'https://amzn.to/3D7lR4N' },
  { id: 5, category: 'Lenses', name: '50mm 1.8 STM', link: 'https://amzn.to/4gsCgiB' },
  { id: 6, category: 'Lenses', name: '24-70mm IS II', link: 'https://amzn.to/3ZsOy3J' },
  { id: 7, category: 'Lenses', name: '70-200mm IS II', link: 'https://amzn.to/41lB6Bk' },
  { id: 8, category: 'Tripods and Stabilization', name: 'DJI RS3 Pro', link: 'https://amzn.to/4iwgPzg' },
  { id: 9, category: 'Tripods and Stabilization', name: 'DJI RS4 Pro', link: 'https://amzn.to/3DhPwYZ' },
  { id: 10, category: 'Tripods and Stabilization', name: 'DJI Dual Handle Grip', link: 'https://amzn.to/41qevn0' },
  { id: 11, category: 'Tripods and Stabilization', name: 'Tripod 1 (Professional)', link: 'https://amzn.to/3Zvtx8n' },
  { id: 12, category: 'Tripods and Stabilization', name: 'Tripod 2 (Midgrade)', link: 'https://amzn.to/3BhTeS1' },
  { id: 13, category: 'Tripods and Stabilization', name: 'Tripod 3 (Travel)', link: 'https://amzn.to/41qSqVC' },
  { id: 14, category: 'Cages and Accessories', name: '90D Cage', link: 'https://amzn.to/4gsEKO1' },
  { id: 15, category: 'Cages and Accessories', name: 'Canon R5 Cage', link: 'https://amzn.to/3ZlJ5M4' },
  { id: 16, category: 'Cages and Accessories', name: 'Cage Handles', link: 'https://amzn.to/4fa5VMs' },
  { id: 17, category: 'Cages and Accessories', name: 'Cold Shoe Mounts', link: 'https://amzn.to/4gsaqTw' },
  { id: 18, category: 'Cages and Accessories', name: 'Monitor Mount', link: 'https://amzn.to/3VxrY8X' },
  { id: 19, category: 'Audio', name: 'Tascam DR-10L Pro (32 Bit Float)', link: 'https://amzn.to/4guoCf8' },
  { id: 20, category: 'Audio', name: 'Rode Mic 1 (Full Size)', link: 'https://amzn.to/41lX6vT' },
  { id: 21, category: 'Audio', name: 'Rode Mic 2 (Mid Size)', link: 'https://amzn.to/49to9Hs' },
  { id: 22, category: 'Audio', name: 'Rode Mic 2 (Mini)', link: 'https://amzn.to/4g65yUA' },
  { id: 23, category: 'SD Cards', name: '128GB Sandisk Extreme Pro', link: 'https://amzn.to/4g71wvd' },
  { id: 24, category: 'SD Cards', name: '256GB Sandisk Extreme Pro', link: 'https://amzn.to/3ZMspyS' },
  { id: 25, category: 'SD Cards', name: '128GB Sandisk Extreme Pro Micro + Adapter', link: 'https://amzn.to/4gL3NfB' },
  { id: 26, category: 'SD Cards', name: '256GB Sandisk Extreme Pro Micro + Adapter', link: 'https://amzn.to/4gnRyFk' },
];

const pctGearList: GearItem[] = [
  { id: 27, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'KS Ultralight KS40 - 650 g', link: 'https://www.ks-ultralightgear.com/p/je-vous-propose-un-modele-de-sac-dos.html', linkText: 'View KS Ultralight Website' },
  { id: 28, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'Hammock Gear Economy Burrow 20°F +1oz - 774 g', link: 'https://hammockgear.com/', linkText: 'View Hammock Gear Website' },
  { id: 29, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'Therm-a-Rest NeoAir Xlite - 307 g', link: 'https://amzn.to/49IXpTx' },
  { id: 30, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'Six Moon Designs Lunar Solo - 704 g', link: 'https://amzn.to/3ZE96Gx' },
  { id: 31, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'Tyvek Ground Sheet - 127 g', link: 'https://amzn.to/49CSm78' },
  { id: 32, category: 'Pack, Quilt, Sleeping Pad, Tent, etc.', name: 'Zpacks Carbon Fiber Tent Stakes - 39.4 g', link: 'https://zpacks.com/products/carbon-fiber-stake?_pos=2&_sid=16f8423de&_ss=r', linkText: 'View Zpacks Website' },

     // Cooking
     { id: 34, category: 'Food - Cooking', name: 'MSR IsoPro Fuel - 103 g', link: 'https://amzn.to/3ZSoHnk' },
     { id: 35, category: 'Food - Cooking', name: 'Toaks Titanium 650ml Pot - 78.6 g', link: 'https://amzn.to/3VFwK4o' },
     { id: 36, category: 'Food - Cooking', name: 'BRS 3000 Ultralight Stove - 25.35 g', link: 'https://amzn.to/3VGyMBn' },
     { id: 37, category: 'Food - Cooking', name: 'Spoon - 6.1 g', link: 'https://amzn.to/3ZQFKWJ' },
     { id: 38, category: 'Food - Cooking', name: 'Zpacks Large Food Bag - 24 g', link: 'https://zpacks.com/products/large-food-bag?srsltid=AfmBOoqCxJFLOrJ_dxxCSirAOfVAAvo-NebiUYSE6rHBZ922vpDH8SgB', linkText: 'View Zpacks Website' },
   
     // Water/Filtration
     { id: 39, category: 'Water and Filtration', name: 'Sawyer Squeeze Water Filter + Backwash Cap - 50 g', link: 'https://amzn.to/4gfKP0F' },
     { id: 40, category: 'Water and Filtration', name: 'Smart Water Bottles x3 (Compatible with Sawyer Mini) - 24.72 g', link: 'https://amzn.to/3ZGbV9U' },
   
     // Clothing - Packed
     { id: 41, category: 'Clothing - Packed', name: 'Eddie Bauer CirrusLite - 268.5 g', link: 'https://amzn.to/3DisTnp' },
     { id: 42, category: 'Clothing - Packed', name: 'Smartwool Merino Base Layer Bottom - 159 g', link: 'https://amzn.to/49DgmXK' },
     { id: 43, category: 'Clothing - Packed', name: 'Frogg Toggs Ultra-Lite - 158 g', link: 'https://amzn.to/4fmTOvw' },
     { id: 44, category: 'Clothing - Packed', name: 'Marmot Precip - 218 g', link: 'https://amzn.to/3VI37PP' },
     { id: 45, category: 'Clothing - Packed', name: 'Smartwool Merino Hiking Socks - 89.2 g', link: 'https://amzn.to/49CZmkw' },
     { id: 46, category: 'Clothing - Packed', name: 'Injinji Toe Socks - 34.45 g', link: 'https://amzn.to/3ZWnafK' },
   
     // Clothing - Worn
     { id: 47, category: 'Clothing - Worn', name: 'UV Sun Hoodie - 214 g', link: 'https://amzn.to/3VIIl2G' },
     { id: 48, category: 'Clothing - Worn', name: 'Mountain Warehouse 2 in 1 Pants - 370 g', link: 'https://amzn.to/41Ax5sN' },
     { id: 49, category: 'Clothing - Worn', name: 'Saxx Underwear - 74.1 g', link: 'https://amzn.to/4geaXJ7' },
     { id: 50, category: 'Clothing - Worn', name: 'Gaiters - 38.5 g', link: 'https://amzn.to/3Dhb2xg' },
     { id: 51, category: 'Clothing - Worn', name: 'HOKA Stinson 7s - 365.7 g', link: 'https://www.hoka.com/en/ca/stinson/', linkText: 'View Hoka Website' },
     { id: 52, category: 'Clothing - Worn', name: 'Cascade Mountain Carbon Fiber Poles - 450 g', link: 'https://amzn.to/4gyYxv7' },
   
     // Electronics
     { id: 53, category: 'Electronics', name: 'iPhone - 193 g', link: 'https://apple.com', linkText: 'View Apple Website' },
     { id: 54, category: 'Electronics', name: 'Anker NB10000 10,000mAh - 151 g', link: 'https://amzn.to/49LKEYr' },
     { id: 55, category: 'Electronics', name: 'Garmin InReach Mini - 97 g', link: 'https://amzn.to/49CZGje' },
     { id: 56, category: 'Electronics', name: 'Solar Panel - 85.3 g', link: 'https://amzn.to/41zWYsE' },
     { id: 57, category: 'Electronics', name: 'Nitecore NU25 - 29 g', link: 'https://amzn.to/4gC79Bj' },
     { id: 58, category: 'Electronics', name: 'Anker 40w Mini Wallplug- 38.4 g', link: 'https://amzn.to/4gBbHb5' },
   
     // Miscellaneous
     { id: 59, category: 'Miscellaneous', name: 'Leukotape - 4 g', link: 'https://amzn.to/4iEsR9O' },
     { id: 60, category: 'Miscellaneous', name: 'Travel Toothpaste - 25 g', link: 'https://amzn.to/41GtzNL' },
     { id: 61, category: 'Miscellaneous', name: 'Travel Sunscreen - 25 g', link: 'https://amzn.to/41BZyhV' },
   ];
 
const Gear: FC = memo(() => {
  const renderLink = (item: GearItem) =>
    item.link.includes('amzn.to') ? 'View on Amazon' : item.linkText || 'View Item';

  return (
    <Page description="Explore the gear I use for professional videography!" title="My Gear">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />
        <div className="flex-1 bg-black/50 backdrop-blur-md overflow-auto">
          <nav className="text-center py-4">
            <Link href="/plugins" className="text-yellow-400 hover:underline text-lg">
              Back to Plugins
            </Link>
          </nav>
          <main className="container mx-auto py-8 px-4 lg:px-8">
            <section className="py-8 text-center text-white">
            <p className="text-4xl font-bold underline lg:text-3xl">
  Explore my gear lists with easy links to find the items online
</p>
  <p className="text-sm text-gray-200 mt-2">
  Using these links support my work by earning me small commission at no extra cost to you. Thank you, i appreciate you!
</p>

            </section>
            <h1 className="text-sm mb-2">&#8203;</h1>
            {/* Camera Gear Section */}
            <section className="py-4">
              <h2 className="text-4xl font-semibold text-center underline mb-16 text-white">
                <u>Camera Gear List</u>
              </h2>
              <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
              {Array.from(new Set(gearList.map((item) => item.category))).map((category) => (
                <div className="mb-8" key={category}>
                  <h3 className="text-xl font-bold mb-4 text-center text-white">{category}</h3>
                  <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
                  <ul className="space-y-4 text-center">
                    {gearList
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <li className="text-mb" key={item.id}>
                          <span className="text-white">{item.name}</span>{' '}
                          <span className="text-white">-</span>{' '}
                          <a
                            className="custom-link hover:underline"
                            href={item.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {renderLink(item)}
                          </a>
                        </li>
                      ))}
                  </ul>
                  <h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
                </div>
              ))}
            </section>
            <h1 className="text-sm mb-2">&#8203;</h1>
            {/* PCT Gear Section */}
            <section className="py-4">
              <h2 className="text-4xl font-semibold text-center underline mb-16 text-white">
                <u>Pacific Crest Trail - Full Gear List</u>
              </h2><h1 className="text-sm mb-2">&#8203;</h1><h1 className="text-sm mb-2">&#8203;</h1>
              <h1 className="text-sm mb-2">&#8203;</h1>
              <h2 className="text-2xl font-semibold text-center mb-16 text-white">
                <div>Total Weight: 25.04 lb</div>
                <div>Base Weight: 10.50 lb</div>
                <div>Consumable Weight: 10.93 lb</div>
                <div>Worn Weight: 3.61 lb</div>
              </h2><h1 className="text-sm mb-2">&#8203;</h1>
              <h1 className="text-sm mb-2">&#8203;</h1>
              {Array.from(new Set(pctGearList.map((item) => item.category))).map((category) => (
                <div className="mb-8" key={category}>
                  <h3 className="text-xl font-bold mb-4 text-center text-white">{category}</h3><h1 className="text-sm mb-2">&#8203;</h1>
                  <h1 className="text-sm mb-2">&#8203;</h1>
                  <ul className="space-y-4 text-center">
                    {pctGearList
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <li className="text-md" key={item.id}>
                          <span className="text-white">{item.name}</span>{' '}
                          <span className="text-white">-</span>{' '}
                          <a
                            className="custom-link hover:underline"
                            href={item.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {renderLink(item)}
                          </a>
                        </li>
                      ))}
                  </ul><h1 className="text-sm mb-2">&#8203;</h1>
                  <h1 className="text-sm mb-2">&#8203;</h1>
                </div>
              ))}
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </Page>
  );
});

export default Gear;
