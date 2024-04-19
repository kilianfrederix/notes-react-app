export default function listHeader(notes, handleFilterNotes, filterType) {
    return (
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
    )
}