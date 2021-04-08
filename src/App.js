
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PieceOfArt from './PieceOfArt';

function App() {

  const [art, setArt] = useState([]);
  // make API call to Rijksmuseum API
  useEffect(() => {
    const key = `BoKzcpvV`;
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: key,
        format: 'json',
        hasImage: true
      }
    }).then((response) => {
      console.log(response.data.artObjects);
      setArt(response.data.artObjects);
      // store results in state
    })
  }, [])

  return (
    <div className="App">
      <h1>DO YOU LIKE ART??</h1>
      {
        art.map((artPiece) => {
          return(
            // <PieceOfArt 
            // title={artPiece.title} 
            // imgPath={artPiece.webImage.url}
            // artist={artPiece.principalOrFirstMaker}/>
            <PieceOfArt art={artPiece}/>
            
          )
        })
      }
    </div>
  );
}

export default App;

// display results of state by mapping over it
