export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTE = 'GET_NOTE';

export const addNewNote = (note) => {
    return {
        type: ADD_NEW_NOTE,
        note
    }
}
export const getNote = (id) => {
    return {
        type: GET_NOTE,
        id
    }
}
export const updateNote = (note) => {
    return {
        type: UPDATE_NOTE,
        note
    }
}
export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}