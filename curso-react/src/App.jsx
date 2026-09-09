import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Painel from './pages/Painel.jsx';

function App() {
  // Tudo do lado de fora é JS

  return (
    // Tudo dentro do () é o JSX que o return retorna
    <Routes>

      {/* Indica que está retornando o componente Home */}
      <Route path="/" element={<Home />} />

      <Route path="/auth" element={<Auth />} />

      <Route path="/painel" element={<Painel />} />

    </Routes>
  );
}

export default App;