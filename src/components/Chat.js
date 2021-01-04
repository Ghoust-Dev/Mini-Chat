import React, { Component } from 'react';
import axios from 'axios';
import './Chat.css';

export default ({ msg, pseudo, handleChange, handleSubmit }) => {

        return (
            <div className="mini-chat">
                <form  onSubmit={handleSubmit}>
                    <div className="pseud form-group row">
                        <label htmlFor="Pseudo" className="col-sm-2 col-form-label">Pseudo : </label>
                        <input 
                            type="text" 
                            name="pseudo" 
                            className="form-control col-sm-8 " 
                            onChange={handleChange}
                            placeholder="Enter the Pseudo"
                            required
                        >
                        </input>
                    </div>
                    <div className="Msg form-group row">
                        <label htmlFor="Message" className="col-sm-2 col-form-label">Message : </label>
                        <input 
                            type="text" 
                            name="message" 
                            className="form-control col-sm-8" 
                            onChange={handleChange}
                            placeholder="Enter your message"
                            required
                        >
                        </input>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-success"
                    >
                        Envoyer <i className="fa fa-paper-plane"></i>
                    </button>
                </form>

                
            </div>
        );
    }
