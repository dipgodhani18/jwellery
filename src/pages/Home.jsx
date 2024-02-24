import React from "react";
import CollectionRow from "../components/home/collectionRow/CollectionRow";
import AboutRow from "../components/home/AboutRow";
import FeatureRow from "../components/home/featureRow/FeatureRow";
import CategoriesRow from "../components/home/categoriesRow/CategoriesRow";
import ShoppingRow from "../components/home/shoppingRow/ShoppingRow";
import ReviewRow from "../components/home/reviewRow/ReviewRow";
import BrandRow from "../components/home/BrandRow";
import BlogRow from "../components/home/blogRow/BlogRow";
import Slide from "../components/home/slider/Slide";

function Home() {
  return (
    <>
      <Slide />
      <CollectionRow />
      <AboutRow />
      <FeatureRow />
      <CategoriesRow />
      <ShoppingRow />
      <ReviewRow />
      <BrandRow />
      <BlogRow />
    </>
  );
}

export default Home;
