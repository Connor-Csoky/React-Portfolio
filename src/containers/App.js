import "./App.css";
import Header from "../pages/header/Header";
import Projects from "../pages/projects/Projects";
import Education from "../pages/education/Education";

export default function App() {
  return (
    <div>
      <Header />
      <Education />
      <Projects />
    </div>
  );
}
