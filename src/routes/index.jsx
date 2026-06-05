import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';
import Detalhes from '../pages/Detalhes';

export function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/identidade/:id" element={<Detalhes />} />
      </Route>

      <Route 
        path="*" 
        element={
          <h1 style={{ color: '#d4af37', textAlign: 'center', marginTop: '50px' }}>
            Erro 404 - Anomalia Detectada. Página não encontrada.
          </h1>
        } 
      />
    </Routes>
  );
}