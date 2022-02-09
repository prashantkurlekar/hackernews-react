import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './pages/Top/Top';

const light = 'light';
const dark = 'dark';

const App = () => {
  const [theme, setTheme] = useState(light);

  const switchTheme = (theme: string) => document.documentElement.setAttribute('data-theme', theme);

  const toggleTheme = () => (theme === light ? setTheme(dark) : setTheme(light));

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

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
        <button onClick={toggleTheme}>Toggle Theme</button>
      </footer>
    </div>
  );
};

export default App;
