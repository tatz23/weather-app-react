import React from "react";

export default function LocationButton () {
    return(
    <div className="button">
        <button className="current-location" id="current-location">
            <span role="img" aria-label="emoji">📍
            </span>
        </button>
    </div>);
} 