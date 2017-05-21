import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { parseString } from 'xml2js';

export function* getArticles() {

  const articles = yield call(() => {
    return new Promise((resolve) => {
      fetch('http://blog.livedoor.jp/nanjstu/index.rdf')
        .then((response) => response.text())
        .then((response) => {
          parseString(response, (err, result) => {
            const items = result['rdf:RDF'].item;

            const res = [];

            items.map((row, i) => {
              const date = new Date(row['dc:date'][0]);
              res.push({
                id: date.getTime(),
                title: row.title[0],
                url: row.link[0],
                date: getYmdhis(date)
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

function getYmdhis(date) {
  const y = date.getFullYear();
  const m = ( '0' + String(date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);

  const h = ('0' + date.getHours()).slice(-2);
  const i = ('0' + date.getMinutes()).slice(-2);
  const s = ('0' + date.getSeconds()).slice(-2);

  return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
}