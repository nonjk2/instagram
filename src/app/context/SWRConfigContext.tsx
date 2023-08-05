"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";

interface AuthContextProps {
  children: ReactNode;
}

const SWRConfigContext = ({ children }: AuthContextProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
export default SWRConfigContext;
