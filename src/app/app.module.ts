import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginPage }  from './login-page';
import { PasswordPage } from './login-password';
import { UserList } from './login-userlist';
import { SelectBranch } from "./login-select-branch";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LoginPage,
    PasswordPage,
    UserList,
    SelectBranch,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
