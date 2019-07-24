import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

export const Header = function ({}) {
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
                    <form className="css-form" action="">
                        <span className="css-form-span">
                        <input className="css-input-search" type="search" placeholder="搜索"/>
                            <pre className="css--pre"/>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )

};