import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <Container className="pt-5" style={{backgroundImage:"url(/pizza-banner.jpg)", minWidth:'100vh', minHeight:'100vh', backgroundRepeat:'no-repeat'}}>
      <h1 className="mb-4 text-light" >La ruta que intentas consultar no existe :/</h1>
      <Button onClick={() => navigate('/')} variant="primary">Volver al Inicio</Button>
    </Container>
  );
};


export default NotFound