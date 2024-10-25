import './index.css' 
import './App.css'
import Header from './component/Header/Header'
import AllProducts from './component/AllProducts/AllProducts';
import CardContainer from './component/CardContainer/CardContainer';
import { useState } from 'react';

function App() {
  const [isActive,setLsActive] = useState({cart:true,status: "cart"})
  const [selectedProduct,setSelectedProduct] = useState([])
  const [price,setPrice] = useState(500)

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr);
  }

  const handleDeletePrice = (id) => {
      const product = selectedProduct.find((p) => p.id === id)
      setPrice(price-product.price)
  }
  
  const handleDelte = (id) => {
     handleDeletePrice(id);
     const newProduct = selectedProduct.filter((p) => p.id!== id);
     setSelectedProduct(newProduct);
  }

  const handleAddProduct = (product) => {
    const isExists = selectedProduct.find((p) => p.id === product.id);
    if(isExists) {
      alert("ar add kra jabe na");
    }
    else{
     handleIncreasePrice(product.price)
     const newProduct = [...selectedProduct,product];
     setSelectedProduct(newProduct);
    }
  }
  
  const handlelsActiveState = (status) => {
     if (status == "cart"){
       setLsActive({cart:true,status: "cart"})
     }
     else{
        setLsActive({cart:false,status: "about"})
     }
  
  }
  return (
    <>
      <Header price={price} selectedProduct={selectedProduct}></Header>
      <div className='flex'>
            <AllProducts handleAddProduct={handleAddProduct}></AllProducts>
            <CardContainer handleDelte={handleDelte} selectedProduct={selectedProduct} isActive={isActive} handlelsActiveState={handlelsActiveState}></CardContainer>
      </div>
    </>
  )
}
export default App
