// components/PdfViewer.tsx
'use client'
import { useState } from 'react';
import { Document, Page, Outline } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Split from 'react-split';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import RightContainer from './RightContainer'
// 动态导入 EditorComponent，禁用服务器端渲染

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PdfViewer: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState('/test.pdf');
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function goToPrevPage(): void {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  }

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div className="h-screen w-full flex grid-cols-2">
      <Split
        className="flex w-full"
        sizes={[50, 50]}
        minSize={50}
        expandToMin={false}
        gutterSize={2}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="h-full w-full overflow-auto">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
            <Outline className="custom-class-name-1 custom-class-name-2" />
          </Document>
          <div className=''>

            <button onClick={goToPrevPage} className="previous">
              Prev
            </button>
            <button onClick={goToNextPage} className="next">
              Next
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
        <div className=''>
          <RightContainer />
        </div>
      </Split>
    </div>
  );
};

export default PdfViewer;
