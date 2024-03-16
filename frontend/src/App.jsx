import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';

import './App.css';

import ShopsPage from './pages/ShopsPage/ShopsPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
