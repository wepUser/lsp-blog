import React, {useState, useEffect} from 'react';
import {Title} from '../title/Title';
import {Link} from "react-router-dom";

import './docsList.css';

export interface DocsListProps {
    docsListPropsCon: {
        title: string,
        author: any,
        keywords: string,
        updatetime: string,
        docs: string,
        id: string
    }
}

export const DocsList: React.FC<DocsListProps> = function ({docsListPropsCon: {title, author, keywords, docs, updatetime, id}}) {
    return (
        <div className="css-docs-list-container">
            <Title titleCon={{title, author, keywords, updatetime}}/>
            <p className="css-docs-list-info">
                {docs.substr(0, 200)}
                <Link to={{
                    pathname: "/docsdetail",
                    search: `?id=${id}`
                }} className="css-check-allDocs">{'......查看全文'}</Link>
            </p>
        </div>
    )
};