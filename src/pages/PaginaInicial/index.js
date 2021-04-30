import React from "react";
import { Link } from "react-router-dom";
import CarrouselGenre from "../../components/CarrouselGenre";

const PaginaInicial = () => {
  return (
    <>
      <mainBanner />
      <CarrouselGenre />
    </>
  );
};

export default PaginaInicial;
