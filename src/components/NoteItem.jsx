import React from 'react';
import './NoteItem.css'

const NoteItem = ({ note, index, deleteNote }) => {
  return (
    <div className='note-item'>
      <p>{note}</p>
      <button onClick={() => deleteNote(index)}>
        <span/>
      </button>
    </div>
  );
}

export default NoteItem;