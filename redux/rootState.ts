import { IUser, IEditUser, IUserWithPosts } from '../interfaces/interfaces';
import { initialValues } from '../conponents/form/utils';

export interface IState {
    users: {
        loading: boolean;
        value: IUser[];
        error: string;
    };
    post: {
        loading: boolean;
        succes: boolean;
        error: string;
    };
    update: {
        loading: boolean;
        value: IEditUser;
        error: string;
    };
    user: {
        loading: boolean;
        value: IUserWithPosts;
        error: string;
    };
}

// single user data
export const initilialUserData: IUserWithPosts = {
    address: {
        city: '',
        geo: {
            lat: '',
            lng: '',
        },
        street: '',
        suite: '',
        zipcode: '',
    },
    company: { bs: '', catchPhrase: '', name: '' },
    email: '',
    id: 0,
    name: '',
    username: '',
    website: '',
    posts: [],
    phone: '',
};

// root state
export const initialState: IState = {
    users: {
        loading: false,
        value: [],
        error: '',
    },
    post: {
        loading: false,
        succes: false,
        error: '',
    },
    update: {
        loading: false,
        value: initialValues,
        error: '',
    },
    user: {
        loading: false,
        value: initilialUserData,
        error: '',
    },
};
