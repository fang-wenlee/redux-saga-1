import { takeLatest } from "redux-saga/effects";

import { GET_USER } from "../ducks/user";
import { handleGetuser } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetuser);
}
