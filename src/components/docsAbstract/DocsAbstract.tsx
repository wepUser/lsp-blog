import React, {useState, useEffect} from 'react';
import {Title} from '../title/Title';
import {Link} from "react-router-dom";
import {subIndexStr} from '../../util';

import './docsAbstract.css';

export interface DocsAbstractProps {
    docsListPropsCon: {
        title: string,
        author: any,
        keywords: string,
        updatetime: string,
        docs: string,
        id: string
    }
}

export const DocsAbstract: React.FC<DocsAbstractProps> = function ({docsListPropsCon: {title, author, keywords, docs, updatetime, id}}) {
    return (
        <div className="css-docs-list-container">
            <Title titleCon={{title, author, keywords, updatetime}}/>
            <p className="css-docs-list-info">
                {`${subIndexStr(docs)}`}
            </p>
            <p className="css-docs-list-check-button">
                <Link className="css-check-allDocs" to={{pathname: "/docsdetail", search: `?id=${id}`}}>{'查看全文'}</Link>
            </p>
        </div>
    )
};