import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <login-userlist *ngIf="phase===0"></login-userlist>
  <login-username *ngIf="phase===1"></login-username>
  <login-password *ngIf="phase===2"></login-password>
  <select-branch *ngIf="phase===3"></select-branch>

  <button class='btn btn-default' (click)='next()'>next</button>
  `,
})
export class AppComponent  {
  public phase: number = 0;

  public next() {
    const self = this;
    self.phase ++;
    if (self.phase > 3) {
      self.phase = 0;
    }
  }
}
