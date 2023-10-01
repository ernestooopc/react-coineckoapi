import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState([])

  const getData = async () => {
    const respuesta = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1")
    console.log(respuesta.data)
    setCoins(respuesta.data)
  }  

  useEffect(() => {

    getData()

  },[])

  return (
    <div className="container">
      <div className='row'>
        <input type="text" placeholder='searh a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)}></input>
        <h1>Coin Market</h1>
      <TableCoins coins={coins} search={search}/> 
      </div>      
      </div>
  );
}

export default App;
