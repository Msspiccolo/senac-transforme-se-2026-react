import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Auth from './pages/auth.jsx';
function App() {
  /*Tudo do lado de fora é Js*/

  return (   /*Tudo dentro do () é HTML Return só retorna 1 coisa*/
    <Routes>
      <Route path="/" element={<Home />}   /*Indica que está retornando o return de Home*//>
      
      <Route path="/auth" element={< Auth />} />


    </Routes>

  )
}


export default App;