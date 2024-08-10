
// import mobilephoto from './../../assets/photo/mobile.png'
import { IProduct } from '../../types/server'

type TProductItem = IProduct


function ProductItem({title,price,image,description}:TProductItem) {
    return (
        <div className=" shadow border bg-pink-600 m-3">
            <img className=' rounded-t size-20 m-2  ' src={image} alt="" />
            <div className=" flex justify-between p-4">
                <h3>Title:{title}</h3>
                <span>Price:{price}$ </span>
            </div>
            <div className="p-4">
                <p className=" line-clamp-2 text-xs		">
                    Description: {description}
               
                </p>
            </div>
        </div>

    )
}
export default ProductItem 