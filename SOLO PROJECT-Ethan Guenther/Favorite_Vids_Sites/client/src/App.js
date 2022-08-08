import './App.css';
import DisplayAll from './components/displayAll';
import FavoriteById from './components/FavoriteById';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/:id/description" element={<FavoriteById/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
