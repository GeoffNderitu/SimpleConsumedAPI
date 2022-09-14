import logo from './logo.svg';
import "./Main.css"
import Register from './components/Register';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Register/>
    </div>
    </Router>
  );
}

export default App;
