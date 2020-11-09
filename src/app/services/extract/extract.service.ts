import { Injectable } from '@angular/core';
import { extract } from 'src/app/mock/extract';
import { Extract } from 'src/app/model/extract';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ExtractService {
  constructor(private authenticationService: AuthenticationService) {}

  getExtracts(): Promise<Extract[]> {
    // não faz muito sentido enviar o token, já que ta em mock
    // mas deixarei um exemplo como usar, existes algumas formas de passar o token
    // como usando interceptors ou encapsulando o httpClient
    // abaixo vou escrever da forma mais simples
    // this.http.get('http://api.example.com/extracts', {headers: {token: `Bearer ${this.authenticationService.getToken()}`}})

    return new Promise((resolve, reject) => {
      resolve(extract);
    });
  }
}
