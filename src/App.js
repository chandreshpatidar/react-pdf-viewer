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

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default App;
