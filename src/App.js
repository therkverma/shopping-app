import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;