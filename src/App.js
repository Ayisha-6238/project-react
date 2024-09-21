// import React from 'react'
// import { Route, Routes } from 'react-router-dom';
// import BookDetail from './Componets/BookDetail';
// import AllBooks from './Componets/AllBooks';
// import Awards from './Componets/Awards';
// import Hero from './Componets/Hero';
// import About from './Componets/About';

import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import BookDetail from "./Components/BookDetail";
import AllBooks from "./Components/AllBooks";
import Awards from "./Components/Awards";
import Hero from "./Components/Hero";
import About from "./Components/About";


function App() {

  return (
    <div>
     <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/book-detail/:id' element={<BookDetail/>} />
      <Route path='/all-books' element={<AllBooks/>} />
      <Route path='/awards' element={<Awards/>} />
      <Route path='/about' element={<About/>} />
     </Routes>
    </div>
  );
}

export default App;
