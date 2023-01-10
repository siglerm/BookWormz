import React from 'react';
import Thought from './Thought';

function ThoughtList({ thoughts, user, currentBook }) {
  return (
    <div className="thought">
      {thoughts?.length ? (
        thoughts?.map((thought, index) => {
          return (
            <Thought thought={thought} user={user} currentBook={currentBook} />
          );
        })
      ) : (
        <p>Head Empty No Thoughts</p>
      )}
    </div>
  );
}

export default ThoughtList;
