import {DOCSCLASS, SEARCHINFO,CLASSTYPE} from './actionType';

export const changeDocsClass = (id: string) => {
    return {
        type: DOCSCLASS,
        data: id
    }
};

export const changeSearchInfo = (info: string) => {
    return {
        type: SEARCHINFO,
        data: info
    }
};

export const changeClassType = (info: string) => {
    return {
        type: CLASSTYPE,
        data: info
    }
};