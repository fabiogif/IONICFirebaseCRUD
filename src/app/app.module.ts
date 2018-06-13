import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';

import { EditShoppingItemPage } from './../pages/edit-shopping-item/edit-shopping-item';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/*Import das paginas da aplicação*/
import { AddShoppingListPage } from './../pages/add-shopping-list/add-shopping-list';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { AuthService } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingItemPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingItemPage,
    SigninPage,
    SignupPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
