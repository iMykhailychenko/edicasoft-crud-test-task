import * as Yup from 'yup';
import axios from 'axios';
// utils
import { Dispatch, ActionTypes } from '../../redux/types';
import { IEditUser } from '../../interfaces/interfaces';
import { postUserStart, postUserSuccess, postUserError } from '../../redux/user/post/postUserActions';
import { updateUserStart, updateUserSuccess, updateUserError } from '../../redux/user/update/updateUserActions';

export interface Errors {
    name?: string;
    email?: string;
}

export const initialValues: IEditUser = {
    name: '',
    email: '',
    city: '',
    street: '',
    suite: '',
};

export const userSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().min(2, 'Too Short!').email('Invalid email').required('Required'),
});

export const createUser = (dispatch: Dispatch<ActionTypes>, values: IEditUser): void => {
    // show preloader
    dispatch(postUserStart());

    axios.post('/users', values).then((response) => {
        response.status === 201 ? dispatch(postUserSuccess(true)) : dispatch(postUserError('Network response error'));

        // hide alert about success operation
        setTimeout(() => {
            dispatch(postUserSuccess(false));
        }, 3000);
    });
};

export const updateUser = (dispatch: Dispatch<ActionTypes>, values: IEditUser, id: string): void => {
    // show preloader
    dispatch(postUserStart());
    dispatch(updateUserStart());

    axios.put('/users/' + id, values).then((response) => {

        if (response.status === 200) {
            dispatch(updateUserSuccess(response.data));
            dispatch(postUserSuccess(true));
        } else {
            dispatch(updateUserError('Network response error'));
        }

        // hide alert about success operation
        setTimeout(() => {
            dispatch(postUserSuccess(false));
        }, 3000);
    });
};
