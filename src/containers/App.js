import "./App.css";
import Header from "../pages/header/Header";
import Projects from "../pages/projects/Projects";
import Education from "../pages/education/Education";
import Work from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import Hr from "../components/Hr";
import EndHr from "../components/EndHr";

export default function App() {
  return (
    <div>
      <Header />
      <Education />
      <div id="work" className="default-hr">
        <hr />
      </div>
      <Work />
      <Hr />
      <Projects />
      <Hr />
      <Contact />
      <EndHr />
    </div>
  );
}
