import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OfertasComponent from './Components/OfertasComponent';
import ListadoComponent from './Components/ListadoComponent';

function App() {

  useEffect(() => {document.title = "Tienda de Música"});

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ListadoComponent />} />
          <Route path="/ofertas" element={<OfertasComponent />} />
        </Routes>
    </Router>
  );
}

export default App;

