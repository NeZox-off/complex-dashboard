function useDebounce(callee: (...args: any[]) => void, timeoutMs: number) {
  let lastCall: number | undefined;
  let lastCallTimer: ReturnType<typeof setTimeout> | undefined;

  return function (...args: any[]) {
    const now = Date.now();

    if (lastCall && now - lastCall <= timeoutMs) {
      clearTimeout(lastCallTimer);
    }

    lastCall = now;
    lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

export { useDebounce };
