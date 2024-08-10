import { useEffect, useState } from 'react'
import mobilephoto from '../../assets/photo/mobile.png'
import Button from '../button/Button'
import { getProduct } from '../../services/api'
import { IProduct } from '../../types/server'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

interface ICartItem {
    id: number
    qty: number
}

function CartItem({ id, qty }: ICartItem) {

    const [product, setProduct] = useState<IProduct>()

    const { handleIncreaseProductQty,
        handDecreaseProductQty,
        handleRemoveProduct }
        = useShoppingCartContext()


    useEffect(() => {
        getProduct(id).then((data) => {
            setProduct(data)
        })
    }, [])



    return (
        <div className='flex mt-4  border-b pb-2'>
            <Link to={`/product/${id}`}>
                <img className="rounded w-28"
                    src={product?.image}
                    alt=""
                />
            </Link>

            <div className='ml-4'>
                <h3 >Title: {product?.title}</h3>
                <div className='mt-2'>
                    <Button onClick={() => handDecreaseProductQty(id)} variant='primary'>-</Button>
                    <span className='mx-2'>{qty}</span>
                    <Button onClick={() => handleIncreaseProductQty(id)} variant='primary'>+</Button>
                    <Button onClick={() => handleRemoveProduct(id)} className='ml-3' variant='danger'>Remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem