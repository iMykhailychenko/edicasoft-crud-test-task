import { IUserWithPosts } from '../../../interfaces/interfaces';
import { GET_SINGLE_START, GET_SINGLE_SUCCESS, GET_SINGLE_ERROR, ActionTypes } from '../../types';

export const getSingleUserStart = (): ActionTypes => ({
    type: GET_SINGLE_START,
    payload: true,
});

export const getSingleUserSuccess = (posts: IUserWithPosts): ActionTypes => ({
    type: GET_SINGLE_SUCCESS,
    payload: posts,
});

export const getSingleUserError = (error: string): ActionTypes => ({
    type: GET_SINGLE_ERROR,
    payload: error,
});