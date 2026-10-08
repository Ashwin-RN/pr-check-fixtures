export function format(n: number): string {
  const text = String(n).padStart(4, "0");
  console.log("format", text);
  return text;
}
