import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import kl_img from './assets/kl.jpeg';
import sg_img from './assets/sg.jpeg';
import nl_img from './assets/nl.jpeg';
import fr_img from './assets/fr.jpeg';
import ph_img from './assets/ph.jpeg';
import vn_img from './assets/vn.jpeg';
import gb_img from './assets/gb.jpeg';
import cm_img from './assets/cm.jpeg';
import bk_img from './assets/bk.jpeg';
import sky from './assets/sky.jpeg';
import './App.scss';



var klbg = { backgroundImage: `url(${kl_img})`};
var sgbg = { backgroundImage: `url(${sg_img})`};
var nlbg = { backgroundImage: `url(${nl_img})`};
var frbg = { backgroundImage: `url(${fr_img})`};
var phbg = { backgroundImage: `url(${ph_img})`};
var vnbg = { backgroundImage: `url(${vn_img})`};
var gbbg = { backgroundImage: `url(${gb_img})`};
var cmbg = { backgroundImage: `url(${cm_img})`};
var bkbg = { backgroundImage: `url(${bk_img})`};
var skybg = { backgroundImage: `url(${sky})`};

const API_KEY = process.env.REACT_APP_KEY;

class App extends React.Component {
  
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    location: undefined,
  }
  getBackground(city){
    switch(city) {
      case 'NL':
          return nlbg;
      case 'TH':
          return bkbg;
      case 'VN':
          return vnbg;
      case 'MY':
          return klbg;
      case 'GB':
          return gbbg;
      case 'PH':
          return phbg;
      case 'FR':
          return frbg;
      case 'KH':
          return cmbg;
      case 'SG':
          return sgbg;
      default:
          return skybg;
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const location = e.target.value;
    const units = "metric";
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`);
    const data = await api_call.json();
    // console.log(data.name);
    if (location) {
      this.setState({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        wind: undefined,
        description: undefined,
        error: "Please Enter values"
      })
    }
  }
  render() {
    return (
      <div className="main" style={ this.getBackground(this.state.country) }>
         <div className="container">
            <div className="col xl12 l12 m12 s12 form">
              <h1>
                <i className="fa fa-umbrella" aria-hidden="true"></i> The Weather man can!</h1>
              <Form getWeather={this.getWeather} />
            </div>
          <div className="row weather">
            <div className="col xl12 l12 m12 s12 output ">
              <Weather
                temperature={this.state.temperature}
                temp_min={this.state.temp_min}
                temp_max={this.state.temp_max}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                wind={this.state.wind}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error} />
            </div>
          </div>
        </div> 
      </div>
    );
  }
};

export default App;