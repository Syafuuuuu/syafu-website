// import React from "react";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import Gallery from ".//Gallery";
import VideoBlock from "./VideoBlock";
import QuoteBlock from "./QuoteBlock";

const ExampleProjectPage = () => (
  <div>
    <main className="content">
      <TextBlock content="This is an example text block." />
      <ImageBlock
        src="./assets/example.jpg"
        alt="Example"
        caption="This is an example image."
      />
      <Gallery
        images={[
          { src: "./assets/example1.jpg", alt: "Example 1" },
          { src: "./assets/example2.jpg", alt: "Example 2" },
        ]}
      />
      <VideoBlock
        src="https://www.youtube.com/embed/example"
        title="Example Video"
      />
      <QuoteBlock quote="This is an example quote." author="Author Name" />
    </main>
  </div>
);

export default ExampleProjectPage;
