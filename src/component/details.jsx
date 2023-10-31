import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts } from './redux/categorySlice'
import { addCart } from './redux/cart'


const Details = () => {

    const {id} = useParams()

    const [count,setCount] = useState(0)

    const dispatch = useDispatch()

    const { details } = useSelector((state) => state.Category)
    const { cart } = useSelector((state) => state.Cart)
    console.log(cart);
    useEffect(() => {
        dispatch(getAllProducts(id))
    },[])

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(details.rating.count > count)
        setCount(count + 1)
    }

    const handleClick = () => {
        if (count > 0) {
            // addCart reducer funksiyasına məhsul məlumatlarını göndərin
            dispatch(addCart({
                id: details?.id,
                title: details?.title,
                price: details?.price,
                image: details?.image,
                description: details?.description,
                quantity: count,
            }));
        }
    }
    
    
    
    
    
    
    
  return (
    <div className='d-flex gap-3'>
            <img className='w-25 ' style={{height:"330px"}} src={details?.image} alt="" />
        <div className='mt-4'>
            <h3>{details?.title}</h3>
            <p className=' w-50'>{details?.description}</p>
            <p className='text-danger m-0'>Rating:{details?.rating?.rate}</p>
            <p className='text-danger m-0'>Count:{details?.rating?.count}</p>

            <div className='d-flex'>
                <button className='fs-1 border border-0 bg-white' disabled={count === 0} onClick={decrement}>-</button>
                <input type="text" value={count} name="" id="" className='border border-0 text-center fs-3 fw-bold' style={{width:"40px",outline:"none"}}/>
                <button className='fs-1 border border-0 bg-white' onClick={increment}>+</button>
            </div>
            <button  onClick={handleClick} className='btn btn-secondary' disabled={count === 0}>Səbətə əlavə et</button>
        </div>
    </div>
  )
}

export default Details