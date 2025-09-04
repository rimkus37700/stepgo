import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepGoLanding from "./pages/StepGoLanding";
import Success from "./pages/Success";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepGoLanding />} />
        <Route path="/success" element={<Success />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}
