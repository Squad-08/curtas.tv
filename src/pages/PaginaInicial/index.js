import React from "react";
import mainBanner from '../../components/mainBanner'
import CarrouselGenre from "../../components/CarrouselGenre";
// import { Link } from "react-router-dom";


const PaginaInicial = () => {
  return (
    <>
      <mainBanner />
      <CarrouselGenre />
    </>
  );
};

export default PaginaInicial;
