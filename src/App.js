import React, { createContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';


export const ColorContext = createContext('dark');

function App() {
  return (
    <ColorContext.Provider value={'light'}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/secondpage" element={<SecondPage />} />
      </Routes>
      </BrowserRouter>
    </ColorContext.Provider>
  );
}

export default App;
