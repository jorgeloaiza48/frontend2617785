
import './App.css';
import Inicio from './componentes/Inicio';
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import UsuariosRegistrados from './componentes/UsuariosRegistrados'

function App() {

  return (
    // El HasRouter es para que cargue correctamente las vista según la ruta https://www.youtube.com/watch?v=bv2pdxqVqBc
    <HashRouter>
      <Routes>
        <Route exact path='/'         element={<Inicio />} />
        <Route exact path='/registro' element={<Registro />} />
        <Route path="*"               element={<NotFound />} />
        <Route exact path='/usuarios-registrados' element={<UsuariosRegistrados/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
