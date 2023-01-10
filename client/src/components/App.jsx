import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import Navigation from './Navigation';
import LoadingPage from './LoadingPage';
import Shelf from './Shelf';
import BookInfo from './BookInfo';
import AddThought from './AddThought';

function App() {
  const [info, setInfo] = useState([]);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState('Home');
  useEffect(() => {
    getData();
  }, []);
  function handleSubmission(data) {
    axios
      .patch('/BookWormz/profile', { data: data, username: info[0].username })
      .then((response) => {
        getData();
      })
      .catch((error) => {
        console.log('There is an error in the App: ', error);
      });
  }
  const getData = () => {
    axios
      .get('/BookWormz/profile')
      .then((response) => {
        setInfo(response.data);
        if (ready === false) {
          setReady(true);
        }
      })
      .catch((error) => {
        console.log('There is an error in the App: ', error);
      });
  };
  console.log(info);
  return !ready ? (
    <LoadingPage />
  ) : (
    <div id="App">
      {/* <Home info={info} /> */}
      {/* <Shelf info={info} /> */}
      <AddThought info={info} handleSubmission={handleSubmission} />
    </div>
  );
}

export default App;
