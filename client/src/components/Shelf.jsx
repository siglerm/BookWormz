import React from 'react';
import ProfileHeader from './ProfileHeader';
import Book from './Book';
import Navigation from './Navigation';

function Shelf({ info }) {
  console.log(info);
  return (
    <div id="Shelf">
      <Navigation />
      <ProfileHeader info={info} />
      <button>Grow Your Library?</button>
      <h3>Currently Reading</h3>
      <div id="CurrentRead">
        <Book book={info[0].library.currentRead} />
      </div>
      <h3>To Be Read</h3>
      {info[0].library.toBeRead?.map((book) => {
        return <Book book={book} />;
      })}
      <h3>Already Read</h3>
      {info[0].library.alreadyRead?.map((book) => {
        return <Book book={book} />;
      })}
    </div>
  );
}

export default Shelf;
