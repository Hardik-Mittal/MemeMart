//import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Nav = loadable(() => import('./components/utils/navigbar'));
const Login = loadable(() => import('./components/pages/login'));
const Register = loadable(() => import('./components/pages/register'));

function App() {
  return (
    <div className="App">
      
        <Nav />
        <Routes>
          <Route path="/login" element={<Login></Login>}>
          </Route>
          <Route path="/signup" element={<Register></Register>}>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
