import React, { useState } from 'react';

const cardPonente = ({ image1, image2 }) => {
  const [bgImage, setBgImage] = useState(image1);

  // Función para alternar entre las imágenes
  const toggleBackground = () => {
    setBgImage(prevImage => (prevImage === image1 ? image2 : image1));
  };

  return (
    <div
      className=" mx-10 my-5 h-96 bg-contain bg-no-repeat bg-center rounded-lg shadow-lg hover:border-blue-500 hover:border-4 text-white cursor-pointer transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={toggleBackground}
    >
    </div>
  );
};

export default cardPonente;
