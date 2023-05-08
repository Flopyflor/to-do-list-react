import React from 'react';
import './card.css';
import CheckButton from '../checkButton/checkButton';
import DeleteButton from '../deleteButton/deleteButton';

const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className="task">
                        <h3>Tarea</h3>
                    </div>
                    <div className="delete-button">
                        <DeleteButton/>
                    </div>
                    <div className="check">
                        <CheckButton/>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Card;
