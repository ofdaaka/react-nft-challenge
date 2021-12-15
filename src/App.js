import "./App.css";
import "./components/Header.css";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  //we store all of our punks/data in punklistdata which is an empty array, and then it becomes setpunklistdata 
  //useState takes two params first being where to store data second being how to use said data once stored
const [punkListData, setPunkListData] = useState([])
const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xa237D51BA7d1681A20edA2dB39515821A9E60825&order_direction=asc'
        )
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])


  return (
    <div className="app">
      <Header />
      {
      punkListData.length > 0 && (
      <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
      </>
        )
      }
      
    </div>
  );
}

export default App;
