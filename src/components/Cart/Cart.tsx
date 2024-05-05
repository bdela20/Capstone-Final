import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useState } from 'react';


export default function Cart({ onDeleteFromCart, cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  React.useEffect(() => {
    setTotalPrice(cart.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0));
  }, [cart]);

  return (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'initial', padding: 2 }}>
      <Typography variant="h4" color="GrayText" sx={{ marginBottom: 2 }}>
        Cart
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Whiskey</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item: { img: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
              <TableRow key={item.img}>
                <TableCell>
                  <img src={item.img} alt={item.title} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <Button color="inherit" onClick={() => onDeleteFromCart(item)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Typography variant="h5" color="GrayText">
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}
