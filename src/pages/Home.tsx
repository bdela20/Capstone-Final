import { Link } from 'react-router-dom';
import Background from '../assets/images/RamSC.jpeg';

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <div>
            <Link to="/Dashboard">
              <h3 className='p-5 bg-white bg-opacity-25 text-black rounded'> Welcome to the Car Collection</h3>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home