import './App.css';
import ProductContainer from './Product/ProductContainer';
import CartContainer from './Cart/CartContainer';

const products = [
  {
    imageUrl: 'https://food.com.vn/public/template/assets/img/banner_01.jpeg',
    description: 'Food',
    title: 'ahihi',
    price: '20',
  },
  {
    imageUrl: 'https://food.com.vn/public/template/assets/img/banner_01.jpeg',
    description: 'Food',
    title: 'ahihi',
    price: '20',
  },
  {
    imageUrl: 'https://food.com.vn/public/template/assets/img/banner_01.jpeg',
    description: 'Food',
    title: 'ahihi',
    price: '20',
  },
  {
    imageUrl: 'https://food.com.vn/public/template/assets/img/banner_01.jpeg',
    description: 'Food',
    title: 'ahihi',
    price: '20',
  },
  {
    imageUrl: 'https://food.com.vn/public/template/assets/img/banner_01.jpeg',
    description: 'Food',
    title: 'ahihi',
    price: '20',
  },
];

const personsWithProducts = [
  {
    name: 'Tree B',
    products: [products[0], products[1]]
  },
  {
    name: 'Alan',
    products: [products[3], products[4]]
  },
];

function App() {
  return (
    <div className='flex flex-row-reverse'>
      <div> 
        <CartContainer personsWithProducts={personsWithProducts} />
      </div>
      <div>
        <ProductContainer products={products} />
      </div>
    </div>
  );
}

export default App;
