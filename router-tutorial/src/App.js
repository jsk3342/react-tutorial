import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Longin from './pages/Longin';
import Mypage from './pages/Mypage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:username' element={<Profile/>} />
      </Route>
      <Route path='/articles' element={<Articles />} >
        <Route path=':id' element={<Article/>} />
      </Route>
      <Route path='/login' element={<Longin/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    );
}

export default App;
