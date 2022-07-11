import {
  createContext,
  useState,
  useContext,
  ReactChildren,
  ReactChild,
} from "react";

type bodyTheme = string;

type ContextType = {
  bodyTheme: bodyTheme;
  setFooterTheme: (theme: bodyTheme) => void;
};

const AppContext = createContext<ContextType | null>(null);

type Props = {
  children: ReactChild | ReactChildren;
};

export default function AppContextProvider({ children }: Props) {
  const [bodyTheme, setBodyTheme] = useState("");

  return (
    <AppContext.Provider
      value={{
        bodyTheme: bodyTheme,
        setFooterTheme: setBodyTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext) as ContextType;
}
