import { Profiler, useState } from 'react'
import { Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LayOut from './component/Layout';
import Home from "@container/Home";
// import CheckImageReg from "@container/checkImgReg";
// import Image from "@container/img";
import IconList from './container/IconList';
import Zustand from '@container/Zustand';
import Filter from '@container/Filter';

import Table from '@container/Table'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display :"flex",flex : 1}}>
        <Profiler id="Navigation" onRender={()=><div>loading...</div>}>
          {/* <Route path={'/'} element={<Home/>} />
          <Route path={'/Filter'}
              // loader={({ params }) => {
              //     console.log("loading...");
              // }}
              element={<Filter/>}
          />
          <Route path={'/Zustand'}
              // loader={({ params }) => {
              //     console.log("loading...");
              // }}
              element={<Zustand/>}
          />
          <Route path={'/IconList'}
              // loader={({ params }) => {
              //     console.log("loading...");
              // }}
              element={<IconList/>}
          /> */}

          {/* <Table 
            thData={[{value: '1', width : 250},{value: '2', width : 250},{value: '3', width : 250}]}
            tdData={[
              [{value: '1', width : 250},{value: '1', width : 250},{value: '1', width : 250}],
              [{value: '2', width : 250}],
              [{value: '3', width : 250}]
            ]}

            Element={{
              modify : (() => <div>Render</div>),
            }}
          /> */}

            <input onBlur={(e)=>{console.log(e); e.target.value = '바꿀꺼임'}}/>
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