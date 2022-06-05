
import './App.css';
import Navbar from './Components/Nabar/Navbar';
import {Route, Routes} from 'react-router-dom'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Screen/Home';
import Project from './Components/Project/Project';
import Projects from './Components/Projects/Projects';
 
  
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/project/:id' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
