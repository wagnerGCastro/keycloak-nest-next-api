import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
//Reactive X
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    console.log('login:url', process.env.KEYCLOAK_URL);
    const { data } = await firstValueFrom(
      this.http.post(
        process.env.KEYCLOAK_URL,
        new URLSearchParams({
          client_id: process.env.KEYCLOAK_CLIENT_ID,
          client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
          grant_type: process.env.KEYCLOAK_GRANT_TYPE,
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
//auth0 - jsonwebtoken

// client_id=nest
// &client_secret=625baf8d-2be8-4850-95cc-ec19c0be2752
// &grant_type=password
// &username=user1@user.com
// &password=123456
