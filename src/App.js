import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";
import MainLayout from './components/layout/MainLayout';
import InventoryPage from './pages/InventoryPage';
import BillingPage from './pages/BillingPage';
import PurchasePage from './pages/PurchasePage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default connect()(App);
