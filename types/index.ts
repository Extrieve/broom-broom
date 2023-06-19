import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export interface CustomFilterProps {
    title: string;
    containerStyles?: string;
    filterType?: "checkbox" | "radio";
    filterOptions?: string[];
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};