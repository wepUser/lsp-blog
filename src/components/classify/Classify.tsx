import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {changeDocsClass, changeClassType} from '../../reducer/action';
import './classfy.css';

interface ClassifyProps {
    docsClass: string,
    onChangeClass: (id: string) => void,
    changeClassType: (id: string) => void
}

//文章分类
const Classify: React.FC<ClassifyProps> = function ({docsClass, onChangeClass,changeClassType}) {
    const classifyValues = ['all', 'js', 'css', 'html', 'react', 'echarts', 'd3', 'three'];
    const [currentClass, setClassState] = useState(docsClass);
    const classActive = function (key: string): void {
        setClassState(key);
        onChangeClass(key);
        changeClassType('docs');
    };
    return (
        <ul className="css-list">
            {classifyValues.map(name => {
                return [<li key={name} className="css-list-li" onClick={() => classActive(name)}>
                    <span className="css-list-a"
                          style={{fontSize: currentClass === name ? '20px' : '14px'}}>{name}</span>
                </li>]
            })}
        </ul>
    )
};

const mapStateToProps = (state: any) => {
    return {
        docsClass: state.docsClass
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeClass: (id: string) => {
            dispatch(changeDocsClass(id))
        },
        changeClassType: (id: string) => {
            dispatch(changeClassType(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Classify)