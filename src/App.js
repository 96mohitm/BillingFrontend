import './App.css';
import AddInventoryForm from './components/inventory/AddInventoryForm';
import InventoryList from './components/inventory/InventoryList';
import CreateProductForm from './components/product/CreateProductForm';
import ProductList from './components/product/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateProductForm/>
        <ProductList />
        <AddInventoryForm />
        <InventoryList />
      </header>
    </div>
  );
}

export default App;
