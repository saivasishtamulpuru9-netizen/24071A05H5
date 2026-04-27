import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment({ cart, clearCart }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.08;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      
      setTimeout(() => {
        navigate('/menu');
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div>
        <h2>Payment Successful!</h2>
        <p>Redirecting to menu...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Complete your payment of <strong>${total.toFixed(2)}</strong></p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <div>
          <label>Name on Card: </label>
          <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
        </div>

        <div>
          <label>Card Number: </label>
          <input type="text" name="cardNumber" required maxLength="16" value={formData.cardNumber} onChange={handleInputChange} />
        </div>

        <div>
          <label>Expiry Date: </label>
          <input type="text" name="expiry" required placeholder="MM/YY" maxLength="5" value={formData.expiry} onChange={handleInputChange} />
        </div>

        <div>
          <label>CVV: </label>
          <input type="text" name="cvv" required maxLength="4" value={formData.cvv} onChange={handleInputChange} />
        </div>

        <button type="submit" disabled={isProcessing || cart.length === 0}>
          {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
}

export default Payment;
