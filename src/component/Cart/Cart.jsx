const Cart = ({selectedProduct,handleDelte}) => {
    return (
        <div>
              {
                 selectedProduct.map((product) =>(
                     <div key={product.id}>
                          <div>
                               <div className=""> 
                                     <img className="w-96" src={product.image} alt={product.name} />
                                     <h3>{product.name}</h3>
                                     <h4>Price: ${product.price}</h4> 
                                     <button onClick={() => handleDelte(product.id)} className=" bg-red-700 rounded-xl px-7 py-3 ">Delete</button>  
                               </div>
                          </div>
                     </div>
                 ))
              }
        </div>
    );
};

export default Cart;