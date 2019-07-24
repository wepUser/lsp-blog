import {DOCSCLASS} from './actionType';

export const changeDocsClass = (id: string) => {
    return {
        type: DOCSCLASS,
        data: id
    }
};