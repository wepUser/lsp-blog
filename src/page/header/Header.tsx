import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import _ from 'lodash';
import {changeSearchInfo, changeClassType} from "../../reducer/action";

import './header.css';

interface headerProps {
    changeSearchInfo: (id: string) => void,
    changeClassType: (id: string) => void
}

const Header: React.FC<headerProps> = function ({changeSearchInfo, changeClassType}) {
    const [searchInfo, setSearchInfoState] = useState('');

    //input change事件监听
    function changeLocalSearchInfo(e: any) {
        setSearchInfoState(e.target.value);
    }

    //enter 事件监听
    function handleKeyDown(e: any) {
        if (e.keyCode == 13) {
            changeSearchInfo(searchInfo);
            changeClassType('search');
        }
    }


    return (
        <div className="css-header">
            <div className="css-wrap-common">
                <div className="css-sub-common">
                    <Link className="css-logo-wrap" to="/">
                        <span className="css-span-common">logo</span>
                    </Link>
                    <nav className="css-nav">
                        <Link className="css-title" to="/docs">
                            Docs
                        </Link>
                        <Link className="css-title" to="/createDocs">
                            CreateDocs
                        </Link>
                    </nav>
                    <div className="css-form">
                        <span className="css-form-span">
                        <input className="css-input-search" type="search" placeholder="搜索" value={searchInfo}
                               onChange={_.throttle(changeLocalSearchInfo, 500)} onKeyDown={handleKeyDown}/>
                            <pre className="css--pre"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = (state: any) => {
    return {}
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSearchInfo: (data: string) => {
            dispatch(changeSearchInfo(data));
        },
        changeClassType: (id: string) => {
            dispatch(changeClassType(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)