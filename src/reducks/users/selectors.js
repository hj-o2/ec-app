import { createStore } from "redux";
import { createSelector } from "reselect";

const useSelector = (state) => state.users;

export const getUserId = createSelector(
    [useSelector],
    state => state.uid
);

export const getUserName = createSelector(
    [useSelector],
    state => state.username
);