import {NotFound} from "../pages/NotFound";
import React from "react";

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error(error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <NotFound />
            );
        }

        return this.props.children
    }
}