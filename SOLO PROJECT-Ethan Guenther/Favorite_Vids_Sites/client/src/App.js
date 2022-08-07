import './App.css';
import DisplayAll from './components/displayAll';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
