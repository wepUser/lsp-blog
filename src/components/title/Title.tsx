import React, {useState, useEffect} from 'react';
import './title.css';


export interface titleProps {
    titleCon: {
        title: string,
        author: any,
        keywords: string,
        updatetime: string
    }
}

export const Title: React.FC<titleProps> = function ({titleCon: {title, author, keywords, updatetime}}) {
    return (
        <div className="css-docs-title-container">
            <h1 className="css-docs-title">{title}</h1>
            <div className="css-docs-info">
                <span>作者：{'author'}；</span>
                <span>关键词：{keywords}；</span>
                <span>日期：{updatetime.substr(0, 10)}</span>
            </div>
        </div>
    )
};