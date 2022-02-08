import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './pages/Top/Top';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h2>Hacker News - React</h2>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <a
          href="https://github.com/prashantkurlekar/hackernews-react"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  );
};

export default App;
