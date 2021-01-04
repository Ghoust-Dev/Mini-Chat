import React, { Component } from 'react';
import './Response.css';

export default ({ response, userID }) => {

        return (
            <div id="listMsg" className="list-msg">
                {response.map(res => {
                    let newClass=""
                    if (userID == res.userID) {
                        newClass = 'thisUser';
                    }else{
                        newClass = 'otherUser';
                    }

                    return (
                        <div className="resChat" key={res.userID}>
                            <div className="detail-profile">
                                <div className="profile-img">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="pseudN">
                                    <strong>{res.pseudo}</strong> 
                                </div>  
                            </div>
                            <div className={newClass}>
                                {res.message}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
}