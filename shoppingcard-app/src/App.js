import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* Other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
