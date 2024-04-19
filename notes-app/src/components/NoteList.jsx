import Note from "./Note";

export default function NoteList({ notes, onNoteSelect, noteContentMap, setNoteContentMap, selectedNote }) {
    return (
        <div className="list-group">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    content={noteContentMap[note.id] || 'nieuwe noie'}
                    onNoteSelect={() => onNoteSelect(note)}
                    isActive={selectedNote && note.id === selectedNote.id}
                    setNoteContent={(content) => setNoteContentMap({ ...noteContentMap, [note.id]: content })}
                />
            ))}
        </div>
    );
}
