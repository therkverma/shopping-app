import './index.scss';

const CartItemCard = ({ item, removeItem, decreaseItem, increaseItem }) => {
    return (
        <div className="item-container">
            <div className='cart-item-card-holder'>
                <div className='item-image-holder'>
                    <img src={item.image} alt={item.title || ''} />
                </div>
                <div>
                    <div className='item-brand'>{item.brand}</div>
                    <div className='item-title'>{item.brand}</div>
                    <div className='item-price'>Price ₹{item.price}</div>
                    <div className='item-size'>Size - {item.size}</div>
                    <div className='item-btn-holder'>
                        <button onClick={() => decreaseItem(item.id)}>-</button>
                        {item.count}
                        <button onClick={() => increaseItem(item.id)}>+</button>
                    </div>
                    <div className='item-btn-holder'>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartItemCard;
