import { Link } from 'react-router-dom';
//@ts-ignore
import Background from '../assets/images/Gran_Bar.jpeg'; 

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <div>
            <Link to="/whiskeys">
              <h1 className='p-10 bg-white bg-opacity-45 text-black rounded'> Welcome to our Handpicked Whiskey Collection 🥃</h1>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home