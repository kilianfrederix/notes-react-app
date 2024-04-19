import Note from "./Note";

export default function NoteList({ notes, onNoteSelect, noteContentMap, setNoteContentMap }) {
    return(
        <div className="list-group">
            {notes.map((note) => (
                <Note
                key={note.id}
                note={note}
                content={noteContentMap[note.id]}
                onNoteSelect={() => onNoteSelect(note)}
                setNoteContent={(content) => setNoteContentMap({ ...noteContentMap, [note.id]: content })}
                />
            ))}
    </div>
    );
}