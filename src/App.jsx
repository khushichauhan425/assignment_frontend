import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      
      <Switch>  
          <Route exact path="/"><Main /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contact /></Route>
      </Switch>
      <div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
