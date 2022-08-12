import './App.css';
import DisplayAll from './components/displayAll';
import FavoriteById from './components/FavoriteById';
import CreateFavorite from './components/CreateFavorite';
import EditFavorite from './components/EditFavorite';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="html-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/:id/description" element={<FavoriteById/>}/>
          <Route path="/new/create" element={<CreateFavorite/>}/>
          <Route path="/edit/:id" element={<EditFavorite/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
