//import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const Nav = loadable(() => import('./components/utils/Navigbar'));
//import Nav from './components/utils/Navigbar';

function App() {
  return (
    <div className="App" id="nav">
      <Nav></Nav>
    </div>
  );
}

export default App;
