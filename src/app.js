import React from 'react';

export function App(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="small-12 columns">
                    <h1>Immutable.js</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
}