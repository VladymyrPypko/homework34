import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length) {
            setNotes((prev) => [...prev, inputValue]);
            setInputValue('');
        }
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const deleteNote = (index) => {
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="noteInput"
                placeholder="Введите текст"
                value={inputValue}
                onChange={handleInput}
                />
                <button type="submit">Добавить</button>
            </form>
            {notes.length === 0 ? (
                <p>Заметок нет</p>
            ) : (
                <NoteList>
                {notes.map((note, index) => (
                    <NoteItem key={index} note={note} index={index} deleteNote={deleteNote} />
                ))}
                </NoteList>
            )}
        </div>
    );
};

export default App;