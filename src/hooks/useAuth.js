import React from 'react';
import { sleep } from "../utils/sleep";
import { createAction } from "../utils/createAction";

export function useAuth() {

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: {...action.payload}
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined
                };
            case 'default':
                return state;
        }
    }, {
        user: undefined,
    })

    const auth = React.useMemo(() => ({
        login: async (email, password) => {
            await sleep(2000);

            const user = {
                email: 'anuzbvbmaniac123@gmail.com',
                token: '123456789TOKEN',
            };
            dispatch(createAction('SET_USER', user));
        },
        logout: async () => {
            console.log('Log Out');
            dispatch(createAction('REMOVE_USER'));
        },
        register: async (email, password) => {
            await sleep(2000);
            console.log('Register', email, password);
        }
    }), []);

    return {auth, state};
}