import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zustand from '@container/Zustand';


// import Home from "@container/Home";
// import CheckImageReg from "@container/checkImgReg";
// import Image from "@container/img";
// import IconList from './container/IconList';
import Filter from '@container/Filter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display :"flex",flex : 1}}>
      <Profiler id="Navigation" onRender={()=><div>loading...</div>}>
        <Filter/>
      </Profiler>
    </div>
    
    )
  }
  
  export default App
  
  {/* <Image/>
<IconList/> */}

/*

<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
*/