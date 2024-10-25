import About from '../about/About';
import Cart from '../Cart/Cart';
import './CardContainer.css'
const CardContainer = ({handlelsActiveState,isActive,selectedProduct,handleDelte}) => {
    return (
        <div>
              <h1 className='text-2xl font-bold'>CardContainer</h1>
              <div className="toggle">
                    <button onClick={() => handlelsActiveState("cart")} className={`${isActive.cart? "btn active": "btn"}`}>Cart</button>
                    <button onClick={() => handlelsActiveState("about")} className={`${isActive.cart? "btn": "btn active"}`}>About</button>
              </div>
              {
                  isActive?.cart? <Cart handleDelte={handleDelte} selectedProduct={selectedProduct}></Cart>:<About></About>
              }
        </div>
    );
};

export default CardContainer;