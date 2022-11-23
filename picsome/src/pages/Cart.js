import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [order, setOrder] = useState("Place Order")
    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const totalPrice = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setOrder("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setCartItems([])
            setOrder("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPrice}</p>
            <div className="order-button">
                <button onClick={() => placeOrder()}>{order}</button>
            </div>
        </main>
    )
}

export default Cart

// Clicking the "Place Order" button should:
// 1. Change the text to "Ordering..."
// 2. Timeout for 3 seconds (to simulate an order being placed)
// 3. Log "Order placed!" to the console
// 4. Empty out the cart