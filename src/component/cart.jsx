import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, totalAmountt, updateQuantity } from './redux/cart'





const Cart = () => {

    
    
    
    const { cart, loading,totalAmount } = useSelector((state) => state.Cart)
    
 

    const dispatch = useDispatch()

    dispatch(totalAmountt())
    
    const removeCartt = (id) => {
        dispatch(removeCart({ id }))
        
    }
    
    const updateNewQuantity = (id, updatedQuantity) => {
        if (updatedQuantity <= 0) {
            // Eğer güncellenen miqdar 0 veya daha azsa, ürünü sepetten silmek için removeCart fonksiyonunu çağırın.
            dispatch(removeCart({ id }));
        } else {
            // Eğer miqdar 0 değilse, güncel miqdarı güncellemek için updateQuantity fonksiyonunu çağırın.
            dispatch(updateQuantity({ id, quantity: updatedQuantity }));
        }
    };
    
    const updatePlusQuantity = (id, updatedQuantity) => {
        dispatch(updateQuantity({ id, quantity: updatedQuantity }))
    };

   
    return (
        

        <div>
            {
                cart.length > 0 ?
                    <>
                        {
                            loading ? <div> </div>
                                : <div>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='text-center'>Image</th>
                                                <th scope="col" className='text-center'>Product</th>
                                                <th scope="col" className='text-center'>Price</th>
                                                <th scope="col" className='text-center'>Quantity</th>
                                                <th scope="col" className='text-center'>Remove</th>
                                            </tr>
                                        </thead>
                                        {cart.map((item) => (
                                            <tbody>
                                                <tr >
                                                    <td>
                                                        <div className='m-auto w-50'>
                                                            <img src={item.image} alt="" style={{ height: "45px", width: "40px" }} />
                                                        </div>
                                                    </td>
                                                    <td className=' fs-5 text-center'>{item.title}</td>
                                                    <td className=' fs-5 text-center'>{item.price}</td>
                                                    <td>
                                                        <div className='d-flex w-75 m-auto btn-group'>
                                                            <button className='btn btn-secondary' onClick={() => updateNewQuantity(item.id, item.quantity - 1)}>-</button>
                                                            <input type="text" className='border border-secondary form-control text-center' value={item.quantity} style={{ outline: "none", width: "50px" }} />
                                                            <button className='btn btn-secondary' onClick={() => updatePlusQuantity(item.id, item.quantity + 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='w-75 m-auto'>

                                                            <button onClick={() => removeCartt(item.id)} className='btn btn-danger'>Remove</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                        <div className='container d-flex  justify-content-end  border-top border-1  position-fixed bottom-0'>
                                            <div className='box d-flex'>
                                                <h3 className=' p-2'>Toplam Tutar: ${totalAmount}</h3>
                                            </div>
                                        </div>
                                    </table>
                                </div>
                        }
                    </>
                    : <div className='mt-5'>
                        <h3 className='text-center'>Cart is empty.</h3>
                        <div className='w-50 m-auto'>
                            <img src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg" alt="" style={{ height: "320px" }} />

                        </div>
                    </div>
            }


        </div>
    )
}

export default Cart