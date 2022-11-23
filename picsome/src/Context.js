import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    function addToCart(img) {
        setCartItems((prevImg) => [
            ...prevImg,
            img
        ])
    }

    function removeFromCart(img) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id))
    }

    console.log(cartItems)
    
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, cartItems, setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

