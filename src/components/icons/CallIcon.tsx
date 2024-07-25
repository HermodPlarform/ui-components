import { ReactElement } from "react";


function CallIcon(props: React.SVGProps<SVGSVGElement>): ReactElement {
    return (
        <svg
            viewBox="0 0 24 24"
            id="call-icon"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
            {...props}
        >
            <path
                id="primary"
                d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z"
                style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                }}
            />
        </svg>

    );
}

export default CallIcon;