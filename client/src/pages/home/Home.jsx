import React from "react";
import Banner from "../../components/Banner";
import Category from "./Categories";
import OurServices from "./OurServices";
import SpecialProducts from "./SpecialProducts";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <SpecialProducts />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;
