import { PARAGRAPH_NUMBER, PARAGRAPH_STRING, CLEAR_PARAGRAPHS } from '../actions/types';

const INITIAL_STATE = {
    number: 7,
    stringList: [],
    clipText: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PARAGRAPH_NUMBER:
            return { ...state, number: action.payload.number };
        
        case PARAGRAPH_STRING:
            return { ...state, stringList: [...action.payload.stringList], clipText: action.payload.clipText };

        case CLEAR_PARAGRAPHS:
            return {...state, stringList: [], clipText: '' };

        default:
            return state;
    }
}