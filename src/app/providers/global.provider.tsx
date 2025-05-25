import { FC, PropsWithChildren } from "react";

interface GlobalProviderProps extends PropsWithChildren {}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  return <>{children}</>;
};
