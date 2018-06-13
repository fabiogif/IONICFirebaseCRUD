import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { AngularFireAuth} from 'angularFire2/auth'
import { User } from './user';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {
  
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
      this.user = angularFireAuth.authState;

  }

}
