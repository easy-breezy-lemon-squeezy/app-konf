import React from 'react';
import ReactDOM from 'react-dom';
import AppMap from './AppMap';
import './index.css';
import AppForm from "./AppForm";
import { store } from './redux/redux-store'
import { Provider } from 'react-redux'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="flexParent">
                <div className="flexChild">
                    <AppMap />
                </div>
                <div className="flexChild" style={{alignItems:"start", paddingTop:"80px", justifyContent:"center"}}>
                    <AppForm />
                </div>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

