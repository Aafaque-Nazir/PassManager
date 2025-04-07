import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import { Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contribute />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </>
  );
}

export default App;
