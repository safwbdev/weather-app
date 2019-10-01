import React from 'react'

const locations = [
    ['London', 'uk'],
    ['Amsterdam', 'nl'],
    ['Paris', 'fr'],
    ['Singapore', 'sg'],
    ['Bangkok', 'th'],
    ['Hanoi','vn'],
    ['Phnom Penh','kh'],
    ['Manila','ph'],
    ['Kuala Lumpur','my'],
];
const areaItems = locations.map((location) =>
  <option value={[location[0],location[1]]}>{location[0]}</option>
);

const Form = props => (
    <form >
        <div className="input-field col s12">
            <select name="location" defaultValue={'DEFAULT'} onChange={props.getWeather}>
                <option value="DEFAULT" disabled>Choose your option</option>
                {areaItems}
            </select>
        </div>
    </form>
)


export default Form;
