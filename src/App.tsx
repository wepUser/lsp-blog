import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer/reduce';
import {composeWithDevTools} from 'redux-devtools-extension';

import Header from './page/header/Header';
import {Footer} from './page/footer/Footer';
import {Home} from './page/home/Home';
import Docs from './page/docs/Docs';
import {CreateDocs} from './page/create/CreateDocs';
import {DocsDetail} from './page/docsDetail/DocsDetail';

import  './asset/css/app.css';

const store = createStore(
    reducer,
    composeWithDevTools()
);


export const App = function () {
    return (
        <Provider store={store}>
            <Router>
                <div className='app'>
                    <Header/>
                    <Route exact path="/" component={Docs}/>
                    <Route exact path="/docs" component={Docs}/>
                    <Route exact path="/createDocs" component={CreateDocs}/>
                    <Route exact path="/docsdetail" component={DocsDetail}/>
                    {/*<Footer/>*/}
                </div>
            </Router>
        </Provider>
    )
};