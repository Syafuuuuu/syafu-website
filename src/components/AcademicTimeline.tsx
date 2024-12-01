// import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AcademicTimeline = () => (
  <section className="section">
    <h2 className="text-offwhite">Academic Timeline</h2>
    <VerticalTimeline>
      {/* ------------------------------------------------------------------------ */}
      {/* Year 1 Computer Science Pioneer */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="Sept 2021"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Started my journey in Computer Science at Universiti Utara Malaysia
        </h3>
        <p>
          Entered the degree life and found out my peers and I would be the
          first batch of Computer Science students in UUM. Faced with challenges
          and obstacles, we started our journey as pioneers.
        </p>
      </VerticalTimelineElement>
      {/* ------------------------------------------------------------------------ */}
      {/* AI/DA Interest - HCC Decision */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="July 2022"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Developed a keen interest in AI and Data Analytics
        </h3>
        <p>
          After learning Artificial Intelligence and Data Analytics, I fell in
          love. The idea that data that is all around us can be processed and
          turned into information became something that was exciting. To use
          data to find patterns, trends and insights to help people make better
          decisions was a pathway to helping people in the future.{" "}
        </p>
      </VerticalTimelineElement>
      {/* ------------------------------------------------------------------------ */}
      {/* GDSC Multimedia Lead */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="Oct 2022"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Google Developer Student Clubs UUM Multimedia Lead 2022/2023
        </h3>
        <p>
          When approached to be the Multimedia Lead of GDSC UUM, I jumped with
          joy at the opportunity. This was the start of my extra-curicullar
          journey where I could combine both my passions art and technology
          together. I set forth with fiery passion, a mind full of ideas, and a
          will of steel.{" "}
        </p>
      </VerticalTimelineElement>
      {/* ------------------------------------------------------------------------ */}
      {/* GDSC Lead */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="OCt 2023"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Google Developer Student Clubs UUM Lead 2023/2024
        </h3>
        <p>
          After a year of being the Multimedia Lead in GDSC UUM, I was given the
          opportunity to become the LEad of 2023/2024. In my tenure, we treated
          it as an experimental tenure to see what works and what doesn't in our
          managemnet focused university. Many issues and obsticals were met and
          overcomed, many lessons learned, and many memories made.
        </p>
      </VerticalTimelineElement>
      {/* ------------------------------------------------------------------------ */}
      {/* Final Year Project */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="Present"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Final year student specializing in Human-Centered Computing
        </h3>
        <p>
          At last, I have reached the final year of my degree adventure. To end
          it with a bang, I took upon a terrifying Final Year Project under a
          supervisor I much look up to. Combining both human psychology,
          emotion, and theorhetical computing, I set forth in making the world a
          more connected place without barriers.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </section>
);

export default AcademicTimeline;
