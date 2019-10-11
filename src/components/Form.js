import React from 'react'

const locations = [
    ['Amsterdam', 'NL'],
    ['Bangkok', 'TH'],
    ['Hanoi','VN'],
    ['Kuala Lumpur','MY'],
    ['London', 'UK'],
    ['Manila','PH'],
    ['Paris', 'FR'],
    ['Phnom Penh','KH'],
    ['Singapore', 'SG'],
];
const areaItems = locations.map((location, key) =>
  <option value={[location[0],location[1]]} key={key}>{location[0]}, {location[1]}</option>
);

const Form = props => (
    <form >
        <div className="input-field col xl12 l12 m12 s12">
            <select name="location" defaultValue={'DEFAULT'} onChange={props.getWeather}>
                <option value="DEFAULT" disabled>Select a location</option>
                {areaItems}
            </select>
        </div>
    </form>
)


export default Form;
