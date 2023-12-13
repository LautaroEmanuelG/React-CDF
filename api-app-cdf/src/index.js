import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route , Routes,Navigate } from 'react-router-dom';
import Layout from './views/Layout';
import Character from './views/Character';
import Personaje from './views/Personaje-al-azar';
import SearchCharracters from './components/SearchCharacter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path="character/:nombreCharacter" element={<Character />} />
          <Route path="buscar/:nombreCharacter" element={<SearchCharracters />} />
          <Route path="personaje-al-azar" element={<Personaje/>} />
        </Route>
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);