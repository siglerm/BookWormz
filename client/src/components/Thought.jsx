import React from 'react';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

function Thought({ thought, user, currentBook }) {
  return (
    <div className="thought">
      <div className="displayHeader">
        <b>{thought.username}</b>
        <div>
          <Avatar alt="" src={thought.profilePic} />
        </div>
        <div className="mood">Mood: {thought.mood}</div>
      </div>
      <Divider />
      <div className="thoughtBody">{thought.thought_body}</div>
      <div className="thoughtFooter">
        Currently Reading: <b>{thought.thought_target}</b>
        <div id="page">Page: {thought.page}</div>
      </div>
    </div>
  );
}

export default Thought;
