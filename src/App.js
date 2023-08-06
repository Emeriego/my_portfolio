import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import NotFoundLayout from './pages/notFound/NotFoundLayout';
import NotFound from './pages/notFound/NotFound';

import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>

    <div className='app'>
      <Routes>
        <Route to='/' element = {<PageLayout />} >
          <Route index element = {<Home />} />
          </Route>

          <Route to='/' element = {<NotFoundLayout />} >
          <Route index element = {<NotFound />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
