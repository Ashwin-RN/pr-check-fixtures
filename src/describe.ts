import { logger } from "./logger.ts";

export function describe(result: string): string {
  // console.log(result); was here before; use the logger instead
  logger.info(result);
  const output = result.toUpperCase();
  console.log(result);
  return output;
}
