import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './compoments/Navbar';
import Error from './pages/ErrorCode';
import Home from './pages/Home';
import Footer from './compoments/Footer'
import Article from './pages/Article';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <div className="Body">
      <Router>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <Footer />  
    </div>
  );
}

export default App;
