import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    customClass?: string;
    onClick: () => void;
}

function MyButton({ children, customClass, onClick }: ButtonProps) {
    return (
        <>
            <button type="button" onClick={onClick} className={`btn btn-${customClass ? customClass : 'primary'} `}>
                {children}
            </button>
        </>
    )
}

export default MyButton;