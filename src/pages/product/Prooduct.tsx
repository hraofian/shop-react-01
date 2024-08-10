import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
// import mobilephoto from '../../assets/photo/mobile.png'
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


function Product() {
    const params = useParams<{ id: string }>()
    const [product, setProduct] = useState<IProduct>()

    const { handDecreaseProductQty, handleIncreaseProductQty, cartItems, getProductQty, handleRemoveProduct } = useShoppingCartContext()

    useEffect(() => {
        getProduct(params.id as string).then((data) => {
            setProduct(data)
        })
    }, [])

    console.log(cartItems)

    return (
        <div className=" bg-pink-300">
            <Container>
                <div className=" h-96 shadow mt-4 grid grid-col-12 bg-lime-500">
                    <div className="bg-amber-500 col-span-10 p-4">
                        <h1 className="text-red-950">Title:{product?.title}</h1>
                        <div>
                            <p>Price: {product?.price}$</p>
                            <p>Description: </p>
                            <p>{product?.description}
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-500 col-span-2 p-3">
                        <img className="rounded"
                            src={product?.image}
                            alt=""
                        />

                        {
                            getProductQty(parseInt(params.id as string)) === 0 ?
                                <Button
                                    onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                                    className='mt-2 w-full !py-3' variant='primary'>
                                    Add to Card
                                </Button>
                                :
                                <>
                                    <div className="grid grid-cols-3">


                                        <Button
                                            onClick={() => { handDecreaseProductQty(parseInt(params.id as string)) }}
                                            className='mt-2 w-full !py-3' variant='danger'>
                                            -
                                        </Button>

                                        <span className=" flex justify-center items-center">{getProductQty(parseInt(params.id as string))}</span>

                                        <Button
                                            onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                                            className='mt-2 w-full !py-3' variant='primary'>
                                            +
                                        </Button>


                                    </div>
                                    <Button
                                        onClick={() => { handleRemoveProduct(parseInt(params.id as string)) }}
                                        className='mt-2 w-full !py-3' variant='danger'>
                                        Remove
                                    </Button>


                                </>

                        }





                    </div>


                </div>
            </Container>
        </div>

    )
}
export default Product

