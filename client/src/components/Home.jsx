import React from 'react';
import Navigation from './Navigation';
import ThoughtList from './ThoughtList';
import ProfileHeader from './ProfileHeader';

function Home({ info }) {
  return (
    <div id="Home">
      <Navigation />
      <ProfileHeader info={info} />
      <ThoughtList
        thoughts={info[0].thoughts}
        user={info[0].username}
        currentBook={info[0].library[0].alreadyRead[0]}
      />
    </div>
  );
}

export default Home;
