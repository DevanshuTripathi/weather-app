import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import Card from './components/card';

function App() {

  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState(null);
  const city = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userLocation = city.current.value;
    setLocation(userLocation);
  }

  useEffect(()=>{

    if(location){
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

      fetch(url, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        setTemp(data.current);
      })
      .catch(error => console.error(error));

    }

  }, [location]);


  return (
    <div className="App">
      <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={city} />
        <input type="submit" />
      </form>
      </div>
      <div className = "Display" >
          {temp !== null ? (
                <Card data={temp} />  
              ) : (
                location !== null ? (
                  <p>Loading......</p>
                ) : (
                  <p>Set Location</p>
                )
            )
          }
      </div>

    </div>
  );
}

export default App;
