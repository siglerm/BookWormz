import React from 'react';

function Book({ book }) {
  console.log('What is this: ', book);
  return (
    <div className="Book">
      <img src={book.coverImage} alt="" />
      {book.title} by {book.author}
    </div>
  );
}

export default Book;
