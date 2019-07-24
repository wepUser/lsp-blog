import React from 'react';
import './home.css';

export const Home = function ({}) {
    return (
        <div className="css-home css-home-sub">
            <div className="css-home-wrap">
                <header className="css-header-wrap">
                    <div className="css-header-sub-common">
                        <div className="css-header-pos">
                            <div className="css-wrap-common">
                                <h1 className="css-header-h3">blog</h1>
                                <p className="css-header-p">a single blog</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="css-wrap-common">
                    <div className="css-section-wrap">
                        <section className="css-section">
                            <div className="css-section-subwrap">
                                <div className="css-section-wrap-common">
                                    <h3 className="css-section-common-h3">声明式</h3>
                                    <div>
                                        <p>
                                            React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。
                                        </p>
                                        <p>
                                            以声明式编写 UI，可以让你的代码更加可靠，且方便调试。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
};