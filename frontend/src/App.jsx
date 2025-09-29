import {Routes, Route} from 'react-router-dom';


import './App.css'
import Auth from './pages/auth/Auth';
import NotFound from './pages/notFound/NotFound';


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>


        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;
