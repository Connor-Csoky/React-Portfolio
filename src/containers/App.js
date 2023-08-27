import "./App.css";
import Header from "../pages/header/Header";
import Projects from "../pages/projects/Projects";
import Education from "../pages/education/Education";
import Work from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import Hr from "../components/Hr";

export default function App() {
  return (
    <div>
      <Header />
      <Education />
      <Hr />
      <Work />
      <Hr />
      <Projects />
      <Hr />
      <Contact />
    </div>
  );
}
