import $ from 'jquery';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

class GithubApi {
  static getUsers(lastUserId = 0) {
    const url = "https://api.github.com/users?since=" + lastUserId;
    return Observable.fromPromise($.get(url));
  }
}

export default GithubApi;