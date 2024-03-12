import { useContext } from "react"
import { PizzasContext } from "../context/PizzasContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";


const Catalog = () => {
    const { pizzas, addToCart } = useContext(PizzasContext);
    const navigate = useNavigate();

    const verDetalles = (id) => {
        navigate(`/pizza/${id}`);
    };

    const agregarCarrito = (id) => {
        addToCart(id)
    };

    return (
        <Container>
            <Row style={{rowGap:'1rem'}}>
                {pizzas.map((pizza) => (
                    <Col sm={3} className="d-flex gap-4 row-gap-1" key={pizza.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ cursor:'pointer'}} variant="top" src={pizza.img}  onClick={()=>verDetalles(pizza.id)}/>
                            <Card.Body>
                                <Card.Title style={{ cursor:'pointer'}} onClick={()=>verDetalles(pizza.id)}>{pizza.name.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}</Card.Title>
                                <hr/>
                                <Card.Text as="div">
                                    <b>Ingredientes:</b>
                                    <ul style={{ listStyle:'none'}}>
                                        {pizza.ingredients.map((ingr, index)=>(
                                            <li key={index}>🍕{ingr}</li>
                                        ))}
                                    </ul>
                                    <h3 className="text-center">${(pizza.price).toLocaleString('de-DE')}</h3>
                                </Card.Text>
                                <div>
                                <Button variant='info text-light' onClick={()=>verDetalles(pizza.id)}>Ver Más 👀</Button>
                                {' '}
                                <Button variant="danger" onClick={() => agregarCarrito(pizza.id)}>Añadir 🛒</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}                
            </Row>
        </Container>
    );
};

export default Catalog;
