import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addNewNote, updateNote } from '../redux/actions/InputAction';

const FormInput = ({ addNewNote, getNote, updateNote }) => {
    const [inputData, setInputData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (event) => {
        const newData = { ...inputData };
        newData[event.target.name] = event.target.value;
        setInputData(newData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (getNote !== null) {
            updateNote(inputData);
        } else {
            addNewNote(inputData)
        }
    }

    useEffect(() => {
        if (getNote !== null) {
            setInputData(getNote);
        }
    }, [getNote]);

    return (
        <div className="form-area jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <h2 className="text-info mb-4">Create a New Note</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="title"
                                type="text"
                                className="form-control mb-2"
                                placeholder="Write Note Title...."
                                onChange={handleChange}
                                value={inputData && inputData.title}
                                required
                            />
                            <textarea
                                name="description"
                                type="text"
                                className="form-control mb-2"
                                placeholder="Write Note Description...."
                                onChange={handleChange}
                                value={inputData && inputData.description}
                                required
                            />
                            <button type="submit" className={`btn ${getNote ? 'btn-warning' : 'btn-info'} btn-info`}>{
                                getNote !== null ? 'Update Note' : 'Create New Note'
                            }</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        getNote: state.getNote
    }
}

const mapDispatchToProps = {
    addNewNote: addNewNote,
    updateNote: updateNote
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);