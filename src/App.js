import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Write from './pages/Write';
import InnerDiary from './pages/InnerDiary';
import Main from './pages/Main';
import Diaries from './pages/Diaries';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/innerDiary' element={<InnerDiary />}></Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='diaries' element={<Diaries />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
