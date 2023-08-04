

import './App.css';

import Chart2 from './components/Chart2';


function App() {


  return (
  <div className="App">
     
     <Chart2 />
    
      <div class=" bg-blue-1 md:m-6 px-2 py-4 md:p-4 rounded lg:flex gap-4 overflow-hidden">
      <div class="w-full"><div class="flex flex-col md:flex-row items-center gap-4 ">
      <select class="w-full md:w-auto ring-1 ring-gray-200 bg-gray-100 rounded focus:outline-none px-2 py-2 font-semibold" fdprocessedid="xwlzo">
      <option>INR</option>
      <option>USD</option>
      <option>GBP</option>
      <option>EUR</option>
      <option>YEN</option>
      </select>
      <div class=" relative w-full">
      <div class="drop-shadow rounded flex items-center gap-2 bg-white px-2 md:px-6 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 
      9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977
       6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 
       3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0
        0 4.875-1.975l.15-.15z" fill="rgba(142,153,172,1)"></path>
        </svg>
        <input type="text" placeholder="Search by coin" class="w-full focus:outline-none placeholder:font-semibold placeholder:text-gray-1" value="" fdprocessedid="9ijd5"></input>
        </div>
        </div>
        </div>
        
       
        <div class="bg-white shadow rounded my-4 px-4 py-6">
        <div class="">
        <div class="md:flex items-center justify-end gap-8">
        <div class="flex flex-wrap gap-3 font-semibold ">
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3"  >1D</button>
        <button class="rounded  py-2 px-4 bg-blue-2 ring-2 ring-blue-3 text-blue-3" >1W</button>
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3" >1M</button>
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3" >3M</button>
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3" >6M</button>
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3" >6M</button>
        <button class="rounded  py-2 px-4 bg-gray-2 ring-2 ring-blue-3 text-blue-3" >1Y</button>
        </div>
        <div class="flex flex-col md:flex-row gap-1 md:gap-3 my-4 ">
        <select class="ring-1 ring-gray-200 bg-gray-100 rounded focus:outline-none px-2 py-2 font-semibold" fdprocessedid="jkb3tk">
        <option value="roasthimjim">Jim</option><option value="pepe-2-0">Pepe 2.0</option>
        <option value="gala">GALA</option><option value="mina-protocol">Mina Protocol</option>
        <option value="arbitrum">Arbitrum</option><option value="matic-network">Polygon</option>
        <option value="bitcoin">Bitcoin</option></select>
        <select class="ring-1 ring-gray-200 bg-gray-100 rounded focus:outline-none px-2 py-2 font-semibold" fdprocessedid="wzsui">
        <option value="Bar">Bar</option>
        <option value="Line">Line</option>
        <option value="Line with Markers">Line with Markers</option>
        </select>
        </div>
        </div>
        </div>
       </div>
       </div>
       </div>
      
  </div>



    
  );
}

export default App;
