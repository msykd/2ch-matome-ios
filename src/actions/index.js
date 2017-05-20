import {createAction} from 'redux-actions';

export const getArticles = createAction('GET_ARTICLES');

export const receiveArticles = createAction('RECEIVE_ARTICLES', (articles) => articles);