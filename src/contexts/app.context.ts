import { createContext } from "react";

import type { Cinnamon } from "cinnamon";

interface IAppContext {
  cinnamon?: Cinnamon;
}

export const AppContext = createContext<IAppContext>({});
