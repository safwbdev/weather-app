import React from 'react'

const Weather = props => (
    <div className="weather-data">
        
        { !props.city && !props.country && 
            <div className="col s12 first">
                <h4>No data? Pick a location first!</h4>
            </div>
        }
        <div className="col xl7 l7 m7 s12 country-weather">
        { props.city && props.country && props.icon && 
            <div>
                <h4>
                    <img src={'http://openweathermap.org/img/wn/'+props.icon+'.png'} alt={props.description}/>
                    {props.city}
                </h4>
                <h1>{props.temperature} <span>&#8451;</span></h1>
            </div>
        }
        </div>
        <div className="col xl5 l5 m5 s12">
        { props.description && 
            <div className="col xl12 l12 m12 s12 title-icon">
                 <h5>{props.description}</h5>
            </div>
        }
        { props.temp_min && props.temp_max &&
        <div className="col s12 minmax">
            <div className="col xl6 l6 m6 s6 max">
                <i className="fa fa-chevron-up hide-on-large-only" aria-hidden="true"></i><span className="hide-on-small-only"> High : </span>
                {props.temp_max} &#8451;
            </div>
            <div className="col xl6 l6 m6 s6 min">
                <i className="fa fa-chevron-down hide-on-large-only" aria-hidden="true"></i><span className="hide-on-small-only"> Low : </span>
                {props.temp_min} &#8451;
            </div>
        </div>
        }
        <div className="condition">
            { props.humidity && 
                <div className="col xl12 l12 m12 s12">Humidity: <span>{props.humidity}%</span></div> 
            }
            { props.pressure && 
                <div className="col xl12 l12 m12 s12">Pressure: <span>{props.pressure} mbar</span></div> 
            }
            { props.wind && 
                <div className="col xl12 l12 m12 s12">Wind: <span>{props.wind} km/h</span></div> 
            }
            { props.error && 
                <div className="col xl12 l12 m12 s12">{props.error}</div> 
            }
        </div>
        </div>
    </div>
)

export default Weather;
