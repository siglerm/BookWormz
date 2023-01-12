import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Grow from './components/Grow';
import AddThought from './components/AddThought';
import Shelf from './components/Shelf';
import BookInfo from './components/BookInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/shelf" element={<Shelf />} />
      <Route path="/grow" element={<Grow />} />
      <Route path="/addThought" element={<AddThought />} />
      <Route path="/bookInfo" element={<BookInfo />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
