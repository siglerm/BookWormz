import React from 'react';
import Avatar from '@mui/material/Avatar';

function ProfileHeader({ info }) {
  return (
    <div id="ProfileHeader">
      <div id="Profile">
        <div id="username">{info[0].username}</div>
        <div id="avatar">
          <Avatar
            alt="Remy Sharp"
            src="./avatarPic.jpg"
            sx={{ width: 70, height: 70 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
