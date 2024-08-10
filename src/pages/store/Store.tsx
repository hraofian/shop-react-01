import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Form, Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/server";

function Store() {

    const [products, setProduct] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts().then((result) => {
            setProduct(result)
            console.log({ ...result })
        })
    }, [])

    return (
        <div className=" bg-pink-300 mt-4">
            <Container>
                <div className="grid grid-cols-4 gap-4 mb-4">
                    {products.map((item) => 
                        (
                            <Link key={item.id} to={`/product/${item.id}`}>
                                <ProductItem {...item} />
                            </Link>
                        )
                    )}
                </div>
            </Container>
        </div>
    )
}
export default Store