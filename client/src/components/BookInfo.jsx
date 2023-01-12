import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

function BookInfo() {
  const [bookInfo, setBookInfo] = useState([]);
  useEffect(() => {
    axios
      .get('/BookWormz/bookinfos')
      .then((response) => {
        console.log('Meow');
        setBookInfo(response);
      })
      .catch((error) => {
        console.log('There is an error in BookInfo: ', error);
      });
  }, []);
  console.log(bookInfo);
  return (
    <div id="BookInfo">
      <Navigation />
      meow
    </div>
  );
}

export default BookInfo;
