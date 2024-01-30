import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import OfertasComponent from './Components/OfertasComponent';
import ListadoComponent from './Components/ListadoComponent';

function App() {
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

