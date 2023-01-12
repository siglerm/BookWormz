import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

function Grow() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    author: '',
    summary: '',
    coverImage: '',
    listDest: '',
  });
  function handleBookSubmission(data) {
    axios
      .patch('/BookWormz/profile', { data: data })
      .then(() => {
        navigate('/shelf', { state: { info } });
      })
      .catch((error) => {
        console.log('There is an error in Grow: ', error);
      });
  }
  return (
    <div id="Grow">
      {/* <Navigation /> */}
      <div id="title">
        <label>
          Title:
          <input
            value={form.title}
            required="true"
            style={{ width: '80%' }}
            onChange={(event) => {
              setForm({
                ...form,
                title: event.target.value,
              });
            }}
          />
        </label>
      </div>
      <div id="author">
        <label>
          Author:
          <input
            value={form.author}
            style={{ width: '90%' }}
            onChange={(event) => {
              setForm({
                ...form,
                author: event.target.value,
              });
            }}
          />
        </label>
      </div>
      <div id="summary">
        <label>
          Summary:
          <textarea
            value={form.summary}
            type="body"
            maxLength="1000"
            style={{ width: '70%' }}
            required="true"
            onChange={(event) => {
              setForm({
                ...form,
                summary: event.target.value,
              });
            }}
          />
        </label>
      </div>
      <div id="imageUpload">
        <label>
          Upload a Cover Image:
          <input
            type="file"
            onChange={(event) => {
              setForm({
                ...form,
                coverImage: URL.createObjectURL(event.target.files[0]),
              });
            }}
          />
        </label>
      </div>
      <div id="list">
        <label>
          Which list do you want to add this to:
          <select
            id="listDest"
            name="listDest"
            required="true"
            value={form.listDest}
            onChange={(event) => {
              setForm({
                ...form,
                listDest: event.target.value,
              });
            }}
          >
            <option value="Currently Reading">Currently Reading</option>
            <option value="To Be Read">To Be Read</option>
            <option value="Already Read">Already Read</option>
          </select>
        </label>
      </div>
      <button type="submit" onClick={() => handleBookSubmission(form)}>
        Submit
      </button>
    </div>
  );
}

export default Grow;
