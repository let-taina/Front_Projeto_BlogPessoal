/*componente de função chamado App.tsx 
dentro do return um seletor de Home.tsx e import do caminho do Home.tsx para dentro do arquivo*/

import React from 'react';
import Home from './pages/home/Home';
import './App.css';


function App() {
  return (
   <Home />
  );
}

export default App;
