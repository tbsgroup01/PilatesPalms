import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Book from "./pages/Book";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;