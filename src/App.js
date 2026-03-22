import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Article from './pages/Article';
import './App.css';

function App() {
  const [articles] = useState([
    { id: 1, titre: 'Découverte de React', contenu: 'Introduction à React et ses concepts principaux.' },
    { id: 2, titre: 'JavaScript moderne', contenu: 'ES6, modules, arrow functions et async/await expliqués.' },
    { id: 3, titre: 'Hooks en profondeur', contenu: 'useState, useEffect et custom hooks pour gérer l’état et les effets.' },
    { id: 4, titre: 'Gestion des formulaires', contenu: 'Comment créer et valider des formulaires dynamiques en React.' },
    { id: 5, titre: 'Routing avancé', contenu: 'React Router: routes imbriquées, paramètres et navigation programmatique.' }
  ]);

  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <Link to="/">Accueil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil articles={articles} />} />
        <Route path="/article/:id" element={<Article articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;