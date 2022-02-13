import React, { useState } from 'react';
import Button from './Button';
import Layout from './Layout';

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
    <Layout>
        <div>값 : {number}</div>
        <Button onClick={onClickInit} text="0" />
        <Button onClick={onClickPlus} text="+1" />
        <Button onClick={onClickMinus} text="-1" />
        <Button onClick={onClickMultiply} text="*2" />
    </Layout>
  );
}

export default App;