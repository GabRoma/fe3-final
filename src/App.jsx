import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
