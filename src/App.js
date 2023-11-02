import { Route,Routes } from 'react-router-dom'
import Allcom from './component/aLLcomp'
import Details from './component/details';
import Cart from './component/cart';
import NavItem from './component/NavItem';


function App() {
 
  return (
      <>
      < NavItem />
          <Routes>
              < Route path='/' element={< Allcom />} />
              < Route path='/details/:id' element={< Details />}/>

              < Route path='/cart' element={< Cart />} />
          </Routes>
      </>
  )
}

export default App;
