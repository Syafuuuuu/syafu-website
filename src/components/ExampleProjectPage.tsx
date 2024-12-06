import ProjectHero from "./ProjectHero";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import Gallery from "./Gallery";
import VideoBlock from "./VideoBlock";
import QuoteBlock from "./QuoteBlock";

const ExampleProjectPage = () => (
  <div>
    <main className="content section">
      <ProjectHero
        imageUrl="./public/assets/OHCrab.png"
        title="Example Project"
      />
      <TextBlock content="This is an example text block." />
      <ImageBlock
        src="./public/assets/BrainMRI.png"
        alt="Example"
        caption="This is an example image."
      />
      <Gallery
        images={[
          { src: "./public/assets/OHCrab.png", alt: "Example 1" },
          { src: "./public/assets/BrainMRI.png", alt: "Example 2" },
        ]}
      />
      <VideoBlock
        src="https://www.youtube.com/embed/3KfzmnXhJxI"
        title="Example Video"
      />
      <QuoteBlock quote="This is an example quote." author="Author Name" />
    </main>
  </div>
);

export default ExampleProjectPage;
