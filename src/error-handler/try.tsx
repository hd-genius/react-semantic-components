import { Component, Context } from "react";
import { TryCatchContext, TryCatchContextValue } from "./error-handler-context";

interface TryProps {
  children: any;
}

/**
 * a component that catches any errors encountered while rendering its children
 * @since 1.1.0
 */
export class Try extends Component<TryProps> {
  static contextType: Context<TryCatchContextValue> = TryCatchContext;

  context!: TryCatchContextValue;

  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  constructor(props: TryProps) {
    super(props);
  }

  componentDidCatch() {
    this.context.setHasError(true);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? null : children;
  }
}
