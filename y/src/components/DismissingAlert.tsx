import { ReactNode } from "react";

export interface DismissingAlertProps {
    children: ReactNode;
    onDismiss: () => void;
}

function DismissingAlert({ children, onDismiss }: DismissingAlertProps) {
    return (
        <>
            <div className="alert alert-warning alert-dismissable fade show" role="alert">
                {children}
                <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onDismiss}>
                </button>
            </div>
        </>
    );
}

export default DismissingAlert;