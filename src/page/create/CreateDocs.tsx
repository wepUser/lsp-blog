import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import './createDocs.css';
import {Container} from '../../components/container/Container';
import Editor from 'for-editor';
import {saveDocs} from '../../api/api';

const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: false, // 预览
    expand: false, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: false, // 单双栏模式
};

export const CreateDocs = function () {
    const [editValue, setEditState] = useState('');
    const [titleValue, setTitleState] = useState('');
    const [keywordsValue, setKeyWordsState] = useState('');

    // //editValue-change事件监听
    function editChange(v: string) {
        setEditState(v);
    }

    //titleValue-change事件监听
    function titleChange(event: any) {
        setTitleState(event.target.value);
    }

    //keywordsValue
    function keywordsChange(event: any) {
        setKeyWordsState(event.target.value);
    }

    //save事件监听
    function handleSave() {
        if (editValue && titleValue && keywordsValue) {
            saveDocs({docs: editValue, title: titleValue, keywords: keywordsValue}).then(info => {
                console.log(info);
            });
        } else {
            alert('有字段为空');
        }
    }

    return (
        <Container>
            <div className="css-create-docs">
                <div className="css-create-label-con">
                    <label htmlFor="title" className="css-create-label">title:</label>
                    <input type="text" className="css-create-input" placeholder=" 请输入文章标题"
                           onChange={_.throttle(titleChange, 500)}
                           value={titleValue}/>
                </div>
                <div className="css-create-label-con">
                    <label htmlFor="keywords" className="css-create-label">keywords:</label>
                    <input type="text" className="css-create-input" placeholder=" 请添加文章关键词"
                           onChange={_.throttle(keywordsChange, 500)}
                           value={keywordsValue}/>
                </div>
                <h4 className="css-create-detailCon">正文</h4>
                <Editor value={editValue} height={800} onChange={_.throttle(editChange, 500)} onSave={handleSave} toolbar={toolbar}/>
            </div>
        </Container>
    );
};