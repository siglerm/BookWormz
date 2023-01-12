import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CurrentlyReading({ book }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 345, background: '#fbf3eb', color: '#7b503c' }}
      onClick={() => navigate('/bookInfo')}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={book.coverImage}
          alt="Book Cover"
          height="350"
          width="250"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: 'center' }}
          >
            {book.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'center' }}
          >
            {book.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CurrentlyReading;
