import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { FormDataProvider } from "./context/FormDataContext";
import AboutPage from "./pages/AboutPage/AboutPage";
import FormPage from "./pages/FormPage/FormPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="container">
      <FormDataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </FormDataProvider>
    </div>
  );
}

export default App;
