import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreditScore from "./pages/CreditScore";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Emi from "./pages/Emi";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/credit-score" element={<CreditScore />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignUp flag={true} />} />
        <Route exact path="/emi" element={<Emi />} />
      </Routes>
    </Router>
  );
}

export default App;
