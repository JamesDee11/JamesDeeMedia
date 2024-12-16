import { FC, memo } from 'react';
import Page from '../src/components/Layout/Page';
import Footer from '../src/components/Sections/Footer';
import PluginsHeader from '../src/components/Sections/PluginsHeader';

const heroImage = "/images/headerbackground.webp"

const Workflow: FC = memo(() => {
  return (
    <Page description="Discover the Ultimate Video Creation Workflow" title="Creation Workflow Pack">
      <div
        className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <PluginsHeader />

        <div className="flex-1 bg-black/50 backdrop-blur-md">
          <main className="container mx-auto py-8 px-4 lg:px-8">
            <section className="py-12 text-center text-white">
              <h1 className="text-sm mb-2">&#8203;</h1>    
              <h1 className="text-sm mb-2">&#8203;</h1>

              <h1 className="text-4xl font-bold lg:text-5xl mb-4">Creation Workflow Pack</h1>
              <h1 className="text-sm mb-2">&#8203;</h1>
              <p className="text-lg lg:text-xl max-w-3xl mx-auto">
                Unlock the secrets to my fully optimized video creation process, from when you plug in your SD card to when you Upload the final product and more.
              </p>    
              <h1 className="text-sm mb-2">&#8203;</h1>
            </section>
            <section className="py-8 text-center">
            <button
    className="py-4 px-8 bg-transparent rounded-lg text-lg font-bold hover:bg-red-500"
    style={{ color: '#FF0000', border: '4px solid #FF0000' }}
  >
   Purchase the Workflow Pack for $19.99
  </button>
            
            </section>
            <section className="py-8">
              <div className="text-white space-y-6">
                <h1 className="text-2xl font-bold lg:text-2xl mb-4">Whats included in the pack?</h1>    
                <h1 className="text-sm mb-2">&#8203;</h1>
                <p>
                </p>
                <ul className="list-disc pl-5 space-y-4">  
                  <li>
                    <strong>DRAG and DROP Landscape to Shorts Presets (aspect ratio, size and rotation adjustments)</strong>.
                  </li>
                  <li>
                    <strong>A step-by-step video tutorial</strong> that shows my exact process from
                    start to finish.
                  </li>
                  <li>
                    <strong>A complete breakdown file</strong> in text format detailing every aspect
                    of the workflow, tools, and settings I use.
                  </li>
                </ul>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">The Workflow Process you will learn these processes, step by step.</h2>    
              <h1 className="text-sm mb-2">&#8203;</h1>    

              <div className="text-white space-y-8">
                <p>
                </p>
                <h1 className="text-sm mb-2">&#8203;</h1>
                <ol className="list-decimal pl-5 space-y-6">
                  <li><strong>Custom Keyboard Setups:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Configure shortcuts for faster editing.</li>
                      </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Project Setup:</strong> 
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Proper project setup</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>
                  <li>
                    <strong>Cutting and Organizing:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Use Custom keyboard tools effectively.</li>
                      <li> - Group and organize clips efficiently.</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Short Creation Techniques:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Adjust aspect ratios and sizes.</li>
                      <li> - Turn Landscape video into shorts</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Adding Text Overlays:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Choose appropriate fonts and colors.</li>
                      <li> - Position overlays effectively.</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Exporting Settings:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Recommended export settings</li>
                      <li> - Useful file formats for faster uploads.</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>
  <li>
                  <strong>Batch Exporting:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Fully streamline and Export over 100 files with a few clicks.</li>
                      <li> - Ensure all exported files are categorized for post organization</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>
  
                  <li>
                  <strong>Post-Export Organization:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Bundle, Categorize and archive files efficiently..</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Uploading to YouTube and Automation:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Fully automate your youtube channel 6 months to even years in advance</li>
                      <li> - Automate titles, descriptions, and tags and uploads.</li>
                    </ul>
                  </li>    <h1 className="text-sm mb-2">
  &#8203;
</h1>

                  <li>
                    <strong>Final File Management:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      <li> - Archive and save projects for easy retrieval and future use.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-3xl font-bold text-white mb-6">Why Purchase This?</h2>    
              <h1 className="text-sm mb-2">&#8203;</h1>
              <ul className="list-disc pl-5 space-y-4 text-white">
                <li>Save hours of your life by optimizing every project.</li>
                <li>Produce videos with consistent quality efficiently.</li>
                <li>Stay organized and become confident in your workflow.</li>
                <li>Tailored specifically for short form creators through hours of trial and error</li>
              </ul>
            </section>

            <section className="py-8 text-center">
            <button
    className="py-4 px-8 bg-transparent rounded-lg text-lg font-bold hover:bg-red-500"
    style={{ color: '#FF0000', border: '4px solid #FF0000' }}
  >
   Purchase the Workflow Pack for $19.99
  </button>
            
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </Page>
  );
});

Workflow.displayName = 'Workflow';
export default Workflow;
