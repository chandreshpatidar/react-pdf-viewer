import './App.css';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './testPdf.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

function App() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <h2>Showing PDF using pdf-react</h2>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          width={window?.innerWidth / 1.9}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <div style={{ width: window?.innerWidth / 1.9 }}>
        <button
          disabled={pageNumber === 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          disabled={pageNumber === numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
