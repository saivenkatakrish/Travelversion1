import React from 'react';
import './Home.css';
import { states } from '../assets/data';

const Home = () => {
  const handleGoogleMapsRedirect = (placeLocation) => {
    
    const [lat, lng] = placeLocation
      .split(',')
      .map((coord) => parseFloat(coord.trim().replace(/[^\d.-]/g, '')));

   
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`,
      '_blank'
    );
  };

  const handleScrollToState = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Travel Explorer</h1>
        <h4>Discover your next adventure with us!</h4>
      </div>

      <div className="state-row">
        {states.map((state) => (
          <div
            key={state.name}
            className="state-card"
            onClick={() => handleScrollToState(state.name)}
          >
            <img src={state.image} alt={state.name} />
            <h3>{state.name}</h3>
          </div>
        ))}
      </div>

      {states.map((state) => (
        <div key={state.name} id={state.name} className="state-details">
          <h2>{state.name}</h2>
          <p>{state.description}</p>
          <div className="places-row">
            {state.places.map((place) => (
              <div key={place.name} className="place-card">
                <img
                  src={place.image}
                  alt={place.name}
                  onClick={() => handleGoogleMapsRedirect(place.location)} 
                  style={{ cursor: 'pointer' }}
                />
                <p>{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
