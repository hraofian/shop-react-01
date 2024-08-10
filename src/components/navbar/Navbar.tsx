import React from "react";
import { Link } from 'react-router-dom'
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

function Navbar() {

    const { cartQty, handleLogout } = useShoppingCartContext()

    return (
        <div className="h-14 border-b shadow flex items-center  bg-amber-200">
            <Container>
                <div className="flex justify-between ">
                    <ul className="flex">
                        <li className="ml-4"><Link to='/'>Home</Link></li>
                        <li className="ml-4"><Link to='/store'>Store</Link></li>

                        <Button onClick={handleLogout}>
                            Logout
                        </Button>

                    </ul>

                    <div>
                        <Link to={'/cart'}>
                            <button>
                                Shop Basket
                                <span>  {cartQty !== 0 ? cartQty : 'is empty'}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>

        </div>

    )
}
export default Navbar