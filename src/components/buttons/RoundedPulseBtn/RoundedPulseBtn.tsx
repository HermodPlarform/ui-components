import React from "react";
import classNames from "classnames";
import './RoundedPulseBtn.css';
import { PulsingMode, RoundedPulseBtnProps } from "./RoundedPulseBtn.types";

const RoundedPulseBtn: React.FC<RoundedPulseBtnProps> = (props) => {

    let pulsingClass = "no-pulse"; // no pulsing by default
    if (typeof props.pulsingMode !== "undefined") {
        switch (props.pulsingMode) {
            case PulsingMode.None:
                pulsingClass = "no-pulse";
                break;
            case PulsingMode.FocusOut:
                pulsingClass = "pulse-button";
                break;
            default:
                pulsingClass = "no-pulse";
                break;
        }
    }

    let btnClasses = classNames(
        "flex",
        "flex-wrap",
        "p-10",
        "justify-center",
        "items-center",
        "rounded-full",
        pulsingClass,
        props.addClasses
    );

    return (
        <button className={btnClasses} {...props}>
            <div>{typeof props.icon !== "undefined" ? props.icon : ""}</div>
            <div>{typeof props.text !== "undefined" ? props.text : ""}</div>
        </button>
    );
}

export default RoundedPulseBtn;