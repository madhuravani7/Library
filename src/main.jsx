import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context';
import './index.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './Components/BookList/BookList';
import BookDetails from './Components/BookDetails/BookDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='about' element={<About />} />
            <Route path='book' element={<BookList />} />
            <Route path='book/:id' element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
