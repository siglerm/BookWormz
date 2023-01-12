import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import Navigation from './Navigation';
import LoadingPage from './LoadingPage';
import Shelf from './Shelf';
import BookInfo from './BookInfo';
import AddThought from './AddThought';
import Grow from './Grow';
import Root from './Root';
import NotFound from './NotFound';
import CurrentBook from './CurrentBook';
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

function App() {
  const [info, setInfo] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getData();
  }, []);
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
    <div>
      <Navigation info={info} />
      <div id="App">
        <div id="Feed">
          <div id="homeFeed">
            <Home info={info} />
            <div id="currentBookContainer">
              <CurrentBook book={info[0].currentRead} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
