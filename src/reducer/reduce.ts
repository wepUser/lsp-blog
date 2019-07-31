import {DOCSCLASS, SEARCHINFO, CLASSTYPE} from './actionType';


interface stateProps {
    docsClass: string,
    searchInfo: string,
    classType: string
}

let initialState = {
    docsClass: 'all',
    searchInfo: '',
    classType: 'docs'
};


export function reducer(state: stateProps = initialState, action: any) {
    switch (action.type) {
        case DOCSCLASS:
            return {...state, docsClass: action.data};
        case SEARCHINFO:
            return {...state, searchInfo: action.data};
        case CLASSTYPE:
            return {...state, classType: action.data};
        default:
            return state
    }
}