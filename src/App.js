import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProjectDisplay from './pages/ProjectDisplay';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
