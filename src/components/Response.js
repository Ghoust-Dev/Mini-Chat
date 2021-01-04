import React from 'react';
import './Response.css';

export default ({ response, userID }) => {

        return (
            <div id="listMsg" className="list-msg">
                {response.map(res => {

                    let hideThisUsr = "";
                    let hideOtherUsr = "";
                    let newClass= "";

                    if (userID === res.userID) {
                        newClass = 'thisUser';
                        hideOtherUsr = 'd-none'
                    }else{
                        newClass = 'otherUser';
                        hideThisUsr = 'd-none'
                    }

                    return (
                        <>
                        <div className={`MsgThisUsr ${hideThisUsr}`} key={res.userID} >
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
                        <div className={`MsgOthUsr ${hideOtherUsr}`} key={res.userID} >
                            <div className={newClass}>
                                {res.message}
                            </div>
                            <div className="detail-profile">
                                <div className="profile-img">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="pseudN">
                                    <strong>{res.pseudo}</strong> 
                                </div>  
                            </div>
                            
                        </div>
                        </>
                    );
                })}
            </div>
        );
}