import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './pages/Top/Top';

const App = () => {
  return (
    <div className="app">
      <h2>Hacker News - React</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
      <footer>Github - URL</footer>
    </div>
  );
};

export default App;
