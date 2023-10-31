import {useRef} from 'react'
import {FaSearch,FaHeart,FaShoppingCart} from 'react-icons/fa'
import './pacino.css'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'


const Navbar = () => {

  const search = useRef()

  const { cart, } = useSelector((state) => state.Cart)

  const cartQuantity = cart.reduce((total,item) => total + item.quantity,0)

  const searchh = () => {

    search.current.focus()
  }

  const navigate = useNavigate()

  const handleClick = () => {
      navigate('/cart')
  }
  return (
    <nav className='navbar navbar-expand-lg  d-flex justify-content-between'>
        <a href="/" className='navbar-brand fs-1'>SnopZon</a>
        <ul className='navbar-nav'>
            <li className='nav-item d-flex align-items-center gap-3'>
                <input ref={search} type="text" className='form-control w-100 ' />
                < FaSearch onClick={searchh} size={38} className='cursorPointer' />
                < FaHeart size={38} className='cursorPointer'/>

            </li>
            <li className='nav-item d-flex align-items-center ms-2 position-relative'>
                < FaShoppingCart size={30} className='cursorPointer' onClick={handleClick} />
                <span className='badge bg-danger translate-middle rounded-circle position-absolute top-0 start-100'>{cartQuantity}</span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar