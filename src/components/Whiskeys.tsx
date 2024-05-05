import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
//@ts-ignore
import Background from '../assets/images/Gran_Bar.jpeg';
import ImageList from '@mui/material/ImageList/ImageList';
import ImageListItem from '@mui/material/ImageListItem/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar/ImageListItemBar';
import { CartContext } from '../components/Context/cart'
import { useContext, useEffect, } from 'react'
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';

export default function Whiskey() {
  const [cart, setCart] = useState<{ img: string; title: string; author: string; price: number; quantity: number; }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function onAddToCart(item: typeof itemData[0]) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.img === item.img);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.img === item.img
         ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, {...item, quantity: 1 }];
    });

    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  }

  function handleDeleteFromCart(item: typeof cart[0]): void {
    const existingItem = cart.find((cartItem) => cartItem.img === item.img);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart((prevCart) =>
          prevCart.map((cartItem) =>
            cartItem.img === item.img
           ? {...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      } else {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.img!== item.img));
      }

      setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
    }
  }

  return (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'initial', backgroundImage: `url(${Background})`, paddingTop: 10, paddingBottom: 7, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" color="white" sx={{ textAlign: 'center', mb: 4 }}>
        Pick your poison 🥃
      </Typography>
      <ImageList variant="standard" cols={4} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="eager"
            />
            <Typography variant="subtitle1" color="red" sx={{ position: 'absolute', bottom: 200, left: 0, px: 2, py: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              ${item.price}
            </Typography>
            <ImageListItemBar
              title={item.title}
              subtitle={<Typography variant="overline" color="white">{item.author}</Typography>}
              actionIcon={
                <>
                  <Button color="success" onClick={() => onAddToCart(item)}>
                    Add to Cart
                  </Button>
                  {cart.find((cartItem) => cartItem.img === item.img) && (
                    <>
                      <Typography variant="body2" color="yellow">
                        Quantity: {cart.find((cartItem) => cartItem.img === item.img)?.quantity || 0}
                      </Typography>
                      <Button color="error" onClick={() => handleDeleteFromCart(item)}>
                        Delete
                      </Button>
                    </>
                  )}
                </>
              }
              actionPosition="right"
            >
              <Typography variant="inherit" color="HighlightText">
                ${item.price}
              </Typography>
            </ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'darkred', padding: 0, zIndex: 1, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" color="black">
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
        {(cart.length > 0) && (
          <Link to="/cart">
          <img src="src/assets/images/cart.png" alt="Cart" width="50" height="24" />
          <Typography variant="h5" color="white" marginRight={3} sx={{ ml: 0, fontSize: 25 }}>
            Checkout
          </Typography>
        </Link>
        )}
      </Box>
    </Box>
  );
}

const itemData = [
  {
    id: 1,
    img: 'src/assets/images/Canadian whiskey.jpeg',
    title: 'Canadian',
    author: 'Canadian Club Whisky',
    price: 22.99
  },
  {
    id: 2,
    img: 'src/assets/images/Buchanan’s Scotch Whisky.jpeg',
    title: 'Scotch',
    author: 'Buchanan’s Scotch Whisky',
    price: 32.99
  },
  {
    id: 3,
    img: 'src/assets/images/Knob Creek Bourbon Whiskey.jpeg',
    title: 'Bourbon',
    author: 'Knob Creek Bourbon Whiskey',
    price: 25.99
  },
  {
    id: 4,
    img: 'src/assets/images/The Glenlivet Scotch Whisky.jpeg',
    title: 'Scotch',
    author: 'The Glenlivet Scotch Whisky',
    price: 21.99
  },
  { 
    id: 5,
    img: 'src/assets/images/Southern Comfort American Whisky.jpeg',
    title: 'Bourbon',
    author: 'Southern Comfort American Whisky',
    price: 34.99
  },
  { 
    id: 6,
    img: 'src/assets/images/Skrewball Peanut Butter Whiskey .jpeg',
    title: 'Flavor Whiskey',
    author: 'Skrewball Peanut Butter Whiskey',
    price: 27.99
  },
  {
    id: 7,
    img: 'src/assets/images/Black Velvet Canadian Whisky.jpeg',
    title: 'Canadian',
    author: 'Black Velvet Canadian Whisky',
    price: 29.99
  },
  { 
    id: 8,
    img: 'src/assets/images/Seagram’s 7 Crown American Whiskey .jpeg',
    title: 'Bourbon',
    author: 'Seagram’s 7 Crown American Whiskey',
    price: 42.99
  },
  { 
    id: 9,
    img: 'src/assets/images/Woodford Reserve Bourbon Whiskey.jpeg',
    title: 'Bourbon',
    author: 'Woodford Reserve Bourbon Whiskey',
    price: 25.99
  },
  { 
    id: 10,
    img: 'src/assets/images/Johnnie Walker Scotch Whisky.jpeg',
    title: 'Scotch',
    author: 'Johnnie Walker Scotch Whisky',
    price: 24.99
  },
  { 
    id: 11,
    img: 'src/assets/images/Evan Williams Bourbon Whiskey.jpeg',
    title: 'Bourbon',
    author: 'Evan Williams Bourbon Whiskey',
    price: 24.99
  },
  { 
    id: 12,
    img:'src/assets/images/Bulleit Bourbon Whiskey.jpeg',
    title: 'Bourbon',
    author: 'Bulleit Bourbon Whiskey',
    price: 27.99
  },
  { 
    id: 13,
    img: 'src/assets/images/Wild Turkey Bourbon Whiskey.jpeg',
    title: 'Bourbon',
    author: 'Wild Turkey Bourbon Whiskey',
    price: 25.99
  },
  { 
    id: 14,
    img: 'src/assets/images/Maker’s Mark Bourbon Whisky.jpeg',
    title: 'Scotch',
    author: 'Markers Mark',
    price: 24.99
  },
  { 
    id: 15,
    img: 'src/assets/images/Jack Daniel’s Tennessee Whiskey.jpeg',
    title: 'Tennessee',
    author: 'Jack Daniel’s Tennessee Whiskey',
    price: 18.99
  },
  {
    img: 'src/assets/images/Jameson Irish Whiskey.jpeg',
    title: 'Irish',
    author: 'Jameson Irish Whiskey',
    price: 27.99
  },

];