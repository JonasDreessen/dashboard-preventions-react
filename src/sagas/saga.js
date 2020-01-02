import {delay} from 'redux-saga'
import {takeEvery, put} from 'redux-saga/effects'

function* someActionAsync(){
    yield delay(4000);
    yield put({type: 'some_action_async', value: 1})
}
export function* watchAgeUp(){
    yield takeEvery('some_action', someActionAsync)
}