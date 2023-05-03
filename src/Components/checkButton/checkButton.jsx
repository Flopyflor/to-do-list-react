import React from 'react'

import './checkButton.css'

const CheckButton = () => {
  return (
    <div>
        <label className="container">
            <input checked="checked" type="checkbox"/>
            <div className="checkmark"></div>
        </label>
    </div>
  )
}

export default CheckButton