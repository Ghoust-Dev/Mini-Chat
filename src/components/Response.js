import React, { Component } from 'react';
import './Response.css';

export default ({ response }) => {
        return (
            <div id="listMsg" className="list-msg">
                {response.map(res => {
                    return (
                        <div className="resChat" key={res.pseudo}>
                            <div className="pseudN">
                                <strong>{res.pseudo}</strong> : 
                            </div>  
                            <div className="msgN">
                                {res.message}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
}