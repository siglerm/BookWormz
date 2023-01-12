import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Book({ book }) {
  console.log('What is this: ', book);
  return (
    <div className="Book">
      <Card
        sx={{
          maxWidth: 345,
          background: '#fbf3eb',
          color: '#7b503c',
          margin: '5px 10px',
          'overflow-x': 'auto',
          'box-shadow':
            'inset 3px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={book.coverImage}
            alt="Book Cover"
            height="fit-content"
            width="250"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: 'center', color: '#7b503c' }}
            >
              {book.title} by {book.author}
            </Typography>
            <Typography
              variant="body2"
              color="#7b503c"
              style={{ textAlign: 'center' }}
            >
              {book.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Book;
