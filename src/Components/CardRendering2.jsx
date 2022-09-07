//import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CardRendering2() {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
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
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.fullName
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.firstName
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    
    <div className="appContainer">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda personaje"
          onChange={handleChange}
        />
        <Button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>

      <Container>
            <Row>
                {usuarios.map((usuario, k) => (
                    <Col key={usuario.id} xs={12} md={4} lg={3}  >
                        <Card className="allCards" 
                        style={{width:"90%", height:"95%"}}
                         >
                            <Card.Img className="allCardsImgs" src={usuario.imageUrl} />

                            <Card.Body>
                                <Card.Title>{usuario.fullName}</Card.Title>
                                <Card.Text>Primer Nombre: {usuario.firstName}</Card.Text>
                                <Card.Text>Casa: {usuario.family}</Card.Text>
                                <Card.Text>Título: {usuario.title}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    {/*   <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Nombre</th>
              <th>Titulo</th>
              <th>Casa</th>
            </tr>
          </thead>

          <tbody>
            {usuarios &&
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.fullName}</td>
                  <td>{usuario.firstName}</td>
                  <td>{usuario.title}</td>
                  <td>{usuario.family}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}

    </div>

    
  );

}

export default CardRendering2;
