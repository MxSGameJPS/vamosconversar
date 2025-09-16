import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ParticleTextEffect } from "./components/particle-text-effect";
import {  ParticleTextEffect2 } from "./components/dotted-surface";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParticleTextEffect />} />
        <Route path="/vamosconversar" element={<ParticleTextEffect2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
