
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import PieceOfArt from './PieceOfArt';
import DropDown from './DropDown';

function App() {

  const [art, setArt] = useState([]);
  // const [search, setSearch] = useState('');

  const getArt = function(e, choice){
    e.preventDefault();
    // return choice
    // console.log(choice);
    artCall(choice)
  }

  const artCall = (choice) => {
    const key = `BoKzcpvV`;
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: key,
        format: 'json',
        hasImage: true,
        q: choice
      }
    }).then((response) => {
      // console.log(response.data.artObjects);
      setArt(response.data.artObjects);
      // store results in state
    })
  }
  // make API call to Rijksmuseum API
  // useEffect(() => {
  //   const key = `BoKzcpvV`;
  //   axios({
  //     url: 'https://www.rijksmuseum.nl/api/en/collection',
  //     method: 'GET',
  //     dataResponse: 'json',
  //     params: {
  //       key: key,
  //       format: 'json',
  //       hasImage: true
  //     }
  //   }).then((response) => {
  //     // console.log(response.data.artObjects);
  //     setArt(response.data.artObjects);
  //     // store results in state
  //   })
  // }, [])

  return (
    <div className="App">
      <h1>DO YOU LIKE ART??</h1>
      <p>Yes of course you do!</p>
      <DropDown chooseArt={getArt}/>

      {
        art.map((artPiece) => {
          return(
            // <PieceOfArt 
            // title={artPiece.title} 
            // imgPath={artPiece.webImage.url}
            // artist={artPiece.principalOrFirstMaker}/>
            <PieceOfArt art={artPiece} />
            
          )
        })
      }
    </div>
  );
}

export default App;

// display results of state by mapping over it
