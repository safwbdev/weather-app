import React from 'react'

const Weather = props => (
    <div>
        { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
        { props.temperature && <p>Temperature: {props.temperature}</p> }
        { props.humidity && <p>Humidity: {props.humidity}</p> }
        { props.description && <p>Conditions: {props.description}</p> }
        { props.error && <p>{props.error}</p> }
        { props.icon && <p>icon: <img src={'http://openweathermap.org/img/wn/'+props.icon+'.png'} /></p> }
    </div>
)

export default Weather;
