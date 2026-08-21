import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile
    if (typeof window !== "undefined" && window.innerWidth <= 768) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const handleSetIsLoading = useCallback((state: boolean) => {
    setIsLoading(state);
  }, []);

  const handleSetLoading = useCallback((percent: number) => {
    setLoading(percent);
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading: handleSetIsLoading,
      setLoading: handleSetLoading,
    }),
    [isLoading, handleSetIsLoading, handleSetLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
