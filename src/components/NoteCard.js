import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, getNote } from '../redux/actions/InputAction';

const NoteCard = ({ note, deleteNote, getNote }) => {
    return (
        <div className="col-md-4">
            <div className="jumbotron p-4">
                <h4 className="text-info">{note.title}</h4>
                <p className="lead">{note.description}</p>
                <hr className="my-4" />
                <button
                    className="btn btn-warning mr-3"
                    onClick={() => getNote(note.id)}
                >Update
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteNote(note.id)}
                >Delete
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    deleteNote: deleteNote,
    getNote: getNote
}

export default connect(null, mapDispatchToProps)(NoteCard);