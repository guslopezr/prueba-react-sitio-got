import "./index.css";
import * as React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import imagen from "./assets/img/imagen1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CardRendering2 from "./Components/CardRendering2";
import OrderButton from "./Components/OrderButton";

function App() {
  return (
    <div className="font-face-gm"  >
      <Header />
      <OrderButton />
      <CardRendering2 />
      <Footer /> 
    </div>
  );
}

export default App;
