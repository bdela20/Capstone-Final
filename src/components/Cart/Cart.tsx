import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useCart } from '../Context/cart';

export default function Cart() {
  //@ts-ignore
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0));
  }, [cartItems]);

  const handleDeleteItem = (id: never) => {
    removeFromCart(id);
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const handleCheckboxChange = (id:any) => {
    //@ts-ignore
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      //@ts-ignore
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteSelectedItems = () => {
    selectedItems.forEach((id) => {
      handleDeleteItem(id);
    });
    setSelectedItems([]);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'initial', padding: 2 }}>
      <Typography variant="h4" color="GrayText" sx={{ marginBottom: 2 }}>
        Cart 🛒
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item:any) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell>
                  <Checkbox
                  //@ts-ignore
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        {selectedItems.length > 0 && (
          <Button variant="outlined" color="secondary" onClick={handleDeleteSelectedItems}>
            Delete Selected
          </Button>
        )}
        {cartItems.length > 0 && (
          <Button component={Link} to="/checkout" variant="contained" color="primary">
            Checkout
          </Button>
        )}
        {cartItems.length > 0 && (
          <Button variant="outlined" color="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
        <Typography variant="h5" color="GrayText">
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}
