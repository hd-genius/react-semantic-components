import { Component, Context, useContext } from "react";
import { TryCatchContext, TryCatchContextValue } from "./try-catch-context";

interface TryProps {
  children: any;
}

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
