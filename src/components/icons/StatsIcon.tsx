import { ReactElement } from "react";
import { IconProps } from "./IconProps";

function StatsIcon(props: IconProps): ReactElement {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
            {...props}>
            <g>
                <g>
                    <g color={props.color}>
                        <path fill="currentcolor" d="M447.168,134.56c-0.535-1.288-1.318-2.459-2.304-3.445l-128-128c-2.003-1.988-4.709-3.107-7.531-3.115H74.667 C68.776,0,64,4.776,64,10.667v490.667C64,507.224,68.776,512,74.667,512h362.667c5.891,0,10.667-4.776,10.667-10.667V138.667 C447.997,137.256,447.714,135.86,447.168,134.56z M320,36.416L411.584,128H320V36.416z M426.667,490.667H85.333V21.333h213.333 v117.333c0,5.891,4.776,10.667,10.667,10.667h117.333V490.667z" />
                        <path fill="currentcolor" d="M266.667,224v74.667H224V256c0-5.891-4.776-10.667-10.667-10.667H160v-74.667c0-5.891-4.776-10.667-10.667-10.667 c-5.891,0-10.667,4.776-10.667,10.667V416c0,5.891,4.776,10.667,10.667,10.667h213.333c5.891,0,10.667-4.776,10.667-10.667 s-4.776-10.667-10.667-10.667H352V224c0-5.891-4.776-10.667-10.667-10.667h-64C271.442,213.333,266.667,218.109,266.667,224z  M202.667,405.333H160V266.667h42.667V405.333z M266.667,405.333H224V320h42.667V405.333z M288,234.667h42.667v170.667H288 V234.667z" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default StatsIcon;