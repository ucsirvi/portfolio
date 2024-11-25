import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles/global.css";
import Education from "./pages/Education.jsx";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-lg font-bold">
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
