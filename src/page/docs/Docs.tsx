import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {getDocs} from '../../api/api';
import './docs.css';
import {Side} from './Side';
import {Container} from '../../components/container/Container';
import {DocsList} from '../../components/docsList/DocsList';

interface DocsProps {
    docsClass: string
}

const Docs: React.FC<DocsProps> = function ({docsClass}) {
    const [docs, setDocsData] = useState([]);

    let docss: Array<any> = [];
    //获取文章列表数据
    useEffect(() => {
        let ignore: boolean = false;

        async function fetchData() {
            let data = await getDocs({docsClass});
            if (!ignore && data.length) {
                for (let i = 0; i < data.length; i++) {
                    docss.push(<DocsList key={i + 'list'} docsListPropsCon={data[i]}/>
                    );
                }
                setDocsData(docss);
            } else {
                setDocsData([]);
            }
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, [docsClass]);

    return (
        <Container>
            <div className="css-article-con">
                <article className="css-article">
                    {docs}
                </article>
            </div>
            <div className="css-side">
                <Side/>
            </div>
        </Container>
    )

};

const mapStateToProps = (state: any) => {
    return {
        docsClass: state.docsClass
    }
};

export default connect(mapStateToProps)(Docs)