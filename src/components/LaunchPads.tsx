import React from "react";
import {useState} from "react";
import ExpandIcon from "../images/expand_icon.png";
import "../stylesheets/LaunchPads.css";

const LaunchPads = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandClick = () => {
        setIsExpanded(current => !current);
    }

    return (
        <div style={{height: isExpanded ? "auto" : ""}} className="LaunchPadContentHolder">
            <h2 className="LaunchPadHeader">LaunchPad</h2>
            <img src={ ExpandIcon } alt="Expand Icon" className="LaunchPadExpandIcon"
            style={{
                transform: isExpanded ? "rotate(-180deg)" : "",
            }}
            onClick={expandClick} />
            
            {/* Expanded Items */}
            <div className="LaunchPadContentHolderExtension">
                <h3>This is extended hehe</h3>
            </div>
        </div>
    );
}

export default LaunchPads;
