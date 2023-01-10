import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import Navigation from './Navigation';
import LoadingPage from './LoadingPage';

function App() {
  const [info, setInfo] = useState([]);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState('');
  useEffect(() => {
    axios
      .get('/BookWormz/profile')
      .then((response) => {
        setInfo(response.data);
        setReady(true);
      })
      .catch((error) => {
        console.log('There is an error in the App: ', error);
      });
  }, []);
  return !ready ? (
    <LoadingPage />
  ) : (
    <div id="App">
      <Home info={info} />
    </div>
  );
}

export default App;
