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
              <h3 className='p-5 bg-white bg-opacity-25 text-black rounded'> Welcome to the Best Whiskey Collection 🥃</h3>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home