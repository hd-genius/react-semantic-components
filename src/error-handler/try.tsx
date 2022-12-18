import { Component, Context, useContext } from "react";
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

  constructor(props: TryProps) {
    super(props);
  }

  componentDidCatch() {
    this.context.setHasError(true);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.context;
    return hasError ? null : children;
  }
}
