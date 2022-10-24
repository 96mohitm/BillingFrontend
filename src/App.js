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

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default connect()(App);
