import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeather}) => {
    const handleInputChange=(evt)=>{
        setCity(evt.target.value);
    }
    const [error, seterror] = useState("")
    const handleClick=()=>{
        if((!city)){
            seterror("City Field is Empty")
        }
        else{
            seterror("")
fetchCityWeather()
        }
    }
    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control 
    type="text"
    value={city}
     placeholder="Enter City"
     onChange={handleInputChange}/>
    
  </Form.Group>

  <p className="text-danger">{error}</p>
  <Button variant="primary" className="m-2" onClick={handleClick}>
    Submit
  </Button>
</Form>
        </div>
    );
};

export default CityInput;