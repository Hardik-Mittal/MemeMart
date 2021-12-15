//import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Nav = loadable(() => import('./components/utils/navigbar'));
const Login = loadable(() => import('./components/pages/login'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login></Login>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
