import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ file }) => {
  return (
    <div style={viewerStyle}>
      <div style={cropStyle}>
        <Document file={file}>
          <Page pageNumber={1} width={600} /> {/* Adjust width as needed */}
        </Document>
      </div>
    </div>
  );
};

const viewerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', // Adjust as needed
};

const cropStyle = {
  height: '775px', // Height of the cropped area
  overflow: 'hidden',
  position: 'relative',
};

export default PdfViewer;