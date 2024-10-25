import './SingleProduct.css'
const SingleProduct = ({product,handleAddProduct}) => {
    const {id,name,image,description,price,category,isFeatured} = product;
    return (
        <div className="card">
                <img className='img' src={image} alt="" />
                {/* //  <h2>{name}</h2> */}
                <p>{description}</p>
                <div className='camera-prize'>
                     <p>${price}</p>
                     <p>{isFeatured?"Feature categroy": "Not Catergory"}</p>
                </div>
                <button onClick={() => handleAddProduct(product)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;