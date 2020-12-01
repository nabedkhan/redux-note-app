import { ADD_NEW_NOTE, DELETE_NOTE, GET_NOTE, UPDATE_NOTE } from "../actions/InputAction";

const initialState = {
    notes: [
        {
            id: 1,
            title: "New Note 1",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem saepe sequi explicabo impedit nemo molestiae eaque nostrum earum suscipit."
        },
        {
            id: 2,
            title: "New Note 2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem saepe sequi explicabo impedit nemo molestiae eaque nostrum earum suscipit."
        },
        {
            id: 3,
            title: "New Note 3",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem saepe sequi explicabo impedit nemo molestiae eaque nostrum earum suscipit."
        }
    ],
    getNote: null,
}

export function noteReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_NOTE:
            let newNote;
            state.notes.length > 0 ? (
                newNote = { ...action.note, id: state.notes[state.notes.length - 1].id + 1 }
            ) : (newNote = { ...action.note, id: 1 });
            return {
                ...state,
                notes: [...state.notes, newNote]
            }

        case GET_NOTE:
            return {
                ...state,
                getNote: state.notes.find(note => note.id === action.id)
            }

        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.note.id ? action.note : note)
            }

        case DELETE_NOTE:
            return { ...state, notes: state.notes.filter(note => note.id !== action.id) }
        default:
            return state;
    }
}