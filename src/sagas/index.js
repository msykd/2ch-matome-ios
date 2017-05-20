import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { parseString } from 'xml2js';

export function* getArticles() {

  const articles = yield call(() => {
    return new Promise((resolve) => {
      fetch('http://blog.livedoor.jp/nwknews/index.rdf')
        .then((response) => response.text())
        .then((response) => {
          parseString(response, (err, result) => {
            const items = result['rdf:RDF'].item;

            const res = [];

            items.map((row, i) => {
              res.push({
                id: i,
                title: row.title[0],
                url: row.link[0]
              });
            });

            resolve(res);
          });
        })
        .catch((error) => console.error(error));
    });
  });

  yield put(actions.receiveArticles(articles));
}

export default function* rootSaga() {
  yield takeEvery('GET_ARTICLES', getArticles);
}