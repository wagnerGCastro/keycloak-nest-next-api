/* eslint-disable no-console */
import axios from 'axios';
import qs from 'qs';
import { Request, Response } from 'express';

class Controller {
  async index(req: Request, res: Response): Promise<any> {
    const result = { success: true, message: `my contoller index!` };
    return res.status(200).json({ result });
  }

  async login(req: Request, res: Response): Promise<any> {
    const { client_id, client_secret, grant_type, username, password } = req.body;
    const urlAPI = process.env.KEYCLOAK_URL;

    const dataParams = qs.stringify({
      client_id,
      client_secret,
      grant_type,
      username,
      password,
    });

    console.log('urlAPI', urlAPI);
    console.log('dataParams', dataParams);

    const config = {
      method: 'get',
      url: urlAPI,
      'Content-Type': 'application/x-www-form-urlencoded',
      data: dataParams,
    };

    axios(config)
      .then(result => {
        return res.status(200).json({ result: result.data });
      })
      .catch(err => {
        return res.status(500).json({
          error: `'The·api·was·not·found'`,
          message: err,
        });
      });
  }
}

export default new Controller();
