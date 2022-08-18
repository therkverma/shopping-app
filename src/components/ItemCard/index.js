import './index.scss';

const ItemCard = ({ item, addToCart }) => {
    return (
        <div className="item-container">
            <div className='item-image-holder'>
                <img src={item.image} alt={item.title || ''} />
            </div>
            <div className='item-brand'>{item.brand}</div>
            <div className='item-title'>{item.brand}</div>
            <div className='item-price'>Price ₹{item.price}</div>
            <div className='item-size'>Size - {item.size}</div>
            <div className='add-to-cart-btn' onClick={() => addToCart(item)}>Add to Cart</div>
        </div>
    );
}

export default ItemCard;
