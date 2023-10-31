import { Route,Routes } from 'react-router-dom'
import Allcom from './component/aLLcomp'
import Details from './component/details';
import Navbar from './component/navbar';
import Cart from './component/cart';

function App() {
 
  return (
      <>
          <Routes>
              < Route path='/' element={< Allcom />} />
              < Route path='/details/:id' element={
                <div className='container'>
                    <  Navbar />     
                    < Details />
                </div>
              } />

              < Route path='/cart' element={
                <div className='container'>
                    <  Navbar />   
                  < Cart />
                </div>
                 } />
          </Routes>
      </>
  )
}

export default App;
