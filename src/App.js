import React from "react";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import { animated, useSpring } from "@react-spring/web";
import Necklace from "./pages/Necklace";

function App() {
  const animationStyles = useSpring({
    config: {
      duration: 1000,
    },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <>
      <animated.div style={animationStyles}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/necklace" element={<Necklace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </animated.div>
    </>
  );
}

export default App;
