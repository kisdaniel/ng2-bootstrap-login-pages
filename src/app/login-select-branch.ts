import { Component } from '@angular/core';

@Component({
  selector: 'select-branch',
  template: `
  <style>
  .to-left { float: left; }
  .to-right { float: right; }
  </style>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6 col-md-offset-3 col-sm-offset-2">
            <div class="well well-md">
                <h1 class="text-center">{{ 'login.selectBranch' }}</h1>
                <h1 class="text-center text-info">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-home fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </h1>

                <h3>{{ 'login.lastSelected' }}</h3>

                <div class="list-group">
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-trash text-danger fa-lg" aria-hidden="true"></i>
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                </div>

                <h3>{{ 'login.allBranches' }}</h3>

                
                <div class="input-group">
                    <input type="text" class="form-control">
                    <span class="input-group-addon">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>
                <p>
                    {{'login.searchInBranches'}}
                </p>

                <div class="list-group">
                
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="list-group-item">
                        <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                        1111 Budapest Üllői út 11 <small>(B3)</small>
                        <span class="to-right">
                          <i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>  
                        </span>
                    </a>
                </div>
                <div class="text-center">
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div class="">
                    <button class="btn btn-md btn-default btn-block">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        {{ 'login.exit' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,
})
export class SelectBranch  {
    public loginName: string;
}
