import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseItem, increaseItem, removeCartItem } from '../../actions/cart';
import CartItemCard from '../CartItemCard';
import './index.scss';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [extraDiscount, setExtraDiscount] = useState(false)


    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        let count = 0
        let totalPrice = 0
        let totalDiscount = 0
        cartItems.map(c => {
            count = count + c.count
            totalPrice = totalPrice + (c.price * c.count)
            totalDiscount = totalDiscount + ((c.price * (c.discount / 100)) * c.count)
            return c
        })

        // if we add Belt(s) with Jeans then apply 10% additional discount
        const checkIfBeltFound = cartItems.find(c => ((c.id === 12) || (c.id === 13))) // HINT: We do not have any identifier in JSON that's why using directly id
        const checkIfJeansFound = cartItems.find(c => (c.id === 11)) // HINT: We do not have any identifier in JSON that's why using directly id - According to title jeans id is 11

        if(!!checkIfBeltFound && !!checkIfJeansFound) {
            setExtraDiscount(true)
        } else {
            setExtraDiscount(false)
        }
        setCartCount(count)
        setTotalPrice(totalPrice)
        setTotalDiscount(totalDiscount)
    }, [cartItems])

    return (
        <div className="home-page-container">
            <div className='heading-holder center-flex'>
                Cart ({cartItems.length})

                <div className='cart-icon' onClick={() => navigate('/home')}>Go to Home</div>
            </div>
            <div className="cart-item-container">
                <div className='left-bar'>
                    {
                        !!cartItems && !!cartItems.length ? cartItems.map((c, i) =>
                            <CartItemCard key={i} item={c}
                                decreaseItem={id => dispatch(decreaseItem(id))}
                                increaseItem={id => dispatch(increaseItem(id))}
                                removeItem={id => dispatch(removeCartItem(id))}
                            />) :
                            <div className='center-flex'>No items</div>
                    }
                </div>
                <div className='right-bar'>
                    <h2>Cart ({cartItems.length})</h2>
                    <div>Total Items: {cartCount}</div>
                    <div>Total Price - Rs. {totalPrice}</div>
                    <div>Total Discount - Rs. {totalDiscount}</div>
                    {!!extraDiscount && <div>Extra 10% Discount (if we add Belt(s) with Jeans) - Rs. {((totalPrice - totalDiscount) * 10/100)}</div>}
                    <div>Final Price - Rs. {totalPrice - totalDiscount - (!!extraDiscount ? ((totalPrice - totalDiscount) * 10/100) : 0)}</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
