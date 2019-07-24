import React from 'react';

export const ThemeContext = React.createContext({
    kind: 'all',
    classActive: (kind:string) => {
    }
});