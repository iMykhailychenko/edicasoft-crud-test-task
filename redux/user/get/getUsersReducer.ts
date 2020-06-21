import { combineReducers } from 'redux';
import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_ERROR, DELETE_USER_SUCCESS, ActionTypes } from '../../types';
import { IUser } from '../../../interfaces/interfaces';

const loadingUsersReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case GET_USERS_START:
            return true;

        case GET_USERS_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesUsersReducer = (items: IUser[] = [], action: ActionTypes): IUser[] => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return action.payload;

        case DELETE_USER_SUCCESS:
            return items.filter((user: IUser) => user.id !== action.payload);

        default:
            return items;
    }
};

const errorUsersReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case GET_USERS_START:
        case GET_USERS_SUCCESS:
            return '';

        case GET_USERS_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const getUsersReducer = combineReducers({
    loading: loadingUsersReducer,
    value: succesUsersReducer,
    error: errorUsersReducer,
});
