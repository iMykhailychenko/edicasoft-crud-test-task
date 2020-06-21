import { IState } from '../rootState';
import { IUser, IEditUser, IUserWithPosts } from '../../interfaces/interfaces';

export const getUsersSelector = (state: IState): IUser[] => state.users.value;
export const postUserSelector = (state: IState): { loading: boolean; succes: boolean } => state.post;
export const updateUserSelector = (state: IState): IEditUser => state.update.value;
export const getSingleUserSelector = (state: IState): IUserWithPosts => state.user.value;
