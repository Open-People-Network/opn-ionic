import 'rxjs/add/operator/toPromise';

import {Injectable} from '@angular/core';

import {Api} from '../api/api';
import {Account, LoginAccount} from '../../models/account'

const _UserList = 'UserList';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) {
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  async login(accountInfo: LoginAccount) {
    let xs: Account[] = await this.api.get(_UserList);
    xs = xs.filter(x => x.email == accountInfo.email);
    return xs[0];
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  async signup(accountInfo: any) {
    const users = await this.api.get(_UserList, []);
    users.push(accountInfo);
    return this.api.set(_UserList, users);
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
