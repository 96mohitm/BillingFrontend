import './App.css';
import CreateProductForm from './components/product/CreateProductForm';
import ProductList from './components/product/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateProductForm/>
        <ProductList />
      </header>
    </div>
  );
}

export default App;
