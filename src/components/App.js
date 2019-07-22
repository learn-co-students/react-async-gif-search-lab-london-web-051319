import React, {Component} from 'react';
import NavBar from './NavBar';
import GifListContainer from '../containers/GifListContainer';

// const URL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g";

// the App component should render out the GifListContainer component 

class App extends Component {

  // state = {
  //   gifs: []
  // }

  // componentDidMount = async () => {
  //   const dataRaw = await fetch(URL);
  //   const dataJSON = await dataRaw.json();
  //   this.setState({gifs: dataJSON.data});
  // }

  render() {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          <GifListContainer />
      </div>
    )
  }
}

export default App
