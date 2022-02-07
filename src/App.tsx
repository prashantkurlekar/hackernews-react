import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Top from './pages/Top/Top';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
