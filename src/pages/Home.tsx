import { Link } from 'react-router-dom';

function Home() {
  return (
    <div 
      style={{ backgroundImage:'/images/Gran_Bar.jpeg'}} 
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