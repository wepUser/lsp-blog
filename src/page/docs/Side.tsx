import React, {useState, useEffect} from 'react';
import Classify from '../../components/classify/Classify';
import {Arrow} from '../../components/arrow';
import './side.css';

//侧边栏
export const Side = function ({}) {
    return (
        <div>
            <div className="css-side-wrap" style={{transition: 'opacity 0.5s ease 0s'}}>
                <div className="css-side-sub"
                     style={{transform: 'translate(0px, 40px)', transition: 'transform 0.5s ease 0s'}}>
                    <nav className="css-side-nav">
                        <div>
                            <button className="css-button">
                                <div className="css-button-con">
                                    文章
                                    <Arrow/>
                                </div>
                            </button>
                            <Classify/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
};