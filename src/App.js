import Header from './components/Header/Header';
import "./App.css";
import SimpleBottomNavigation from './components/MainNav.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Container} from '@mui/material';
import Trending from './components/Pages/Trending/Trending';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
import Movies from './components/Pages/Movies/Movies';

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <div className='app'>
      <Container>
        <Routes>
          <Route path="" element={<Trending/>} exact/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/search' element={<Search/>} />

        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
