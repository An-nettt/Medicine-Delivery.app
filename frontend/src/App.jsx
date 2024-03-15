import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import ShopsPage from './pages/ShopsPage/ShopsPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import NotFound from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>
          Shops
        </Link>
        <Link to="/cart">Shopping Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
