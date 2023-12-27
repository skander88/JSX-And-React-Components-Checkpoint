import React from "react";
import "./App.css";
import Navbar from "./contenu/Navbar";
import Sec1 from "./contenu/Sec1";
import Sec2 from "./contenu/Sec2";
import Sec3 from "./contenu/Sec3";
import Foot from "./contenu/Foot";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Sec1 />
      </div>
      <div>
        <Sec2 />
      </div>
      <div>
        <Sec3 />
      </div>
      <div>
        <Foot />
      </div>
    </>
  );
}

export default App;
