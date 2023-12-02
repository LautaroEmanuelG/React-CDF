import { useContext } from "react";
import { products } from './data/productos'
import Products from './components/Products'
import Header from "./components/Header";
import { FilterContext } from './context/ContextFilter'

function App() {

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0,
  // })
  
  const [filters] = useContext(FilterContext)

  const filtersProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' ||
          product.category === filters.category))
    })
  }

  return (
    <>
      <Header />
      <Products products={filtersProducts(products)} />
    </>
  );
}

export default App;
