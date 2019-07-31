import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import {saveCommentDocs, getCommentDocs} from '../../api/api';

import './comment.css';

interface commentProps {
    id: string
}

export const Comment: React.FC<commentProps> = function ({id}) {
    const [commentV, setCommentState] = useState('');
    const [commentVs, setCommentsState] = useState([]);

    function handleCommentChange(event: any) {
        setCommentState(event.target.value);
    }

    function getCommentFunc() {
        let comments: Array<any> = [];
        getCommentDocs({docsId: id}).then(data => {
            if (data.length) {
                for (let i = 0; i < data.length; i++) {
                    comments.push(<div className="css-comment-list-comment" key={'comment' + i}>
                        <p>{data[i]['author'] || '匿名'}说：</p>
                        <p style={{paddingLeft:10}}>{data[i].comment}</p>
                        <div className="css-comment-button">
                            <span>{data[i]['updatetime'].substr(0, 10)}</span>
                            {/*<button className="css-oppose-button">反对</button>*/}
                            {/*<button className="css-like-button">点赞</button>*/}
                        </div>
                    </div>);
                }
                setCommentsState(comments);
            }
        })
    }

    useEffect(() => {
        getCommentFunc();
    }, []);


    function handleCommentCommit() {
        if (commentV) {
            saveCommentDocs({docsId: id, comment: commentV}).then(res => {
                if (res.success) {
                    getCommentFunc();
                }
            })
        }
    }


    return (
        <div className="css-comment">
            <h3 className="css-comment-title">评论</h3>
            <div className="css-comment-area">
                <textarea className="css-comment-text" name="comment" placeholder="请输入内容" value={commentV}
                          onChange={_.throttle(handleCommentChange, 500)}/>
                <button className="css-comment-publish-button" onClick={_.throttle(handleCommentCommit, 500)}>发表
                </button>
            </div>
            <div className="css-comment-list">
                {commentVs}
            </div>
        </div>
    )
};
