import { Component, ErrorInfo, ReactNode } from "react";
import Scene from "./Scene";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class CharacterErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("CharacterModel WebGL Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const CharacterModel = () => {
  return (
    <CharacterErrorBoundary>
      <Scene />
    </CharacterErrorBoundary>
  );
};

export default CharacterModel;
