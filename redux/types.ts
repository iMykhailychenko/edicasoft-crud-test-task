import { IUser, IEditUser, IUserWithPosts } from '../interfaces/interfaces';

// GET all users
export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
// POST user
export const POST_USER_START = 'POST_USER_START';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_ERROR = 'POST_USER_ERROR';
// UPDATE user
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
// DELETE user
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';
// GET single user
export const GET_SINGLE_START = 'GET_SINGLE_START';
export const GET_SINGLE_SUCCESS = 'GET_SINGLE_SUCCESS';
export const GET_SINGLE_ERROR = 'GET_SINGLE_ERROR';

// GET all users - Action types
interface GetUsersStart {
    type: typeof GET_USERS_START;
    payload: boolean;
}
interface GetUsersSuccess {
    type: typeof GET_USERS_SUCCESS;
    payload: IUser[];
}
interface GetUsersError {
    type: typeof GET_USERS_ERROR;
    payload: string;
}

// POST user - Action types
interface PostUserStart {
    type: typeof POST_USER_START;
    payload: boolean;
}
interface PostUserSuccess {
    type: typeof POST_USER_SUCCESS;
    payload: boolean;
}
interface PostUserError {
    type: typeof POST_USER_ERROR;
    payload: string;
}

// UPDATE user - Action types
interface UpdateUserStart {
    type: typeof UPDATE_USER_START;
    payload: boolean;
}
interface UpdateUserSuccess {
    type: typeof UPDATE_USER_SUCCESS;
    payload: IEditUser;
}
interface UpdateUserError {
    type: typeof UPDATE_USER_ERROR;
    payload: string;
}

// DELETE user - Action types
interface DeleteUserStart {
    type: typeof DELETE_USER_START;
    payload: boolean;
}
interface DeleteUserSuccess {
    type: typeof DELETE_USER_SUCCESS;
    payload: number;
}
interface DeleteUserError {
    type: typeof DELETE_USER_ERROR;
    payload: string;
}

// GET single user - Action types
interface GetSingleUserStart {
    type: typeof GET_SINGLE_START;
    payload: boolean;
}
interface GetSingleUserSuccess {
    type: typeof GET_SINGLE_SUCCESS;
    payload: IUserWithPosts;
}
interface GetSingleUserError {
    type: typeof GET_SINGLE_ERROR;
    payload: string;
}

export type ActionTypes =
    | GetUsersStart
    | GetUsersSuccess
    | GetUsersError
    | PostUserStart
    | PostUserSuccess
    | PostUserError
    | UpdateUserStart
    | UpdateUserSuccess
    | UpdateUserError
    | DeleteUserStart
    | DeleteUserSuccess
    | DeleteUserError
    | GetSingleUserStart
    | GetSingleUserSuccess
    | GetSingleUserError;

export interface Dispatch<S> {
    <A extends ActionTypes>(action: A): A;
}
