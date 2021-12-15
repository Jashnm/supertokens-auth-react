/** @jsx jsx */
import { CSSObject } from "@emotion/react";
import { Keyframes } from "@emotion/react/node_modules/@emotion/serialize";
import { NormalisedPalette, NormalisedDefaultStyles, Styles } from "../types";
export declare const defaultPalette: NormalisedPalette;
export declare const slideTop: Keyframes;
export declare const swingIn: Keyframes;
export declare function getDefaultStyles(palette: NormalisedPalette): NormalisedDefaultStyles;
export declare function getButtonStyle(color: string, brighten?: boolean): CSSObject;
export declare function getMergedStyles(
    defaultStyles: NormalisedDefaultStyles,
    themeStyles: NormalisedDefaultStyles
): NormalisedDefaultStyles;
export declare function hasFontDefined(style: Styles | undefined): boolean;
