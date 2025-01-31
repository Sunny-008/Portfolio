import { useState } from "react";

import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/hero";
import { About } from "./components/About/About";
import Skill from "./components/SKILL/Skill";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <HashRouter basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Skill />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Projects />}></Route>
        </Routes>

        <Contact />
      </HashRouter>
    </div>
  );
}

export default App;
