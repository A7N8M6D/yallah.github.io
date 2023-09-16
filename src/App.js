import React from "react";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/Home/About/About";
import { Route, Routes } from "react-router-dom";
import Blog_pag from "./components/Pages/Home/Blog_Page/Blog_pag";
import Feature_page from "./components/Pages/Home/Feature/Feature_page";
import Pricing_page from "./components/Pages/Pricing_page/Pricing_page";
import contact_pag from "./components/Pages/contact_pag/contact_pag";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>

        <Route path="/about" element={<About />}>
          {" "}
        </Route>

        <Route path="/feature" element={<Feature_page />}>
          {" "}
        </Route>

        <Route path="/blog" element={<Blog_pag />}>
          {" "}
        </Route>

        <Route path="/pricing" element={<Pricing_page />}>
          {" "}
        </Route>

        <Route path="/contact" element={<contact_pag />}>
          {" "}
        </Route>
      </Routes>
      
    </>
  );
};
export default App;
