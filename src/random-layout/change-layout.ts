export interface ChangeLayoutOptions {
  length:number;
  timeoutFn:(i: number, fn: () => void) => void;
  loopLayouts?: boolean;
  timeout?: number;
}

export function changeLayout(options: ChangeLayoutOptions) {

    const {length, loopLayouts, timeoutFn, timeout = 2000} = options;

    let i = 0;

    function cl () {
        if (i >= length) {
            if (!loopLayouts) return;
            i = 0;
        }

        i++;

        setTimeout(() => timeoutFn(i, cl), timeout);
    }

    return cl();
}