//import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
const Nav = loadable(() => import('./components/utils/navigbar'));
//import Nav from './components/utils/Navigbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
