
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Careers from "./pages/Careers";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Careers />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="*" element={<Careers />} />
    </Routes>
  </BrowserRouter>
);

export default App;
