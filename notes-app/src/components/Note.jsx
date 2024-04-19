export default function Note({ note, content, onNoteSelect }) {
    return (
        <button
            type="button"
            className={`list-group-item ${note === onNoteSelect ? 'active' : ''}`}
            onClick={onNoteSelect}
        >
            <h4 className="list-group-item-heading">{content || 'Nieuwe notitie'}</h4>
        </button>
    )
}