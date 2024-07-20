import { ReactElement } from "react";
import { IconProps } from "./IconProps";


function SurveyIcon(props: IconProps): ReactElement {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M19 21H5V5h2v2h10V5h2v2.172l1-1V4h-3V3h-3a2 2 0 0 0-4 0H7v1H4v18h16V11.828l-1 1zM8 4h3V2.615A.615.615 0 0 1 11.614 2h.771a.615.615 0 0 1 .615.615V4h3v2H8zm14.646 1.646l.707.707-8.853 8.854-3.854-3.854.707-.707 3.147 3.147z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    );
}

export default SurveyIcon;