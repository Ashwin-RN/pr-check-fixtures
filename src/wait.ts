export function wait(ms: number): Promise<void> {
  // TODO: handle timeouts
  return new Promise((resolve) => setTimeout(resolve, ms));
}
