import { Component } from '@angular/core';

@Component({
  selector: 'login-userlist',
  template: `
  <style>
  .to-left { float: left; }
  .to-right { float: right; }
  </style>
  <div class="container">
    <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-1">
            <div class="well well-md">
                <h1 class="text-center">{{ 'login.userlist' }}</h1>
                <h1 class="text-center text-info">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                        <!-- ha egy van fa-user ha több fa-users -->
                    </span>
                </h1>
                <div class="list-group">
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-user fa-fw" aria-hidden="true"></i>
                        Valiskó Tamás <small>(ValiskoT)</small>
                        <span class="to-right">
                          <i class="fa fa-trash text-danger fa-lg" aria-hidden="true"></i>
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-user fa-fw" aria-hidden="true"></i>
                        Kiss Géza <small>(KissG)</small>
                        <span class="to-right">
                          <i class="fa fa-trash text-danger fa-lg" aria-hidden="true"></i>
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-user fa-fw" aria-hidden="true"></i>
                        Bíró Beáta <small>(BiroB)</small>
                        <span class="to-right">
                          <i class="fa fa-trash text-danger fa-lg" aria-hidden="true"></i>
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item  list-group-item-info">
                        <i class="fa fa-user fa-fw" aria-hidden="true"></i>
                        {{ 'login.other' }}
                        <span class="to-right">
                            <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>

                <div class="">
                    <button class="btn btn-md btn-danger btn-block">
                        <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
                        {{ 'login.removeAll' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,
})
export class UserList  {
    public loginName: string;
}
