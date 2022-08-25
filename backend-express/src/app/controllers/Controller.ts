/* eslint-disable no-console */
import { Response } from '@/types';

class Controller {
  constructor() {}

  async index(): Promise<Response> {
    const result = { success: false, message: `my contoller index!` };
    console.log(result);
    return result;
  }
}

export default new Controller();
