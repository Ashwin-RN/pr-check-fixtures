export function clamp(n: number, low: number, high: number): number {
  return Math.min(high, Math.max(low, n));
}
