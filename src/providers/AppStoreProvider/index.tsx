import type { FC, PropsWithChildren } from "react";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import css from "jotai-devtools/styles.css?inline";
import { store } from "./configs";

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <style>{css}</style>
      <DevTools store={store} />
      {children}
    </Provider>
  );
};
