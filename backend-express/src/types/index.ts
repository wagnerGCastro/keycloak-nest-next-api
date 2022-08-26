export interface Response {
  error?: string | Error | boolean | TypeError;
  message?: string | TypeError;
  result?: string[] | null;
  success?: boolean;
}
