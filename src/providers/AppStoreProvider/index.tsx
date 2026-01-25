import type { PropsWithChildren } from "react";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import css from "jotai-devtools/styles.css?inline";
import { store } from "./store";

export function AppStoreProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      {import.meta.env.DEV && (
        <>
          <style>{css}</style>
          <DevTools store={store} />
        </>
      )}
      {children}
    </Provider>
  );
}
