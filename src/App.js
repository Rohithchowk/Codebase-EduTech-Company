// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
// import Reservations from "./pages/Reservations";
// import OrderOnline from "./pages/OrderOnline";
import Contact from "./pages/Conatact"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} /> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
