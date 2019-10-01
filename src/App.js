import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import './App.scss';

const API_KEY = "";

class App extends React.Component {
  
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const units = "metric";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${API_KEY}`);
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
          <div className="row weather">
            <div className="col xl8 l8 m6 s12 output">
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error} />
            </div>
            <div className="col xl4 l4 m6 s12 form">
              <Form getWeather={this.getWeather} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;