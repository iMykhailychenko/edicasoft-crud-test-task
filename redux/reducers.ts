import { combineReducers } from 'redux';
import { getUsersReducer } from './user/get/getUsersReducer';
import { postUserReducer } from './user/post/postUserReducer';
import { updateUserReducer } from './user/update/updateUserReducer';
import { getSingleUserReducer } from './user/get-single/getSingleUserReducer';

const rootReducer = combineReducers({
    users: getUsersReducer,
    post: postUserReducer,
    update: updateUserReducer,
    user: getSingleUserReducer,
});

export default rootReducer;
