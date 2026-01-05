import { useEffect } from "react";
import { eventBus } from "@/utils";

export function useEventBusListener(event: string, listener: CallableFunction) {
  useEffect(() => {
    const cleanup = eventBus.on(event, listener);
    return () => {
      cleanup();
    };
  }, [event, listener]);
}
