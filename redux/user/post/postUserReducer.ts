import { combineReducers } from 'redux';
import { POST_USER_START, POST_USER_SUCCESS, POST_USER_ERROR, UPDATE_USER_SUCCESS, ActionTypes } from '../../types';

const loadingPostUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case POST_USER_START:
            return action.payload;

        case POST_USER_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesPostUserReducer = (succes: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case POST_USER_START:
            return false;

        case POST_USER_SUCCESS:
            return action.payload;

        default:
            return succes;
    }
};

const errorPostUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case POST_USER_START:
        case POST_USER_SUCCESS:
            return '';

        case POST_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};


export const postUserReducer = combineReducers({
    loading: loadingPostUserReducer,
    succes: succesPostUserReducer,
    error: errorPostUserReducer,
});