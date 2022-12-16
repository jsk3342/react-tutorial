import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NewsPage from './pages/NewsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<NewsPage />} />
        <Route path='/:category' element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
