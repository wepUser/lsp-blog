import React from 'react';
import './container.css';

export interface ContainerProps {
    children: any
}
export const Container: React.FC<ContainerProps> = ({children}: ContainerProps) => {
    return (
        <div className="css-docs css-docs-second">
            <div className="css-wrap css-wrap-second">
                <div className="css-subWrap">
                    <div className="css-wrap-common">
                        <div className="css-subWrap-h">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};