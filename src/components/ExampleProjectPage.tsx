import ProjectHero from "./ProjectHero";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import Gallery from "./Gallery";
import VideoBlock from "./VideoBlock";
import QuoteBlock from "./QuoteBlock";
import PDFReader from "./PDFReader";

const ExampleProjectPage = () => (
  <div>
    <main className="content section">
      <ProjectHero imageUrl="./assets/OHCrab.png" title="Example Project" />
      <TextBlock content="This is an example text block." />
      <ImageBlock
        src="./assets/BrainMRI.png"
        alt="Example"
        caption="This is an example image."
      />
      <Gallery
        images={[
          { src: "./assets/OHCrab.png", alt: "Example 1" },
          { src: "./assets/BrainMRI.png", alt: "Example 2" },
        ]}
      />
      <VideoBlock
        src="https://www.youtube.com/embed/3KfzmnXhJxI"
        title="Example Video"
      />
      <QuoteBlock quote="This is an example quote." author="Author Name" />
      <PDFReader fileUrl="./assets/ModelingReportFinalPSS.pdf" />
    </main>
  </div>
);

export default ExampleProjectPage;
