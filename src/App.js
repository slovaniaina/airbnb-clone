import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount(){
    console.log("did mount");
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        this.setState(
          {
            flats : data
          }
        );
      }
    )

  }

  render() {
    // const flat = {
    //   "id": 148,
    //   "name": "Trendy Apt in Buttes Montmartre",
    //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    //   "price": 200,
    //   "priceCurrency": "EUR",
    //   "lat": 48.885707,
    //   "lng": 2.343543
    // };

    // const flats = [flat, flat, flat];
    // return (
    //   <div>
    //     <Flat flat={flat} />
    //     <Flat flat={flat} />
    //   </div>
    // );

    const center = {
      lat: 48.8566,
      lng: 2.3522
    };
    return (
      <div className = "app">
        <div className = "main">
          <div className = "search">

          </div>
          <div className = "flats">
            {/* <Flat flat={flat} />
            <Flat flat={flat} />
            <Flat flat={flat} />  */}
            {
              this.state.flats.map(
                (flat) => {
                  return <Flat flat={flat} />
                }
              )
            }
          </div>
        </div>
        <div className = "map">
          <GoogleMapReact
            center={center}
            zoom={11}
          > 
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
