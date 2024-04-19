export default function Toolbar({ onAddNote, onDeleteNote, onToggleFavorite, selectedNote, hasNotes }) {
    return (
        <div id="toolbar">
            <i 
                className="glyphicon glyphicon-plus" 
                onClick={onAddNote}>
            </i>
            {hasNotes && (
                <>
                    <i 
                        className={`glyphicon glyphicon-star ${selectedNote?.favorite ? 'starred' : ''}`} 
                        onClick={onToggleFavorite}>
                    </i>
                    <i 
                        className="glyphicon glyphicon-remove" 
                        onClick={onDeleteNote}>
                    </i>
                </>
            )}
        </div>
    );
}