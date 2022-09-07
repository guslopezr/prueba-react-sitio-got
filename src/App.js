import "./index.css";
import * as React from 'react';
import Header from "./Components/Header";
import MiApi from "./Components/MiApi";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="font-face-gm"  >
      <Header />
      <MiApi />
      <Footer /> 
    </div>
  );
}

export default App;
