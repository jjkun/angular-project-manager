import { Injectable } from '@angular/core';
import { Config } from '../config';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpService } from './http.service';
import { Http } from '@angular/http';

@Injectable()
export class AthenticationService extends HttpService{

  hasSession = false;
  user;
  apiBaseURL: string = Config.API_SERVER_URL;

  constructor(public _http: Http, public _locker: SessionStorageService) {
    super(_http);
  }

  public isLoggedIn() {
    const user = this._locker.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn(username: string, password: string) {
    const url = `${this.apiBaseURL}/users/login`;
    return this.post(url, {
      'username': username,
      'password': password
    });
  }

  public logout() {
    this.user = null;
    this.hasSession = false;
    this._locker.clear('user');
  }


}
