//import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.css';
const Nav = loadable(() => import('./components/utils/navigbar'));
const Login = loadable(() => import('./components/pages/login'));
const Register = loadable(() => import('./components/pages/register'));
const Home = loadable(() => import('./components/pages/homepage'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}>
          </Route>
          <Route path="/signup" element={<Register></Register>}>
          </Route>
          <Route exact path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
