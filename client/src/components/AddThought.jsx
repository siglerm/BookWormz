import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import Navigation from './Navigation';

function AddThought({ info, handleSubmission }) {
  const [form, setForm] = useState({
    thought_body: '',
    page: 0,
    mood: '',
    thought_target: '',
    date: new Date(),
  });
  return (
    <div id="AddThought">
      <Navigation />
      <ProfileHeader info={info} />
      <label>
        What are your thoughts about:
        <select
          id="thoughtTarget"
          name="thoughtTarget"
          value={form.thought_target}
          onChange={(event) =>
            setForm({
              ...form,
              thought_target: event.target.value,
            })
          }
        >
          <option value={form.thought_target}>
            {info[0].library.currentRead.title}
          </option>
          {info[0].library.alreadyRead.map((book) => (
            <option value={form.thought_target}>{book.title}</option>
          ))}
          <option value={form.thought_target}>Just Chattin'</option>
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
              thought_body: event.value,
            });
          }}
        />
      </label>
      <button type="submit" onClick={() => handleSubmission(form)}>
        Submit
      </button>
    </div>
  );
}

export default AddThought;
