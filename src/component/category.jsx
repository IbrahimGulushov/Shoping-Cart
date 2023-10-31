import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getCategory } from './redux/categorySlice'
import './pacino.css'
import Skeleton from 'react-loading-skeleton'


const Category = ({setCategory}) => {





  const { category,loading } = useSelector((state) => state.Category)
 

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())

  },[dispatch])

  const handleClick = (items) => {
    setCategory(items)
    dispatch(getAllCategory(items))
  }
  return (
    <>
        <ul className='list-group'>
              {loading ? <div>
                  < Skeleton count={3} />
              </div>
              : <div>
                  {category?.map((item) => (
                    <li onClick={() => handleClick(item)} className='cursorPointer list-group-item list-group-item-action'>{item}</li>
                  ))}
              </div>  
            }
        </ul>
    </>
  )
}

export default Category