export function parseId(input: string): number | null {
  const n = Number(input);
  return Number.isInteger(n) && n > 0 ? n : null;
}
