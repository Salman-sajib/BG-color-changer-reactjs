import { useState } from 'react';
import ColorButton from './components/ColorButton';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className='bg-gray-800 w-full min-h-dvh'
      style={{ backgroundColor: color }}
    >
      <h1 className='max-w-[30ch] text-gray-100 text-3xl text-center mx-auto pt-10'>
        Click on any of the buttons to change the background color, (spoiler
        alert) It can heart your eyes.
      </h1>
      <div className='fixed flex flex-col gap-4 flex-wrap items-center justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-3xl'>
          <ColorButton setColor={setColor} buttonColor='red' label='Red' />
          <ColorButton
            setColor={setColor}
            buttonColor='orange'
            label='Orange'
          />
          <ColorButton
            setColor={setColor}
            buttonColor='yellow'
            label='Yellow'
          />
          <ColorButton setColor={setColor} buttonColor='green' label='Green' />
          <ColorButton setColor={setColor} buttonColor='blue' label='Blue' />
          <ColorButton
            setColor={setColor}
            buttonColor='indigo'
            label='Indigo'
          />
          <ColorButton
            setColor={setColor}
            buttonColor='violet'
            label='Violet'
          />
        </div>
        <ColorButton
          setColor={setColor}
          buttonColor='olive'
          label='Reset to default'
        />
      </div>
    </div>
  );
}

export default App;
