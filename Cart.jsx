import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Link to="/menu">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      
      <div>
        <div>
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={removeFromCart} 
              onUpdateQuantity={updateQuantity}
            />
          ))}
        </div>

        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc' }}>
          <h3>Order Summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (8%): ${tax.toFixed(2)}</p>
          <h4>Total: ${total.toFixed(2)}</h4>
          <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
