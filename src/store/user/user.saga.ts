// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {put, takeEvery, all, call, takeLatest} from 'redux-saga/effects';
import { userActions } from './user.slice';

// eslint-disable-next-line require-yield
export function* login(props: any){
    yield put(userActions.setData(props.payload))
}

function* watchLogin(){
    yield takeEvery('user/login', login)
}

export default function* userSaga(){
    yield all([
        watchLogin(),
    ])
}