import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser: User;
  private API = 'http://localhost:5050/users';

  constructor(private xhr: HttpClient) { }

  login( {login, password}: Credential ): Promise<boolean> {

    const url = `${this.API}?login=${login}@orsys&password=${password}`;

    return this.xhr.get(url).toPromise().then( (res: User[]) => {
      if ( res.length === 1 ) {
        this.currentUser = res[0];
        return true;
      } else {
        throw Error('Invalid User');
      }
    });
  }

  logout() {}

  // tslint:disable-next-line:member-ordering
  private usersList: User[] = [];

  getUsersList(): Promise<User[]> {

    if (this.usersList.length) {
      return Promise.resolve(this.usersList);
    }

    return this.xhr.get(this.API)
      .toPromise()
      .then( ( res: User[] ) => {
        this.usersList.push(...res);
        return this.usersList;
      });
  }

}
