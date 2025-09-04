import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StepGoLanding from "./pages/StepGoLanding";
import Success from "./pages/Success";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepGoLanding />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
