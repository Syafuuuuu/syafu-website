import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
// import "./PDFReader.css";

// Adjust the workerSrc to point to the local copy in your public directory
pdfjsLib.GlobalWorkerOptions.workerSrc = "./public/pdf.worker.min.mjs";

interface PDFReaderProps {
  fileUrl: string;
}

const PDFReader: React.FC<PDFReaderProps> = ({ fileUrl }) => {
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = viewerContainerRef.current;
    if (!container) return;

    const loadingTask = pdfjsLib.getDocument(fileUrl);
    loadingTask.promise
      .then((pdf) => {
        container.innerHTML = ""; // Clear previous content

        const renderPage = (pageNumber: number) => {
          pdf.getPage(pageNumber).then((page) => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement("canvas");
            const canvasContext = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            if (canvasContext) {
              page
                .render({
                  canvasContext,
                  viewport,
                })
                .promise.then(() => {
                  console.log(`Page ${pageNumber} rendered`);
                });
            }

            container.appendChild(canvas);
          });
        };

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
          renderPage(pageNumber);
        }
      })
      .catch((error) => {
        console.error("Error loading PDF:", error);
      });
  }, [fileUrl]);

  return (
    <div ref={viewerContainerRef} className="pdf-viewer vertical-scroll"></div>
  );
};

export default PDFReader;
