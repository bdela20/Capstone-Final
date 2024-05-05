import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handlePayment = () => {
    // Simulate payment processing
    console.log('Payment successful!');
    sendConfirmationEmail(shippingInfo);
  };

  const sendConfirmationEmail = (shippingInfo: { name: string; email: string; address: string; }) => {
    // Send email using nodemailer
    console.log('Email sent!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <TextField
          label="Name"
          value={shippingInfo.name}
          onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value })}
        />
        <TextField
          label="Email"
          value={shippingInfo.email}
          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value })}
        />
        <TextField
          label="Address"
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value })}
        />
      </form>
      <Button onClick={handlePayment}>Pay Now</Button>
    </div>
  );
}

export default Checkout;