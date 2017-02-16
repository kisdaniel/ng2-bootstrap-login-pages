/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/login-userlist';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_UserList {
  /*private*/ _eventHandler:Function;
  context:import0.UserList;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.UserList();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_UserList_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_UserList_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.UserList>;
  _UserList_0_3:Wrapper_UserList;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UserList_Host0,renderType_UserList_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'login-userlist',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_UserList0(this.viewUtils,this,0,this._el_0);
    this._UserList_0_3 = new Wrapper_UserList();
    this.compView_0.create(this._UserList_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._UserList_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.UserList) && (0 === requestNodeIndex))) { return this._UserList_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._UserList_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const UserListNgFactory:import7.ComponentFactory<import0.UserList> = new import7.ComponentFactory<import0.UserList>('login-userlist',View_UserList_Host0,import0.UserList);
const styles_UserList:any[] = ['.to-left[_ngcontent-%COMP%] { float: left; }\n  .to-right[_ngcontent-%COMP%] { float: right; }'];
var renderType_UserList:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_UserList,{});
export class View_UserList0 extends import1.AppView<import0.UserList> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _text_62:any;
  _el_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _el_71:any;
  _text_72:any;
  _el_73:any;
  _text_74:any;
  _el_75:any;
  _text_76:any;
  _el_77:any;
  _text_78:any;
  _text_79:any;
  _text_80:any;
  _text_81:any;
  _el_82:any;
  _text_83:any;
  _el_84:any;
  _text_85:any;
  _el_86:any;
  _text_87:any;
  _text_88:any;
  _text_89:any;
  _text_90:any;
  _text_91:any;
  _text_92:any;
  _text_93:any;
  /*private*/ _expr_94:any;
  /*private*/ _expr_95:any;
  /*private*/ _expr_96:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_UserList0,renderType_UserList,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_94 = import8.UNINITIALIZED;
    this._expr_95 = import8.UNINITIALIZED;
    this._expr_96 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','col-xs-10 col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-1'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','well well-md'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'h1',new import3.InlineArray2(2,'class','text-center'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_8,'h1',new import3.InlineArray2(2,'class','text-center text-info'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n                    ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'span',new import3.InlineArray2(2,'class','fa-stack fa-lg'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n                        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'i',new import3.InlineArray2(2,'class','fa fa-circle fa-stack-2x'),(null as any));
    this._text_18 = this.renderer.createText(this._el_15,'\n                        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_15,'i',new import3.InlineArray2(2,'class','fa fa-users fa-stack-1x fa-inverse'),(null as any));
    this._text_20 = this.renderer.createText(this._el_15,'\n                        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_15,'\n                    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_13,'\n                ',(null as any));
    this._text_23 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_8,'div',new import3.InlineArray2(2,'class','list-group'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'a',new import3.InlineArray4(4,'class','list-group-item','href','javascript:void(0)'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n                        ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-user fa-fw'),(null as any));
    this._text_29 = this.renderer.createText(this._el_26,'\n                        Valiskó Tamás ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_26,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'(ValiskoT)',(null as any));
    this._text_32 = this.renderer.createText(this._el_26,'\n                        ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_26,'span',new import3.InlineArray2(2,'class','to-right'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'\n                          ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_33,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-trash text-danger fa-lg'),(null as any));
    this._text_36 = this.renderer.createText(this._el_33,'\n                          ',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_33,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-chevron-right fa-lg'),(null as any));
    this._text_38 = this.renderer.createText(this._el_33,'  \n                        ',(null as any));
    this._text_39 = this.renderer.createText(this._el_26,'\n                    ',(null as any));
    this._text_40 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_24,'a',new import3.InlineArray4(4,'class','list-group-item','href','javascript:void(0)'),(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'\n                        ',(null as any));
    this._el_43 = import3.createRenderElement(this.renderer,this._el_41,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-user fa-fw'),(null as any));
    this._text_44 = this.renderer.createText(this._el_41,'\n                        Kiss Géza ',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,this._el_41,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'(KissG)',(null as any));
    this._text_47 = this.renderer.createText(this._el_41,'\n                        ',(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_41,'span',new import3.InlineArray2(2,'class','to-right'),(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'\n                          ',(null as any));
    this._el_50 = import3.createRenderElement(this.renderer,this._el_48,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-trash text-danger fa-lg'),(null as any));
    this._text_51 = this.renderer.createText(this._el_48,'\n                          ',(null as any));
    this._el_52 = import3.createRenderElement(this.renderer,this._el_48,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-chevron-right fa-lg'),(null as any));
    this._text_53 = this.renderer.createText(this._el_48,'  \n                        ',(null as any));
    this._text_54 = this.renderer.createText(this._el_41,'\n                    ',(null as any));
    this._text_55 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_56 = import3.createRenderElement(this.renderer,this._el_24,'a',new import3.InlineArray4(4,'class','list-group-item','href','javascript:void(0)'),(null as any));
    this._text_57 = this.renderer.createText(this._el_56,'\n                        ',(null as any));
    this._el_58 = import3.createRenderElement(this.renderer,this._el_56,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-user fa-fw'),(null as any));
    this._text_59 = this.renderer.createText(this._el_56,'\n                        Bíró Beáta ',(null as any));
    this._el_60 = import3.createRenderElement(this.renderer,this._el_56,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_61 = this.renderer.createText(this._el_60,'(BiroB)',(null as any));
    this._text_62 = this.renderer.createText(this._el_56,'\n                        ',(null as any));
    this._el_63 = import3.createRenderElement(this.renderer,this._el_56,'span',new import3.InlineArray2(2,'class','to-right'),(null as any));
    this._text_64 = this.renderer.createText(this._el_63,'\n                          ',(null as any));
    this._el_65 = import3.createRenderElement(this.renderer,this._el_63,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-trash text-danger fa-lg'),(null as any));
    this._text_66 = this.renderer.createText(this._el_63,'\n                          ',(null as any));
    this._el_67 = import3.createRenderElement(this.renderer,this._el_63,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-chevron-right fa-lg'),(null as any));
    this._text_68 = this.renderer.createText(this._el_63,'  \n                        ',(null as any));
    this._text_69 = this.renderer.createText(this._el_56,'\n                    ',(null as any));
    this._text_70 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._el_71 = import3.createRenderElement(this.renderer,this._el_24,'a',new import3.InlineArray4(4,'class','list-group-item  list-group-item-info','href','javascript:void(0)'),(null as any));
    this._text_72 = this.renderer.createText(this._el_71,'\n                        ',(null as any));
    this._el_73 = import3.createRenderElement(this.renderer,this._el_71,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-user fa-fw'),(null as any));
    this._text_74 = this.renderer.createText(this._el_71,'',(null as any));
    this._el_75 = import3.createRenderElement(this.renderer,this._el_71,'span',new import3.InlineArray2(2,'class','to-right'),(null as any));
    this._text_76 = this.renderer.createText(this._el_75,'\n                            ',(null as any));
    this._el_77 = import3.createRenderElement(this.renderer,this._el_75,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-chevron-right fa-lg'),(null as any));
    this._text_78 = this.renderer.createText(this._el_75,'\n                        ',(null as any));
    this._text_79 = this.renderer.createText(this._el_71,'\n                    ',(null as any));
    this._text_80 = this.renderer.createText(this._el_24,'\n                ',(null as any));
    this._text_81 = this.renderer.createText(this._el_8,'\n\n                ',(null as any));
    this._el_82 = import3.createRenderElement(this.renderer,this._el_8,'div',new import3.InlineArray2(2,'class',''),(null as any));
    this._text_83 = this.renderer.createText(this._el_82,'\n                    ',(null as any));
    this._el_84 = import3.createRenderElement(this.renderer,this._el_82,'button',new import3.InlineArray2(2,'class','btn btn-md btn-danger btn-block'),(null as any));
    this._text_85 = this.renderer.createText(this._el_84,'\n                        ',(null as any));
    this._el_86 = import3.createRenderElement(this.renderer,this._el_84,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-trash fa-lg'),(null as any));
    this._text_87 = this.renderer.createText(this._el_84,'',(null as any));
    this._text_88 = this.renderer.createText(this._el_82,'\n                ',(null as any));
    this._text_89 = this.renderer.createText(this._el_8,'\n            ',(null as any));
    this._text_90 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_91 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_92 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_93 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._text_62,
      this._el_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._text_69,
      this._text_70,
      this._el_71,
      this._text_72,
      this._el_73,
      this._text_74,
      this._el_75,
      this._text_76,
      this._el_77,
      this._text_78,
      this._text_79,
      this._text_80,
      this._text_81,
      this._el_82,
      this._text_83,
      this._el_84,
      this._text_85,
      this._el_86,
      this._text_87,
      this._text_88,
      this._text_89,
      this._text_90,
      this._text_91,
      this._text_92,
      this._text_93
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_94:any = import3.inlineInterpolate(1,'','login.userlist','');
    if (import3.checkBinding(throwOnChange,this._expr_94,currVal_94)) {
      this.renderer.setText(this._text_11,currVal_94);
      this._expr_94 = currVal_94;
    }
    const currVal_95:any = import3.inlineInterpolate(1,'\n                        ','login.other','\n                        ');
    if (import3.checkBinding(throwOnChange,this._expr_95,currVal_95)) {
      this.renderer.setText(this._text_74,currVal_95);
      this._expr_95 = currVal_95;
    }
    const currVal_96:any = import3.inlineInterpolate(1,'\n                        ','login.removeAll','\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_96,currVal_96)) {
      this.renderer.setText(this._text_87,currVal_96);
      this._expr_96 = currVal_96;
    }
  }
}