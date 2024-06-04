import React, { ErrorInfo, PropsWithChildren } from 'react';
import { IPropsWithChildren } from '@/typescript/type.components';

export class ErrorBoundary extends React.Component<IPropsWithChildren, any> {
    constructor(props: PropsWithChildren<IPropsWithChildren>) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // when something is wrong. webpage must navigate to /wrong for changing UI
        // secondary, continue task is call api to report error
        console.log(error, errorInfo);
        this.setState({hasError: true});
    }

    render(): React.ReactNode | React.ReactNode[] {
        try {
            if (this.state.hasError) {
                return this.props.fallbackError;
            }
            return this.props.children;
        } catch(e) {
            console.log(e);
            return this.props.fallbackError;
        }
    }
}