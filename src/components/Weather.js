import React from 'react'

const Weather = props => (
    <div>
        
        { !props.city && !props.country && 
            <div className="col s12 title-icon">
                <h4>Enter your location</h4>
            </div>
        }
        { props.city && props.country && props.icon && props.description && 
            <div className="col s12 title-icon">
                <h4>
                <img src={'http://openweathermap.org/img/wn/'+props.icon+'.png'} alt={props.description}/>
                {props.city}, {props.country}
                </h4>
            </div>
        }
        {/* { props.icon && 
            <div className="col s12 icon">
                <img src={'http://openweathermap.org/img/wn/'+props.icon+'.png'} alt={props.description}/>
            </div> 
        } */}
        { props.temperature && 
            <div className="col s12">Currently : {props.temperature} &#8451;</div> 
        }
        { props.humidity && 
            <div className="col s12">Humidity: {props.humidity}</div> 
        }
        { props.description && 
            <div className="col s12">Conditions: {props.description}</div> 
        }
        { props.error && 
            <div className="col s12">{props.error}</div> 
        }
    </div>
)

export default Weather;
