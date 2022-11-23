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
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{order}</button>
                </div> : 
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart

// # Challenge


// 2. Change the trash icon to a filled-in trash icon when hovering over it

// Filled trash icon to use when hovering:
// <i className="ri-delete-bin-fill"></i>

// Empty trash icon to use when NOT hovering:
// <i className="ri-delete-bin-line"></i>