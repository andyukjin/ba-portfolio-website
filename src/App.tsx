import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        {/* Central content container */}
        <div className="content-wrapper">
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}
export default App;
