
import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [noteContentMap, setNoteContentMap] = useState({});

  const handleAddNote = () => {
    const newNote = { id: crypto.randomUUID(), content: 'Nieuwe notitie', favorite: false };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setNoteContentMap({ ...noteContentMap, [newNote.id]: '' });
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      setNotes(notes.filter((note) => note.id !== selectedNote.id));
      setSelectedNote(null);
      const { [selectedNote.id]: deletedNoteContent, ...remainingContentMap } = noteContentMap;
      setNoteContentMap(remainingContentMap);
    }
  };

  const handleToggleFavorite = () => {
    if (selectedNote) {
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote.id ? { ...note, favorite: !note.favorite } : note
      );
      setNotes(updatedNotes);
    }
  };

  const handleFilterNotes = (type) => {
    setFilterType(type);
  };

  const updateNoteContent = (content) => {
    if (selectedNote) {
      setNoteContentMap({ ...noteContentMap, [selectedNote.id]: content });
    }
  };

  const filteredNotes = filterType === 'favorites' ? notes.filter((note) => note.favorite) : notes;

  return (
    <div className="App">
      <Toolbar
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
        onToggleFavorite={handleToggleFavorite}
        onFilterNotes={handleFilterNotes}
        selectedNote={selectedNote}
        hasNotes={notes.length > 0}
      />
      <div id="list-header">
        <h2>Notes</h2>
        <div className="btn-group btn-group-justified">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-default ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterNotes('all')}
              disabled={notes.length === 0}
            >
              All notes
            </button>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-default ${filterType === 'favorites' ? 'active' : ''}`}
              onClick={() => handleFilterNotes('favorites')}
              disabled={!notes.some((note) => note.favorite)}
            >
              Favorites
            </button>
          </div>
        </div>
      </div>
      <NoteList
        notes={filteredNotes}
        onNoteSelect={setSelectedNote}
        noteContentMap={noteContentMap}
        setNoteContentMap={setNoteContentMap}
      />
      <div id="note-editor">
        <textarea
          placeholder="New Note"
          className="form-control"
          value={selectedNote ? noteContentMap[selectedNote.id] : ''}
          onChange={(e) => updateNoteContent(e.target.value)}
          disabled={!selectedNote}
        ></textarea>
      </div>
    </div>
  );
}

export default App;