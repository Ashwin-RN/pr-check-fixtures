export const logger = {
  info(message: string): void {
    process.stderr.write(message + "\n");
  }
};
