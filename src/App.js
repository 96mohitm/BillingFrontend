import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";
import MainLayout from './components/layout/MainLayout';
import InventoryPage from './pages/InventoryPage';
import ProductList from './components/product/ProductList';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/billing" element={<BillingPage />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default connect()(App);
