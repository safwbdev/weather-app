import React from 'react';
// import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.scss'
import Navbar from './components/Navbar'

const API_KEY = "13c408d1a312840b2d44606200e0015d";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter values"
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container section">

          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error} />
        </div>
      </div>
    );
  }
};

export default App;