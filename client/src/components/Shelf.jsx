import React from 'react';
import ProfileHeader from './ProfileHeader';
import Book from './Book';
import Navigation from './Navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grow from './Grow';
import { useNavigate, useLocation } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fbf3eb',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Shelf() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state.info;
  function growLibrary() {
    navigate('/grow');
  }
  return (
    <div id="Shelf">
      <Navigation />
      <ProfileHeader info={info} />
      <Button onClick={handleOpen}>Grow Your Library?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grow />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
      <div id="bookLists">
        <div className="title">Currently Reading:</div>
        <div id="currentReadingList">
          <Book book={info[0].currentRead} />
        </div>
        <div className="title">To Be Read:</div>
        <div id="toBeReadingList">
          {info[0].toBeRead?.map((book) => {
            return <Book book={book} />;
          })}
        </div>
        <div className="title">Already Read:</div>
        <div id="alreadyReadingList">
          {info[0].alreadyRead?.map((book) => {
            return <Book book={book} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shelf;
