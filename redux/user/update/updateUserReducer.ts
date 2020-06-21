import { combineReducers } from 'redux';
import { UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, ActionTypes } from '../../types';
import { IEditUser } from '../../../interfaces/interfaces';
import { initialValues } from '../../../conponents/form/utils';

const loadingUpdateUserReducer = (loading: boolean = false, action: ActionTypes): boolean => {
    switch (action.type) {
        case UPDATE_USER_START:
            return action.payload;

        case UPDATE_USER_SUCCESS:
            return false;

        default:
            return loading;
    }
};

const succesUpdateUserReducer = (succes: IEditUser = initialValues, action: ActionTypes): IEditUser => {
    switch (action.type) {
        case UPDATE_USER_SUCCESS:
            return action.payload;

        default:
            return succes;
    }
};

const errorUpdateUserReducer = (error: string = '', action: ActionTypes): string => {
    switch (action.type) {
        case UPDATE_USER_START:
        case UPDATE_USER_SUCCESS:
            return '';

        case UPDATE_USER_ERROR:
            return action.payload;

        default:
            return error;
    }
};

export const updateUserReducer = combineReducers({
    loading: loadingUpdateUserReducer,
    value: succesUpdateUserReducer,
    error: errorUpdateUserReducer,
});
