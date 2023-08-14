import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <div className='w-screen h-screen bg-gray-100'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
          <div className="flex flex-col items-center md:justify-center">
            <div className='md:text-left text-center'>
              <h1 className='text-blue-500 text-6xl font-bold'>facebook</h1>
              <div className='text-3xl'>facebook helps you connect and <br /> share with people in your life</div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full md:justify-center'>
            <div className='bg-white p-4 flex flex-col w-[400px]' >
              <input type="text" placeholder='Email address or phone number' className='bg-transparent  outline-blue-500' />
              <input type="text" placeholder='Password' className='bg-transparent outline-blue-700' />
              <button className='bg-blue-600 p-2 text-white rounded-lg'>Login Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
