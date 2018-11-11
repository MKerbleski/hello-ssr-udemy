// import axios from 'axios';
//use axios for other api calls that is not my server

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = ()  => async (dispatch, getState, api) => {
    const res = await api.get('/users/')

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};