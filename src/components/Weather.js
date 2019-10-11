import React from 'react'

const Weather = props => (
    <div className="weather-data">
        
        { !props.city && !props.country && 
            <div className="col s12 first">
                <i class="fa fa-hand-o-left" aria-hidden="true"></i>
                <h4>No data? Pick a location first!</h4>
            </div>
        }
        { props.city && props.country && props.icon && 
            <div className="col xl6 l6 m12 s12 title-icon">
                <h4>
                    <img src={'http://openweathermap.org/img/wn/'+props.icon+'.png'} alt={props.description}/>
                    {props.temperature} <span>&#8451;</span>
                </h4>
               
            </div>
        }
        { props.description && 
            <div className="col xl6 l6 m12 s12 title-icon">
                 <h5>{props.description}</h5>
            </div>
        }
        { props.temp_min && props.temp_max &&
        <div className="col s12 minmax">
            <div className="col s6 min">
                <i class="fa fa-chevron-down hide-on-large-only" aria-hidden="true"></i><span className="hide-on-small-only"> Low : </span>
                {props.temp_min} &#8451;
            </div>
            <div className="col s6 max">
                <i class="fa fa-chevron-up hide-on-large-only" aria-hidden="true"></i><span className="hide-on-small-only"> High : </span>
                {props.temp_max} &#8451;
            </div>
        </div>
        }
        <div className="condition">
            { props.humidity && 
                <div className="col xl6 l6 m12 s12">Humidity: <span>{props.humidity}%</span></div> 
            }
            { props.pressure && 
                <div className="col xl6 l6 m12 s12">Pressure: <span>{props.pressure} mbar</span></div> 
            }
            { props.wind && 
                <div className="col xl12 l12 m12 s12">Wind: <span>{props.wind} km/h</span></div> 
            }
            { props.error && 
                <div className="col xl12 l12 m12 s12">{props.error}</div> 
            }
        </div>
    </div>
)

export default Weather;
