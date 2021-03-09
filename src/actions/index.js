import { PARAGRAPH_NUMBER, PARAGRAPH_STRING, CLEAR_PARAGRAPHS, CLIPBOARD_TEXT } from './types';
//need to create a paragraph generation function

import returnIpsum from '../returnIpsum';
import stringBuilder from '../stringBuilder';


export const paragraphNumber = (num) => ({
    type: PARAGRAPH_NUMBER,
    payload: {
        number: num
    }
});

export const paragraphString = (list) => ({
    type: PARAGRAPH_STRING,
    payload: {
        //stringList: ['thisis your list', 'another Line', 'another Line', 'another Line', 'another Line']
        stringList: [...list],
        clipText: stringBuilder(list)
        /// function that resolves string based on number should go here
    }
});

export const clearString = () => ({
    type: CLEAR_PARAGRAPHS,
});