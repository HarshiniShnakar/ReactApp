// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/user/101');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to Home Page</h2>
      <button onClick={goToProfile}>Go to User 101 Profile</button>
    </div>
  );
};

export default Home;
