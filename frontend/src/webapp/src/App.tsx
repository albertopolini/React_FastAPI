import RosePage from "./pages/rose";
import ListaGiocatoriPage from "./pages/listaGiocatori";
import AstaGiocatorePage from "./pages/astaGiocatore";

import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <main className="bg-gray-800 p-5 h-screen-xl">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RosePage />} />  {/* Lista dei giocatori */}
        <Route path="/lista-giocatori" element={<ListaGiocatoriPage />} />
        <Route path="/asta-giocatore" element={<AstaGiocatorePage />} />  {/* Dettaglio del giocatore */}
        </Routes>
      </Router>

    
    </main>
    )
}

export default App
