import Catalog from "../views/Catalog"

const Home = () => {
  return (
    <>
      <div className="App" style={{backgroundImage:"url(/pizza-banner.jpg)", backgroundRepeat:'no-repeat', WebkitBackgroundSize:'cover'}}>
        <h1 className="text-center text-light" >¡Pizzería Mamma Mia!</h1>
        <h3 className="text-center text-light">¡Tenemos las mejores pizzas que podrás encontrar!</h3>
        <hr/>
      </div>
      <Catalog/>
    </>
  )
}

export default Home