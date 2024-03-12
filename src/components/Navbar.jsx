import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PizzasContext } from '../context/PizzasContext';
import { useContext } from 'react';

const MiNavbar = () => {
  const { pizzas } = useContext(PizzasContext);

  const totalPrice = pizzas.reduce((total, pizza) => {
    return total + (pizza.isInShoppingCart ? pizza.price * (pizza.quantity || 1) : 0)
  }, 0)

  return (
    <>

<Navbar bg="primary" data-bs-theme="dark">
<Container>
  <Navbar.Brand><Link to='/' className='text-light' style={{textDecoration:'none', fontSize: '20px'}}>🍕Pizzería Mamma Mia!</Link></Navbar.Brand>
  <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
    
    <Nav style={{paddingLeft:'25px'}}><Link to='/carrito' className='text-light' style={{textDecoration:'none', fontSize: '20px'}}>🛒 ${totalPrice.toLocaleString('de-DE')}</Link></Nav>
  </Nav>
</Container>
</Navbar>

</>
  )
}

export default MiNavbar