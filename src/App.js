import './App.css';
import Navbar from './Components/Navbar.js'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home';
import Contactus from './Components/Contactus';
import About from './Components/About';
import Events from './Components/Events';
import Teams from './Components/Teams';


function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='contact' element={<Contactus/>} />
  <Route path='about' element={<About/>} />
  <Route path='event' element={<Events/>} />
  <Route path='teams' element={<Teams/>} />
  
</Routes>
  </BrowserRouter>   

     
    </div>
  );
}

export default App;
