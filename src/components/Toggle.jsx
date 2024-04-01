import React from 'react';
import './Toggle.css';

export default function Toggle({ toggle: {title, state, disabledFlag} }) {
    return (
        <div>
            <label class="switch">
                <input type="checkbox" id="togBtn" checked={state === "TOGGLE_CHECKED"} disabled={disabledFlag === "TOGGLE_DISABLED"} />
                    <div class="slider round"></div>
            </label>
            <span class="label-text">{title}</span>
        </div>
    );
};