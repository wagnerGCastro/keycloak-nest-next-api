export interface ResponseController {
  error?: string | Error | boolean | TypeError;
  message?: string | TypeError;
  result?: string[] | null;
  success?: boolean;
}
