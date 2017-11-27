import $ from 'jquery';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import test_user_data from './../users_test_data.json';

class GithubApi {
  static getUsers(lastUserId = 0) {
    return Observable.from(usersJson);
  }
}

export default GithubApi;