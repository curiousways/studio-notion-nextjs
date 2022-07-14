import {
  createContext,
  useState,
  useContext,
  ReactChildren,
  ReactChild,
} from "react";

type bodyTheme = string;

type ContextType = {
  pageTheme: bodyTheme;
  setPageTheme: (theme: bodyTheme) => void;
};

const AppContext = createContext<ContextType | null>(null);

type Props = {
  children: ReactChild | ReactChildren;
};

export default function AppContextProvider({ children }: Props) {
  const [pageTheme, setPageTheme] = useState("");

  return (
    <AppContext.Provider
      value={{
        pageTheme: pageTheme,
        setPageTheme: setPageTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext) as ContextType;
}
