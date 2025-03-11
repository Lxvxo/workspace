import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NeuralOdyssey from "./pages/NeuralOdyssey";
import NeuralSpirit from "./pages/NeuralSpirit";
import Community from "./pages/Community";
import AI_Lab from "./pages/AI_Lab";
import poursi from "pages/course_page_example";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neural-odyssey" element={<NeuralOdyssey />} />
          <Route path="/neural-spirit" element={<NeuralSpirit />} />
          <Route path="/community" element={<Community />} />
          <Route path="/AI_lab" element={<AI_Lab />} />
          <Route path="/page" element={<poursi />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("No root element found!");
}
