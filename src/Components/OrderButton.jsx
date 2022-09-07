import "bootstrap/dist/css/bootstrap.min.css";
// import Button  from "react-bootstrap";


function OrderButton({setPersonajes, ordenAz}) {
    return (
      <>
  
      <div className="boton-orden mt-5" id="barraOrden"  >
      <p>Ordena los nombres de los personajes alfabéticamente</p>
        <button
          className="btn btn-dark"
          onClick={() => setPersonajes(ordenAz.sort((a, b) => a.firstName.localeCompare(b.firstName)))}> Ordenar </button>
      </div>
      </>
    );
  }
  
  export default OrderButton