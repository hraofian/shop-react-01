import React, { ChangeEventHandler, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {

    const { handleLogin } = useShoppingCartContext()


    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value,
        })

    }

    return (
        <div>
            <Container>

                <div className="bg-amber-300 p-12 rounded m-5 items-center">

                    <input onChange={handleChange}
                        type="text"
                        placeholder="username"
                        name="username"
                        value={user.username}
                    />
                    <br />
                    <br />
                    <input onChange={handleChange}
                        type="password"
                        placeholder="password"
                        name="password"
                        value={user.password}
                    />
                    <br />
                    <br />
                    <Button onClick={()=> handleLogin(user.username , user.password)}>
                        Login
                    </Button>

                </div>

            </Container>
        </div>
    )
}


export default Login