import React from 'react';
import { useSelector } from 'react-redux';
import NoteCard from './NoteCard';

const Notes = () => {
    const notes = useSelector(state => state.notes);
    return (
        <div className="notes-area">
            <div className="container">
                <div className="row">
                    {
                        notes.map(note => <NoteCard key={note.id} note={note} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Notes;