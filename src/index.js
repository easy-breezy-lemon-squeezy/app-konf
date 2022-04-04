import React from 'react';
import ReactDOM from 'react-dom';
import AppMap from './AppMap';
import './index.css';
import AppForm from "./AppForm";
ReactDOM.render(
    <React.StrictMode>
        <div className="flexParent">
            <div className="flexChild">
                <AppMap />
            </div>
            <div className="flexChild" style={{alignItems:"start", paddingTop:"80px", justifyContent:"center"}}>
                <AppForm />
            </div>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

