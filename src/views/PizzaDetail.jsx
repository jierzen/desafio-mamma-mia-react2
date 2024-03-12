import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { Button, Col, Container, Row, Spinner, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PizzaDetail = () => {
    const { id } = useParams()
    const { pizzas, addToCart } = useContext(PizzasContext)

    const pizza = pizzas.find(pizza => pizza.id === id);

    if (!pizza) {
        return (
            <Container className="pt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </Container>
        );
    }

    const agregarCarrito = (id) => {
        addToCart(id)
    };

    return (
        <Container className="pt-5" style={{minHeight:'100vh'}}>
            <Card>
                <Row>
                    <Col md={7}>
                        <Card.Img src={pizza.img} alt={pizza.name} style={{minHeight: '100%'}}/>
                    </Col>
                    <Col md={5}>
                        <Card.Body>
                            <Card.Title><h2>{pizza.name.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}</h2></Card.Title>
                            <hr/>
                            <Card.Text as="div">
                                <div style={{textAlign:'justify'}}>{pizza.desc}</div>
                                <div><b>Ingredientes:</b></div>
                                <ul style={{ listStyle: 'none' }}>
                                    {pizza.ingredients.map((ingr, index) => (
                                        <li key={index}>🍕{ingr}</li>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3><b>Precio:</b> ${(pizza.price).toLocaleString('de-DE')}</h3>
                                    <Button variant="danger" onClick={() => agregarCarrito(pizza.id)}>Añadir 🛒</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default PizzaDetail