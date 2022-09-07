import "bootstrap/dist/css/bootstrap.min.css";
// import Button  from "react-bootstrap";


function OrderButton({usuario,setUsuarios, ordenAz}) {
    return (
      <>
  
      <div className="boton-orden mt-5" id="barraOrden"  >
      <p>Ordena los nombres de los personajes alfabéticamente</p>
        <button
          className="btn btn-dark"
          onClick={() => setUsuarios(ordenAz.sort((a, b) => usuario.firstName.localeCompare(usuario.firstName)))}> A - Z </button>
      </div>
      </>
    );
  }
  
  export default OrderButton