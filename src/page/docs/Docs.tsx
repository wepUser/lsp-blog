import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {getDocs, searchDocs} from '../../api/api';
import './docs.css';
import {Side} from '../side/Side';
import {Container} from '../../components/container/Container';
import {DocsAbstract} from '../../components/docsAbstract/DocsAbstract';

interface DocsProps {
    docsClass: string,
    searchInfo: string,
    classType: string
}

const Docs: React.FC<DocsProps> = function ({docsClass, searchInfo, classType}) {
    const [docs, setDocsData] = useState([]);
    let docss: Array<any> = [];
    //获取文章列表数据
    useEffect(() => {
        let ignore: boolean = false;

        async function fetchData() {
            let data = [];
            if (classType === 'docs') {
                data = await getDocs({docsClass});
            } else if (classType === 'search') {
                data = await searchDocs({searchInfo});
            }

            if (!ignore && data.length) {
                for (let i = 0; i < data.length; i++) {
                    docss.push(<DocsAbstract key={i + 'list'} docsListPropsCon={data[i]}/>
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
    }, [classType, docsClass, searchInfo]);

    return (
        <Container>
            <div className="css-docs-con">
                {docs}
            </div>
            <div className="css-side">
                <Side/>
            </div>
        </Container>
    )

};

const mapStateToProps = (state: any) => {
    return {
        docsClass: state.docsClass,
        searchInfo: state.searchInfo,
        classType: state.classType
    }
};

export default connect(mapStateToProps)(Docs)