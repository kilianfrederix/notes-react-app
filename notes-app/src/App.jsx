
import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import ListHeader from './components/ListHeader';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [noteContentMap, setNoteContentMap] = useState({});

  const handleAddNote = () => {
    const newNote = { id: crypto.randomUUID(), content: '', favorite: false };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setNoteContentMap({ ...noteContentMap, [newNote.id]: '' });
  };

  const handleDeleteNote = () => {
    if (selectedNote && selectedNote.id) {
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

      setSelectedNote({ ...selectedNote, favorite: !selectedNote.favorite });
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
    <div id="app">
      <Toolbar
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
        onToggleFavorite={handleToggleFavorite}
        onFilterNotes={handleFilterNotes}
        selectedNote={selectedNote}
        hasNotes={notes.length > 0}
      />
      <div id='notes-list'>
        <ListHeader
          note={notes}
          filterType={filterType}
          onFilterNotes={handleFilterNotes}
        />

        <NoteList
          notes={filteredNotes}
          selectedNote={selectedNote}
          onNoteSelect={setSelectedNote}
          noteContentMap={noteContentMap}
          setNoteContentMap={setNoteContentMap}
        />
      </div>

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