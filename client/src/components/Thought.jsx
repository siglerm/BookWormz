import React from 'react';

function Thought({ thought, user, currentBook }) {
  return (
    <div class="thought">
      <h5>{user}'s Thoughts:</h5>
      Mood: {thought.mood}
      <div className="thoughtBody">{thought.thought_body}</div>
      <div className="thoughtFooter">
        Currently Reading: {currentBook.title}
        Page Number: {thought.page}
      </div>
    </div>
  );
}

export default Thought;
