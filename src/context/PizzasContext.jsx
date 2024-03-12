import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasJSON = "/pizzas.json"; 

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        try {
            const res = await fetch(PizzasJSON);
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }
            const pizzasDB = await res.json();
            setPizzas(pizzasDB.map(pizza => ({ ...pizza, isInShoppingCart: false, quantity: 0 })));
        } catch (error) {
            console.error("Fallo al hacer fetch a pizzas:", error);
        }
    };

    const addToCart = (id) => {
        setPizzas(currentPizzas => currentPizzas.map(pizza => {
            if (pizza.id === id) {
                return { ...pizza, isInShoppingCart: true, quantity: pizza.quantity + 1 };
            }
            return pizza;
        }));
    };

    const removeFromCart = (id) => {
        setPizzas(currentPizzas => currentPizzas.map(pizza => {
            if (pizza.id === id) {
                const newQuantity = pizza.quantity - 1;
                return newQuantity > 0 ? { ...pizza, quantity: newQuantity } : { ...pizza, isInShoppingCart: false, quantity: 0 };
            }
            return pizza;
        }));
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzasContext.Provider
            value={{
                pizzas,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;
