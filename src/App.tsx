

import { Profiler, useRef, useState } from 'react'
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
import PPT2HTML from '@container/PPT2HTML'

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './component/CustomTime/timestyle.scss';


import ReactGrids from '@container/ReactGrid';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Profiler id="Navigation" onRender={() => <div>loading...</div>}>
        <PPT2HTML />

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

        {/* <TimePicker
              format={"HH:mm"}
              hourPlaceholder={"시"}
              minutePlaceholder={"분"}
              disableClock={true}
              // clearIcon={false}
              onChange={(e)=>console.log(e)}
              // value={learnStart}
              
              className="newIndexForm time_input_course"
            
            /> */}

        {/* <ReactGrids

            /> */}

        {/* <Zustand/> */}



      </Profiler>
    </div>

  )
}

export default App