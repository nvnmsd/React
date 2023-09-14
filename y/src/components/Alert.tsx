import { ReactNode } from "react";

export interface AlertProps {
    children: ReactNode;
    parentName: string;
}

function Alert({ children, parentName = '' }: AlertProps) {
    return (
        <>
            {/* <div className="alert alert-primary">
                <h1>Alert Component {parentName}</h1>
            </div> */}
            <div className="alert alert-secondary">
                {/* what ever is passed between the <Alert> </Alert> will be rendered here */}
                {children}
            </div>
        </>
    )
}

export default Alert;