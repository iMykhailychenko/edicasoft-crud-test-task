import { UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, ActionTypes } from '../../types';
import { IEditUser } from '../../../interfaces/interfaces';

export const updateUserStart = (): ActionTypes => ({
    type: UPDATE_USER_START,
    payload: true,
});

export const updateUserSuccess = (success: IEditUser): ActionTypes => ({
    type: UPDATE_USER_SUCCESS,
    payload: success,
});

export const updateUserError = (error: string): ActionTypes => ({
    type: UPDATE_USER_ERROR,
    payload: error,
});
