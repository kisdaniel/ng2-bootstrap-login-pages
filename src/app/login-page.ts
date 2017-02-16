import { Component } from '@angular/core';

@Component({
  selector: 'login-username',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-1">
            <div class="well well-md">
                <h1 class="text-center">{{ 'login.title' }}</h1>

                <h1 class="text-center text-info">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-user fa-stack-1x fa-inverse"></i>
                    </span>
                </h1>

                <form class="form-vertical">
                    <input type="text" class="form-control" placeholder="userName" required>
                    {{ 'login.fhbHelp' }}
                    <button class="btn btn-md btn-primary btn-block">
                        {{ 'login.next' }}
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>                
                </form>
            </div>
        </div>
    </div>
  </div>
  `,
})
export class LoginPage  {
    public loginName: string;
}
