import React from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}>
        {/* <div class="input-field col s12">
            <input type="text" name="city" placeholder="City" />
        </div>
        <div class="input-field col s12">
            <input type="text" name="country" placeholder="Country" />
        </div> */}
        <div class="input-field col s12">
            {/* <select name="location">
                <option value="London,uk">London</option>
                <option value="Amsterdam,nl">Amsterdam</option>
            </select> */}
            <select name="location">
                <option value="" disabled selected>Choose your option</option>
                <option value={['London','uk']}>London</option>
                <option value={['Amsterdam','nl']}>Amsterdam</option>
                <option value={['Paris','fr']}>Paris</option>
                <option value={['Singapore','sg']}>Singapore</option>
                <option value={['Bangkok','th']}>Bangkok</option>
                <option value={['Hanoi','vn']}>Hanoi</option>
                <option value={['Phnom Penh','kh']}>Phnom Penh</option>
                <option value={['Manila','ph']}>Manila</option>
                <option value={['Kuala Lumpur','my']}>Kuala Lumpur</option>
            </select>
        </div>
        <div class="input-field col s12">
            <button>Get Weather</button>
        </div>
    </form>
)

export default Form;
