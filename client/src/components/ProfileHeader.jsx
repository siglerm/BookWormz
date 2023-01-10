import React from 'react';

function ProfileHeader({ info }) {
  return (
    <div id="ProfileHeader">
      <h3>{info[0].username}</h3>
      <img src={info[0].profilePic} alt="" width="170" height="170" />
      Currently Reading: {info[0].library[0].alreadyRead[0].title}
    </div>
  );
}

export default ProfileHeader;
