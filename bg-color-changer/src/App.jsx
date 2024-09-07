import { useState } from 'react'
import './App.css'
import {SolidButtons} from "./components/solidButtons.jsx"

function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#242424');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
    document.documentElement.style.setProperty('--background-color', color);
  }; 

  return (
    <>
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2"
        style={{ backgroundColor }}
      >
        <SolidButtons
          onButtonClick={handleButtonClick}
        />
      </div>
    </>
  );
}

export default App
