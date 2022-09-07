//import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import OrderButton from "./OrderButton";

function MiApi() {
  const [personajes, setPersonajes] = useState([]);
  const [tablaPersonajes, setTablaPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [ordenAz, setOrdenAz] = useState([]);

  const peticionGet = async () => {
    await axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        setPersonajes(response.data);
        setTablaPersonajes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaPersonajes.filter((elemento) => {
      if (
        elemento.fullName
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.firstName
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.family 
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.title 
           .toString()
           .toLowerCase()
           .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setPersonajes(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
    setOrdenAz(tablaPersonajes);
  }, []);

  return (
    
    <div className="appContainer">
            <OrderButton setPersonajes={setPersonajes} ordenAz={ordenAz} />

      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda de personajes por nombre, título o casa"
          onChange={handleChange}
        />
        <Button className="btn btn-danger">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>


      <Container>
            <Row>
                {personajes.map((personaje, k) => (
                    <Col key={personaje.id} xs={12} md={4} lg={3}  >
                        <Card className="allCards" 
                        style={{width:"90%", height:"95%"}}
                         >
                            <Card.Img className="allCardsImgs" src={personaje.imageUrl} />

                            <Card.Body>
                                <Card.Title>{personaje.fullName}</Card.Title>
                                <Card.Text>Primer Nombre: {personaje.firstName}</Card.Text>
                                <Card.Text>Casa: {personaje.family}</Card.Text>
                                <Card.Text>Título: {personaje.title}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>


    </div>

    
  );

}

export default MiApi;
