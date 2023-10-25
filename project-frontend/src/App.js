import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import ProductDetails from './components/Products/ProductDetails';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <ChakraProvider>
      <Header />
      <ProductDetails />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
