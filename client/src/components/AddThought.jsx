import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';
import LoadingPage from './LoadingPage';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddThought() {
  const navigate = useNavigate;
  const [info, setInfo] = useState([]);
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState({
    thought_body: '',
    page: 0,
    mood: '',
    thought_target: '',
    date: new Date(),
  });
  function handleThoughtSubmission(data) {
    axios
      .patch('/BookWormz/profile', {
        data: data,
        username: info[0].username,
      })
      .then((response) => {
        // getData();
      })
      .catch((error) => {
        console.log('There is an error in App: ', error);
      });
  }
  useEffect(() => {
    axios
      .get('/BookWormz/profile')
      .then((response) => {
        setInfo(response.data);
        setReady(true);
      })
      .catch((error) => {
        console.log('There is an error in the App: ', error);
      });
  }, []);
  console.log(location);
  return !ready ? (
    <LoadingPage />
  ) : (
    <div id="AddThought">
      <Navigation />
      <ProfileHeader info={info} />
      <div id="thoughtContainer">
        <div id="thoughtForm">
          <label>
            What are your thoughts about:
            <select
              id="thought_target"
              name="thought_target"
              required="true"
              value={form.thought_target}
              onChange={(event) =>
                setForm({
                  ...form,
                  thought_target: event.target.value,
                })
              }
            >
              <option value={info[0].currentRead.title}>
                {info[0].currentRead.title}
              </option>
              {info[0].alreadyRead.map((book) => {
                return <option value={book.title}>{book.title}</option>;
              })}
              <option value="Just Chattin'">Just Chattin'</option>
            </select>
          </label>
          <label>
            How are you feeling:
            <input
              value={form.mood}
              onChange={(event) => {
                setForm({
                  ...form,
                  mood: event.target.value,
                });
              }}
            />
          </label>
          <label>
            What page are you on:
            <input
              value={form.page}
              onChange={(event) => {
                setForm({
                  ...form,
                  page: event.target.value,
                });
              }}
            />
          </label>
          <label>
            Write your thoughts here:
            <input
              value={form.thought_body}
              placeholder="It's 3pm somewhere..."
              type="body"
              maxLength="1000"
              required="true"
              onChange={(event) => {
                setForm({
                  ...form,
                  thought_body: event.target.value,
                });
              }}
            />
          </label>
          <div id="submitButton">
            <button
              type="submit"
              onClick={() => {
                handleThoughtSubmission(form);
                navigate('/');
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddThought;
