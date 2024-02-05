/* eslint-disable react/prop-types */
function ColorButton({ setColor, buttonColor, label }) {
  return (
    <button
      onClick={() => setColor(buttonColor)}
      className='outline-none px-4 py-1 rounded-full shadow-lg text-gray-300'
      style={{
        backgroundColor: buttonColor,
      }}
    >
      {label}
    </button>
  );
}

export default ColorButton;
