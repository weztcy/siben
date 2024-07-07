import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
// import Penanganan from "./Page/Penanganan";
import Data from "./Page/Data";
// import Berita from "./Page/Berita";
// import Tentang from "./Page/Tentang";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        {/* {/* <Route path="/penanganan" element={<Penanganan />} /> */}
        // <Route path="/data" element={<Data />} />
        {/* <Route path="/berita" element={<Berita />} /> */}
        {/* <Route path="/tentang" element={<Tentang />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
