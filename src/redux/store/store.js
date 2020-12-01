const { createStore } = require("redux");
const { noteReducer } = require("../reducers/noteReducer");
export const store = createStore(noteReducer);