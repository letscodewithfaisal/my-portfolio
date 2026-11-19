import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SpaceBackground from "./components/SpaceBackground";


const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* One shared space background for every section (fixed, behind everything) */}
      <SpaceBackground />

      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
