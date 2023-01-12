import React from 'react';
import Navigation from './Navigation';
import ThoughtList from './ThoughtList';
import ProfileHeader from './ProfileHeader';

function Home({ info }) {
  console.log(info);
  return (
    <div id="Home">
      <ProfileHeader info={info} />
      <ThoughtList
        thoughts={info[0].thoughts}
        user={info[0].username}
        currentBook={info[0].currentRead.title}
      />
    </div>
  );
}

export default Home;
