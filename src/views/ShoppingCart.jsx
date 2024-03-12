import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const { pizzas, addToCart, removeFromCart } = useContext(PizzasContext);

    const navigate = useNavigate();

    const verDetalles = (id) => {
        navigate(`/pizza/${id}`);
    };

    const incrementarCantidad = (id) => {
        addToCart(id)
    }

    const disminuirCantidad = (id) => {
        removeFromCart(id)
    }

    const pizzasEnCarrito = pizzas.filter(pizza => pizza.isInShoppingCart && pizza.quantity > 0);

    const totalPrecio = pizzasEnCarrito.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);

    return (
        <Container className="pt-5" style={{minHeight:'100vh'}}>
            
            <h3>Detalles del pedido</h3>
            {pizzasEnCarrito.length > 0 ? (
            <>
                {pizzasEnCarrito.map((pizza, index) => (
                        <Card key={pizza.id}>
                            <Row key={index} className="align-items-center my-3">
                                <Col md={2}>
                                    <img src={pizza.img} alt={`Pizza ${pizza.name}`} style={{ maxWidth: '100%', cursor:'pointer', paddingLeft:'20px' }} onClick={()=>verDetalles(pizza.id)}/>
                                </Col>
                                <Col md={4} className="d-flex justify-content-start align-items-center">
                                    <h5>{pizza.name.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}</h5>
                                </Col>
                                <Col md={6} className="d-flex justify-content-end align-items-center">
                                    <div className="text-end">
                                        <Row>
                                            <Col>
                                                <h5 className="text-success">Precio:</h5>
                                            </Col>
                                            <Col>
                                                <h5 className="text-success">${(pizza.price * pizza.quantity).toLocaleString('de-DE')}</h5>
                                            </Col>
                                            <Col>
                                                <div style={{paddingRight:'20px'}} className="d-flex align-items-center justify-content-end">
                                                    <Button variant="danger" onClick={() => disminuirCantidad(pizza.id)}>-</Button>
                                                    <span className="mx-2"><h5>{pizza.quantity}</h5></span>
                                                    <Button onClick={() => incrementarCantidad(pizza.id)}>+</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                </Col>
                                
                            </Row>
                            </Card>
                        ))}
                <h2 className="mt-4">Total: ${totalPrecio.toLocaleString('de-DE')}</h2>
                <Button variant="success" className="mt-3 mb-5">Ir a Pagar</Button>
                </>
                ):(
                <Card>
                    <Container className="py-5 align-items-center text-center">
                        <Row>
                            <Col>
                                <h4>Tu carrito está vacío</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>🍕Añade algunas deliciosas pizzas para comenzar tu pedido.🍕</p>
                            </Col>
                        </Row>
                    </Container>
                </Card>   
            
            )}
        </Container>
    );
}

export default ShoppingCart;
