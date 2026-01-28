export type EventBusListener<T> = (params: T) => void;

export class EventBus {
  private events: Map<string, Set<EventBusListener<unknown>>>;

  public constructor() {
    this.events = new Map();
  }

  public on<T>(event: string, listener: EventBusListener<T>) {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event)?.add(listener as EventBusListener<unknown>);
    return () => this.off(event, listener);
  }

  public off<T>(event: string, listener: EventBusListener<T>) {
    this.events.get(event)?.delete(listener as EventBusListener<unknown>);
  }

  public emit<T>(event: string, args: T) {
    this.events.get(event)?.forEach((listener) => {
      listener(args);
    });
  }
}

export const eventBus = new EventBus();
