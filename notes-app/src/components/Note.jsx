export default function Note({ note, content, onNoteSelect, isActive }) {
    const shortenContent = (text, maxlength) => {
        if (text.length > maxlength) {
            return text.substring(0, maxlength) + '...';
        }
        return text
    }
    return (
        <button
            type="button"
            className={`list-group-item ${isActive ? 'active' : ''}`}
            onClick={onNoteSelect}
        >
            <h4 className="list-group-item-heading">{shortenContent(content || 'Nieuwe notitie', 30)}</h4>
        </button>
    );
}
