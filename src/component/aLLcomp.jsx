import React, { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import Category from './category'
import Product from './product'


const ALLcomp = () => {

  const [category,setCategory] = useState('');

  

  return (
    <div className='container'>
        < Navbar />
        < Home />
        <div className='row mt-5'>
          <div className="col-lg-3">
            < Category setCategory={setCategory} />
          </div>
          <div className="col-lg-9 ">
            < Product category={category} />
          </div>
        </div>
        
    </div>
  )
}

export default ALLcomp