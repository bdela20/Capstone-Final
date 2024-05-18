import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/cart';

export default function Checkout() {
  //@ts-ignore
  const { cartItems, clearCart } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    setPaymentStatus('Processing Payment...');
    setTimeout(() => {
      setPaymentStatus('Payment Successful!');
      clearCart();
      setShippingInfo({ name: '', email: '', address: '' });
    }, 3000);
    sendConfirmationEmail(shippingInfo);
  };

  const sendConfirmationEmail = (shippingInfo: { name: string; email: string; address: string; }) => {
    console.log('Email sent!');
  };

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <Typography variant="h4" color="primary" sx={{ marginBottom: '20px' }}>
        Checkout Page
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5">Order Summary:</Typography>
        {cartItems.map((item:any) => (
          <Typography key={item.id} variant="body1">{`${item.author} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`}</Typography>
        ))}
        <Typography variant="h6" sx={{ marginTop: '10px' }}>Total: ${cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0).toFixed(2)}</Typography>
      </Box>
      <form>
        <TextField
          label="Name"
          value={shippingInfo.name}
          onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          label="Email"
          value={shippingInfo.email}
          onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <TextField
          label="Address"
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
          sx={{ display: 'block', marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayment}
          sx={{
            marginRight: '10px',
            transition: 'background-color 0.5s ease',
            backgroundColor: paymentStatus === 'Payment Successful!' ? 'green' : undefined,
          }}
        >
          {paymentStatus || 'Proceed to Payment'}
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/cart">
          Back to Cart
        </Button>
      </form>
    </Box>
  );
}
