import React, { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [chkVal, setChk] = useState(true);

  function onTrueClick() {
    console.log("true")
    setChk(true);
  }
  
  function onFalseClick() {
    console.log("false")
    setChk(false);
  }

  return (
    <Layout>
      <div>
        {true === chkVal && <div>True일 때 출력되는 메세지</div>}
        {false === chkVal && <div>False일 때 출력되는 메세지</div>}
        <button onClick={onTrueClick}>True</button><button onClick={onFalseClick}>False</button>
      </div>
    </Layout>
  );
}

export default App;