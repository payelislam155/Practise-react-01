import './Header.css'
const Header = ({selectedProduct,price}) => {
    return (
        <div className='bg-green-500'>
              <div className='w-[1100px] mx-auto flex justify-between py-6'>
                    <div className='text-white text-2xl font-bold'>
                          <h2>Logo</h2>
                    </div>
                    <div className='list-navbar'>
                          <ul className='flex gap-8 font-bold text-white'>
                               <li><a href="#">Home</a></li>
                               <li><a href="#">Product</a></li>
                               <li><a href="#">Card {selectedProduct.length}</a></li>
                          </ul>
                    </div>
                    <div className='text-white font-bold text-2xl'>
                          <h3>${price}</h3>
                    </div>
              </div>
        </div>
    );
};

export default Header;