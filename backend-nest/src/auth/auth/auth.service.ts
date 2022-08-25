import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

interface Attributes {
  client_id: string;
  client_secret: string;
  grant_type: string;
  username: string;
  password: string;
}

//Reactive X
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(attributes: Attributes) {
    console.log('login:url', process.env.KEYCLOAK_URL);
    const { data } = await firstValueFrom(
      this.http.post(
        process.env.KEYCLOAK_URL,
        new URLSearchParams({ ...attributes }),
      ),
    );
    return data;
  }
}
