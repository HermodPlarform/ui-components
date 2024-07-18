/**
 * Defines the pulsing effect of the button
 * 
 * @enum PulsingMode
 */
export enum PulsingMode {
    /** No pulsing effect */
    None = 1,
    /** Pulsing when focus is out */
    FocusOut = 2
};

/**
 * Props of the rounded pulsing button component 
 * 
 * @interface RoundedPulseBtnProps
 * @extends React.HTMLAttributes<HTMLButtonElement>
 * @member {string} text optional text to put on the button
 * @member {React.ReactElement<React.SVGProps<SVGSVGElement>>} icon optional icon to put on the button
 * @member {PulsingMode} pulsingMode optional definition of the pulsing mode, defaults to None
 * @member {Array<string>} addClasses optional additional css classes to use with the outer button element [tailwind]
 */
export interface RoundedPulseBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    pulsingMode?: PulsingMode;
    addClasses?: Array<string>;
};