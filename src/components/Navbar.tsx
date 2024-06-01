import { Link } from 'react-router-dom';
import Button from './Button';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //@ts-expect-error
        setUser(user); 
      } else {
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-900 p-6 sticky top-0 left-0 w-full'>
      <div className='flex items-center flex-shrink-0 text-black mr-6 hover:text-white'>
        <Link to='/whiskeys' className='font-semibold text-xl tracking-tight'>Best Whiskeys in the World </Link>
      </div>
      <div className='w-full block flex-grow items-center'>
        <div className="text-sm lg:flex-grow">
          <Button className='p-3 m-5 bg-red-900 justify-center'>
            <div>
              <Link to='/' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4'>
                Home 
              </Link>
            </div>
          </Button>
          <Button className="p-3 m-5 bg-red-900 justify-center">
            <div>
              <Link to='/whiskeys' className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4'>
                List of Whiskeys 
              </Link>
            </div>
          </Button>
          <Button className='p-3 m-5 bg-red-900 justify-center'>
            <div>
              <Link to='/Cart' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4'>
                Cart 
              </Link>
            </div>
          </Button>
          <Button className='p-3 m-5 bg-red-900 justify-center'>
            <div>
              <Link to='/about' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white mr-4'>
                About 
              </Link>
            </div>
          </Button>
          {!user ? (
            <Button className='p-3 m-5 bg-red-900 justify-center'>
              <div>
                <Link to="/" onClick={handleLogin} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white'>
                  Login 
                </Link>
              </div>
            </Button>
          ) : (
            <Button className='p-3 m-5 bg-red-900 justify-center'>
              <div>
                <Link to="/" onClick={handleLogout} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white'>
                  Log Out 
                </Link>
              </div>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
