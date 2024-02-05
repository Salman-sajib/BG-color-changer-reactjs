import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className='bg-gray-800 w-full min-h-dvh'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => changeColor('red')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >
            Red
          </button>
          <button
            onClick={() => changeColor('green')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >
            Green
          </button>
          <button
            onClick={() => changeColor('blue')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
