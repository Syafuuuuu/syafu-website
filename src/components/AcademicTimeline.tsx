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
        date="September 2021"
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
        date="2022"
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
        date="2022"
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
      {/* GDSC Lead */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#1a1d29", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #1a1d29" }}
        date="2023"
        iconStyle={{ background: "#1a1d29", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Google Developer Student Clubs UUM Lead 2023/2024
        </h3>
        <p>Details about your third year achievements and experiences.</p>
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
          Going all in for theoretical computer science for my Final Year
          Project!!!
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </section>
);

export default AcademicTimeline;
