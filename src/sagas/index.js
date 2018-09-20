import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

function axios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000);
    })
}


// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  const response = yield call(axios);
  yield put({ type: 'ADD_NUM', num: response })//dispatch
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('ASYNC_ADD_NUM', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    // helloSaga(),
    watchIncrementAsync()
  ])
}