import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageMain } from './Page/PageMain';


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<PageMain/>}/>
        </Routes>
      </BrowserRouter>
    )
  };
  export default App;
