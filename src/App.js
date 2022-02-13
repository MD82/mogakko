import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  function onClickPlus() {
    setNumber(number + 1);
  }

  function onClickMinus() {
    setNumber(number - 1);
  }

  function onClickMultiply() {
    setNumber(number * 2);
  }

  function onClickInit() {
    setNumber(0);
  }


    return (
        <div>
            <div>값 : {number}</div>
            <button onClick={onClickInit}>0</button>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
            <button onClick={onClickMultiply}>*2</button>
        </div>
    );
}

export default App;