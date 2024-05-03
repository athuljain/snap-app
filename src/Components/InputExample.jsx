import { useState } from "react";

export function InputExample(){
  
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
      }
    };
  
    const handleKeyUp = (event) => {
      console.log('Key released:', event.key);
    };
  
    const handleFocus = () => {
      console.log('Input field focused');
    };
  
    const handleBlur = () => {
      console.log('Input field blurred');
    };
  
    return(
        <div>

<div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type here..."
      />
      <p>Current value: {inputValue}</p>
    </div>


        </div>
    )
}


