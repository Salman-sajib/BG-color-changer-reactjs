import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className='bg-gray-800 w-full min-h-dvh'
      style={{ backgroundColor: color }}
    >
      <h1 className='max-w-[30ch] text-gray-100 text-3xl text-center mx-auto pt-10'>
        Click on any of the buttons to change the background color
      </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='bg-red-700 outline-none px-4 py-1 rounded-full shadow-lg text-white'
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className='bg-green-700 outline-none px-4 py-1 rounded-full shadow-lg text-white'
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='bg-blue-700 outline-none px-4 py-1 rounded-full shadow-lg text-white'
          >
            Blue
          </button>
          <button
            onClick={() => setColor('olive')}
            className='bg-blue-700 outline-none px-4 py-1 rounded-full shadow-lg text-white'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
