import {DOCSCLASS} from './actionType';


interface stateProps {
    docsClass: string
}

let initialState = {
    docsClass: 'all'
};


export function reducer(state: stateProps = initialState, action: any) {
    switch (action.type) {
        case 'DOCSCLASS':
            return {...state, docsClass: action.data};
        default:
            return state
    }
}