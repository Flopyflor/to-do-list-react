import React from 'react';
import './CheckTaskButton.css';

const CheckTaskButton = () => {
    return (
        <div>
            <label className="container">
                <input checked="checked" type="checkbox"/>
                <div className="checkmark"></div>
            </label>
        </div>
    );
};

export default CheckTaskButton;
