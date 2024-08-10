import Button from "../../components/button/Button"
import CartItem from "../../components/cartitem/CartItem"
import Container from "../../components/container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Cart() {

    const { cartItems } = useShoppingCartContext()

    return (
        <div>
            <Container>
                <div>
                    {
                        cartItems.map(item => (
                            <CartItem {...item}/>

                        ))
                    }

                </div>

                <div className="bg-gray-200 rounded">
                    <p>Total Price: 245$</p>
                    <p>Discount : 45$</p>
                    <p>Final Price: 200$</p>
                </div>
                <Button className="mt-2 float-right	" variant="success">
                    Submit Order
                </Button>

            </Container>

        </div>
    )
}

export default Cart