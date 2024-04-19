import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


<div id="list-header">
            <h2>Notes</h2>

            <div class="btn-group btn-group-justified">
                <div class="btn-group">
                    <button type="button" class="btn btn-default active">All notes</button>
                </div>

                <div class="btn-group">
                    <button type="button" class="btn btn-default">Favorites</button>
                </div>
            </div>
        </div>
