import React from 'react';
import imgChong from '../../assets/images/img congreso/ChongPNG.png';
import imgChongExtin from '../../assets/images/img congreso/ExtintoresPNG.png';
import imgTorito from '../../assets/images/img congreso/ToritoPNG.png';
import imgBeCurly from '../../assets/images/img congreso/BeCurlyPNG.png';


  const Sponsors = () => {
  return (
    <div className='flex flex-row gap-8 items-center justify-center bg-tertiaryColor bg-opacity-85 p-3 rounded-xl'>
        <img class="h-24 md:h-36" src={imgChongExtin} alt="" />
        <img class="h-10 md:h-16" src={imgChong} alt="" />
        <img class="h-28 md:h-44" src={imgTorito} alt="" />
        <img class="h-24 md:h-32" src={imgBeCurly} alt="" />
    </div>
  );
  };

export default Sponsors;