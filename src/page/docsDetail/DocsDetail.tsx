import React, {useState, useEffect} from 'react';
import {Title} from '../../components/title/Title';
import {Container} from '../../components/container/Container';
import Editor from 'for-editor';
import {getDocsDetail} from '../../api/api';

import './docsDetail.css';

const toolbar = {
    h1: false, // h1
    h2: false, // h2
    h3: false, // h3
    h4: false, // h4
    img: false, // 图片
    link: false, // 链接
    code: false, // 代码块
    preview: false, // 预览
    expand: false, // 全屏
    /* v0.0.9 */
    undo: false, // 撤销
    redo: false, // 重做
    save: false, // 保存
    /* v0.2.3 */
    subfield: false, // 单双栏模式
};

export const DocsDetail = function (props: any) {
    const [docs, setDocsData] = useState([]);
    let paramsStr = props.history.location.search;
    let id = paramsStr.substr(paramsStr.indexOf('=') + 1);

    let docss: Array<any> = [];
    //获取文章详情数据
    useEffect(() => {
        let ignore: boolean = false;

        async function fetchData() {
            let data = await getDocsDetail({id});
            if (!ignore && data.length) {
                docss.push(
                    [<Title key="title" titleCon={data[0]}/>,
                        <Editor key='docsEdit' value={data[0]['docs']} preview={true} toolbar={toolbar}
                                style={{border: 'none', boxShadow: 'none', background: '#fff'}}/>
                    ]
                );
                setDocsData(docss);
            }
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <Container>
            <div className="css-article-con">
                <article className="css-article">
                    {docs}
                </article>
            </div>
        </Container>
    )
};
