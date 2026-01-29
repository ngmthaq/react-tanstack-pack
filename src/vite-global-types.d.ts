import { router } from "./utils/router";

declare global {
  interface Window {
    __ENV__: Record<string, string>;
  }
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
