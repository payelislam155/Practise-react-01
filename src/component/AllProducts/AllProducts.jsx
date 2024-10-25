import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({ handleAddProduct }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./fakedata.Json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="text-2xl font-bold">
            <h1>Arman Islam</h1>
            {
                products.map(product => 
                    <SingleProduct 
                        key={product.id}
                        handleAddProduct={handleAddProduct} 
                        product={product} 
                    />
                )
            }
        </div>
    );
};

export default AllProducts;