import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemInCart } from '../../actions/cart';
import { fetchAllProducts } from '../../actions/product';
import ItemCard from '../ItemCard';
import './index.scss';

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchAllProducts())
        // eslint-disable-next-line
    }, [])

    const { isProcessing, products } = useSelector(state => state.product)
    const { cartItems } = useSelector(state => state.cart)

    return (
        <div className="home-page-container">
            <div className='heading-holder center-flex'>
                HOME

                <div className='cart-icon' onClick={() => navigate('/cart')}>Cart ({cartItems.length})</div>
            </div>
            <div className='category-title'>Clothing & Accessories:-</div>
            <div className='product-list-holder'>
                <div className='center-flex process-title'>{!!isProcessing ? 'Fetching...' : !!products.length ? '' : 'No Products'}</div>
                <div className='items-card-holder'>
                    {
                        !!products.length && products.map((p, i) => <ItemCard key={i} item={p} addToCart={(item) => dispatch(addItemInCart(item))} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;