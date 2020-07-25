import React from 'react';
import SecureStorage from 'react-native-secure-storage';

import { sleep } from "../utils/sleep";
import { createAction } from "../utils/createAction";

export function useAuth() {

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    loading: false,
                    user: {...action.payload}
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined
                };
            case 'SET_LOADING':
                return {
                    ...state,
                    loading: action.payload,
                };
            case 'default':
                return state;
        }
    }, {
        user: undefined,
        loading: true,
    })

    const auth = React.useMemo(() => ({
        login: async (email, password) => {
            await sleep(2000);

            const user = {
                email: 'anuzbvbmaniac123@gmail.com',
                token: '123456789TOKEN',
            };
            await SecureStorage.setItem('user', JSON.stringify(user));
            dispatch(createAction('SET_USER', user));
        },
        logout: async () => {
            console.log('Log Out');
            await SecureStorage.removeItem('user');
            dispatch(createAction('REMOVE_USER'));
        },
        register: async (email, password) => {
            await sleep(2000);
            console.log('Register', email, password);
        }
    }), []);

    React.useEffect(() => {
        sleep(2000).then(() => {
            SecureStorage.getItem('user').then(user => {
                // user ? dispatch(createAction('SET_USER', JSON.parse(user))) : dispatch(createAction('SET_LOADING', false));
                if (user) {
                    dispatch(createAction('SET_USER', JSON.parse(user)));
                }
                dispatch(createAction('SET_LOADING', false));
            })
        });
    }, []);

    return {auth, state};
}