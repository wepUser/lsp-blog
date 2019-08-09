import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import './createDocs.css';
import {Container} from '../../components/container/Container';
import Editor from 'for-editor';
import {saveDocs, updateDocs} from '../../api/api';
import api from '../../components/message/index';

const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: false, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: false, // 单双栏模式
};
//编辑数据的数据类型声明
interface stateDataProps {
    docs: string,
    title: string,
    keywords: string,
    id: string
}


export const CreateDocs = function (props: any) {
    let stateData: stateDataProps = {
        docs: '',
        title: '',
        keywords: '',
        id: ''
    };
    //编辑数据的数据来源
    if (props.location.state) {
        stateData = props.location.state.data;
    }

    const [editValue, setEditState] = useState(stateData.docs || '');
    const [titleValue, setTitleState] = useState(stateData.title || '');
    const [keywordsValue, setKeyWordsState] = useState(stateData.keywords || '');
    const [isCreateId, setCreateIdState] = useState(0);

    //editValue-change事件监听
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
            if (stateData.id || isCreateId) {
                updateDocs({
                    docs: editValue,
                    title: titleValue,
                    keywords: keywordsValue,
                    id: stateData.id || isCreateId
                }).then(res => {
                    if (res.success) {
                        api.success('修改成功');
                    }
                })
            } else {
                saveDocs({docs: editValue, title: titleValue, keywords: keywordsValue}).then(res => {
                    if (res.success) {
                        setCreateIdState(res.id);
                        api.success('创建成功');
                    }
                });
            }

        } else {
            api.info('有字段为空');
        }
    }

    return (
        <Container>
            <div className="css-create-docs">
                <div className="css-create-label-con">
                    <label htmlFor="title" className="css-create-label">title:</label>
                    <input type="text" className="css-create-input" placeholder=" 请输入文章标题"
                           onChange={_.throttle(titleChange, 200)}
                           value={titleValue}/>
                </div>
                <div className="css-create-label-con">
                    <label htmlFor="keywords" className="css-create-label">keywords:</label>
                    <input type="text" className="css-create-input" placeholder=" 请添加文章关键词"
                           onChange={_.throttle(keywordsChange, 200)}
                           value={keywordsValue}/>
                </div>
                <h4 className="css-create-detailCon">正文</h4>
                <Editor value={editValue} height={800} onChange={_.throttle(editChange, 200)} onSave={handleSave}
                        toolbar={toolbar}/>
            </div>
        </Container>
    );
};