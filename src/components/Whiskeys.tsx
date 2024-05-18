import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
//@ts-expect-error
import Background from '../assets/images/Gran_Bar.jpeg';
import ImageList from '@mui/material/ImageList/ImageList';
import ImageListItem from '@mui/material/ImageListItem/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar/ImageListItemBar';
import { CartContext } from '../components/Context/cart';
import { Link } from 'react-router-dom';

export default function Whiskey() {
  //@ts-expect-error
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedType, setSelectedType] = useState('All'); // Default to show all items

  const handleAddToCart = (item: { id?: number; img?: string; title?: string; author?: string; price: any; }) => {
    addToCart(item);
    setTotalPrice(prevPrice => prevPrice + item.price);
  };

  const getItemQuantity = (id: number) => {
    const cartItem = cartItems.find((item: { id: any; }) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleDeleteFromCart = (item: { id: any; img?: string; title?: string; author?: string; price: any; }) => {
    removeFromCart(item.id);
    setTotalPrice(prevPrice => prevPrice - item.price * getItemQuantity(item.id));
  };

  
  const filteredItems = selectedType === 'All' ? itemData : itemData.filter(item => item.title === selectedType);
  
  return (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'initial', backgroundImage: `url(${Background})`, paddingTop: 10, paddingBottom: 7, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <Typography variant="h4" color="white" sx={{ marginRight: 2 }}>
          Filter by Type:
        </Typography>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} style={{ padding: '5px', borderRadius: '5px' }}>
          <option value="All">All</option>
          {Object.keys(groupItemsByType(itemData)).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </Box>
      <ImageList variant="standard" cols={4} gap={20}>
        {filteredItems.map((item) => (
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
                  <Button color="success" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                  <Typography variant="body2" color="yellow">
                    Quantity: {getItemQuantity(item.id)}
                  </Typography>
                  <Button color="error" onClick={() => handleDeleteFromCart(item)}>Delete</Button>
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
        <Link to="/Cart">
          <img src="src/assets/images/cart.png" alt="Cart" width="50" height="24" />
          <Typography variant="h5" color="white" marginRight={3} sx={{ ml: 0, fontSize: 25 }}>
            <header>Cart</header>
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

// Group items by type
const groupItemsByType = (items: any[]) => {
  return items.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {});
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
    img: 'src/assets/images/Bubbas 2.jpeg',
    title: 'Flavor Whiskey',
    author: 'Bubbas Secret Stills Burnt Sugar Whiskey',
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
    title: 'Bourbon',
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
    id: 16,
    img: 'src/assets/images/Jameson Irish Whiskey.jpeg',
    title: 'Irish',
    author: 'Jameson Irish Whiskey',
    price: 27.99
  },

  {
    id: 16,
    img: 'src/assets/images/Hibiki.jpeg',
    title: 'Japanese',
    author: 'Hibiki Japanese Harmony Whisky',
    price: 99.99
  },

];