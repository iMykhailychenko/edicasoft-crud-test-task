import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { IState } from './rootState';

let store;

const initStore = (initialState: IState): Store => {
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

export const initializeStore = (preloadedState: IState): Store => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = null;
    }

    // For SSR always create a new store
    if (typeof window === 'undefined') return _store;

    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export const useStore = (initialState: IState): Store => {
    return useMemo(() => initializeStore(initialState), [initialState]);
}
