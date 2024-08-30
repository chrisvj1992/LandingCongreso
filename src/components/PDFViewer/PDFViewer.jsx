import React from 'react';

const PDFViewer = () => {
  return (
    <object
      data="../../assets/images/InstruccionesAbstracts.pdf"
      type="application/pdf"
      width="100%"
      height="600px"
    >
      <p>Tu navegador no puede mostrar este PDF. Descárgalo <a href="../../assets/images/InstruccionesAbstracts.pdf">aquí</a>.</p>
    </object>
  );
};

export default PDFViewer;
