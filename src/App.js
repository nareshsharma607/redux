import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
      </BrowserRouter>
      </Provider>
          </div>
  );
}

export default App;
