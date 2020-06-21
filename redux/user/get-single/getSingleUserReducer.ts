import { combineReducers } from 'redux';
import { GET_SINGLE_START, GET_SINGLE_SUCCESS, GET_SINGLE_ERROR, ActionTypes } from '../../types';
import { IUserWithPosts } from '../../../interfaces/interfaces';
import { initilialUserData } from '../../rootState';

const loadingSingleUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case GET_SINGLE_START:
            return true;

        case GET_SINGLE_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesSingleUserReducer = (items: IUserWithPosts = initilialUserData, action: ActionTypes): IUserWithPosts => {
    switch (action.type) {
        case GET_SINGLE_SUCCESS:
            return action.payload;

        default:
            return items;
    }
};

const errorSingleUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case GET_SINGLE_START:
        case GET_SINGLE_SUCCESS:
            return '';

        case GET_SINGLE_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const getSingleUserReducer = combineReducers({
    loading: loadingSingleUserReducer,
    value: succesSingleUserReducer,
    error: errorSingleUserReducer,
});
