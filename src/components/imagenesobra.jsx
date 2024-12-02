import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const Imagenesobra = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Cantidad de imágenes visibles
    slidesToScroll: 1,
    centerMode: true, // Centrar las imágenes
    responsive: [
      {
        breakpoint: 768, // Configuración para pantallas pequeñas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Configuración para pantallas muy pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/450/300?random=4",
    "https://picsum.photos/350/300?random=5",
    "https://picsum.photos/550/300?random=6",
    "https://picsum.photos/600/300?random=7",
  ];

  return (
    <div style={{ maxWidth: "100%", margin: "0", padding: "0" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} style={{ padding: "0" }}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{
                height: "200px", // Altura fija
                width: "100%", // Ocupa el ancho completo del slide
                objectFit: "cover", // Mantiene proporción y rellena sin espacios
                display: "block",
              }}
            />
          </div>
        ))}
      
      </Slider>
    </div>
  );
};

export default Imagenesobra;
