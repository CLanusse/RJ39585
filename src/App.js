// import Noticias from './components/Noticias.js'
// import { Noticias } from './components/Noticias/Noticias.js';
import { Contenedor } from './components/Contenedor/Contenedor.js';
import { Presentacion } from './components/Presentacion.js';
// import { Tutores } from './components/Tutores/Tutores.js';

function App() {


  return (
    <div>
      {/* <Nabvar />
      <ItemListContainer greeting="mensaje"/> */}

      <Contenedor>
        <Presentacion nombre="Conrado Lanusse" rol="Profesor" edad={31}/>
        <Presentacion nombre="Rodrigo Maestre" rol="Tutor Adjunto" edad={26}/>
        <Presentacion  rol="Tutor Regular" edad={45} nombre="Santiago"/>
      </Contenedor>

    </div>
  );
}

export default App;
