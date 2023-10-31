import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getProduct } from './redux/categorySlice'
import ReactPaginate from 'react-paginate';
import './pacino.css'
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const Product = ({category}) => {



  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  useEffect(() => {
    if(category){
      dispatch(getAllCategory(category))
    } {

      dispatch(getProduct())
    }
  },[dispatch,category])

  const { product,loading } = useSelector((state) => state.Category)
  console.log(product);


  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
        {
        loading ? <div> < Skeleton count={3} /> </div>
         : <div className='d-flex flex-wrap justify-content-center gap-4 '>
            {
              currentItems?.map((item) => (
                <div onClick={() => navigate(`/details/${item.id}`)}  className='cursorPointer position-relative ms-3' style={{width:"210px",height:"180px"}}>
                    <img  src={item?.image} className='w-100 h-75 mx-auto' alt=""/>
                    <p className='text-center fw-bold text-truncate'>{item?.title}</p>
                    <span className='badge bg-dark position-absolute top-0 start-100 translate-middle'>{item?.price} <small className='text-sm'>AZN</small></span>
                </div>
              ))
            }
         </div> 
      }

<ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Product