export type CustomEventClassListener<T> = (event: CustomEvent<T>) => void;

export class CustomEventClass {
  public on<T>(event: string, listener: CustomEventClassListener<T>) {
    window.addEventListener(event, (e) => {
      listener(e as CustomEvent<T>);
    });

    return () => this.off(event, listener);
  }

  public off<T>(event: string, listener: CustomEventClassListener<T>) {
    window.removeEventListener(event, (e) => {
      listener(e as CustomEvent<T>);
    });
  }

  public emit<T>(event: string, args: T) {
    window.dispatchEvent(new CustomEvent(event, { detail: args }));
  }
}

export const customEvent = new CustomEventClass();
