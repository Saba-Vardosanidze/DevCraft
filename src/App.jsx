import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
