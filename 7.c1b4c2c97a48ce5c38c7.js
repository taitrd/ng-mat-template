(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1zK7":function(t,r){t.exports=""},4880:function(t,r){t.exports='<form role="form" (ngSubmit)="requestReset()" #resetRequestForm="ngForm">\r\n  <mat-card class="mat-elevation-z4">\r\n    <mat-card-header>\r\n      <mat-card-title>{{\'reset.request.title\'|translate}}</mat-card-title>\r\n    </mat-card-header>\r\n    \x3c!-- <img mat-card-image src="assets/images/logoAzpro.png" alt="Logo "> --\x3e\r\n    <mat-card-content>\r\n      <div fxLayout="column">\r\n        <mat-card-subtitle>\r\n          <div class="alert alert-danger" *ngIf="errorEmailNotExists">{{\'reset.request.messages.notfound\'|translate}}</div>\r\n          <div class="alert alert-warning" *ngIf="!success">\r\n            <p>{{\'reset.request.messages.info\'|translate}}</p>\r\n          </div>\r\n\r\n          <div class="alert alert-success" *ngIf="success === \'OK\'">\r\n            <p>{{\'reset.request.messages.success\'|translate}}</p>\r\n          </div>\r\n        </mat-card-subtitle>\r\n        <ng-container *ngIf="!success">\r\n          <mat-form-field style="width: 100%;">\r\n            <input matInput type="email" id="email" name="email" class="form-control form-control-sm mb-3"\r\n                    placeholder="Email" autofocus [(ngModel)]="resetAccount.email" minlength=5 maxlength=254\r\n                    #emailInput="ngModel" email required>\r\n            <mat-icon matSuffix>email</mat-icon>\r\n          </mat-form-field>\r\n          <div *ngIf="emailInput.dirty && emailInput.invalid">\r\n            <small class="form-text text-danger" *ngIf="emailInput.errors.required">\r\n              {{\'entity.validation.required\'|translate}}\r\n            </small>\r\n            <small class="form-text text-danger" *ngIf="emailInput.errors.email">\r\n              {{\'reset.request.messages.invalidemail\'|translate}}\r\n            </small>\r\n            <small class="form-text text-danger" *ngIf="emailInput.errors.minlength">\r\n              {{\'entity.validation.minlength\'|translate:{min:5} }}\r\n            </small>\r\n            <small class="form-text text-danger" *ngIf="emailInput.errors.maxlength">\r\n              {{ \'entity.validation.maxlength\'|translate:{max: 254} }}\r\n            </small>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </mat-card-content>\r\n    <div *ngIf="!success">\r\n      <mat-card-actions>\r\n        <button mat-raised-button color="primary" type="submit"\r\n                [disabled]="resetRequestForm.form.invalid">{{\'global.send\'|translate}}</button>\r\n      </mat-card-actions>\r\n    </div>\r\n    <div>\r\n      <a class="blank-layout-card-link" [routerLink]="[\'../..\',\'login\']">{{\'login.title\'|translate}}</a>\r\n    </div>\r\n  </mat-card>\r\n</form>'},"8wpQ":function(t,r,e){"use strict";e.r(r);var n=e("mrSG"),a=e("CcnG"),s=e("ZYCi"),i=e("t/Na"),o=e("akkN"),l=function(){function t(t){this.http=t}return t.prototype.save=function(t){return this.http.post(o.a.apiUrl+"api/account/reset-password/finish",t)},t=n.__decorate([Object(a.C)({providedIn:"root"}),n.__metadata("design:paramtypes",[i.b])],t)}(),d=e("Ip0R"),c=e("ZYjt"),m=function(){function t(t,r,e,n,a,s){this.passwordResetFinishService=t,this.router=r,this.route=e,this.elementRef=n,this.titleService=a,this.platformId=s,this.hide=!0}return t.prototype.ngOnInit=function(){var t=this;this.titleService.setTitle("\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u"),this.route.queryParams.subscribe(function(r){t.key=r.key}),this.resetAccount={},this.keyMissing=!this.key},t.prototype.ngAfterViewInit=function(){if(null!=this.elementRef.nativeElement.querySelector("#password")){var t=this.elementRef.nativeElement.querySelector("#password");Object(d.n)(this.platformId)&&t.nativeElement.focus()}},t.prototype.finishReset=function(){var t=this;this.doNotMatch=null,this.error=null,this.resetAccount.password!==this.confirmPassword?this.doNotMatch="ERROR":this.passwordResetFinishService.save({key:this.key,newPassword:this.resetAccount.password}).subscribe(function(){t.success="OK",t.router.navigate(["/login"])},function(){t.success=null,t.error="ERROR"})},t.prototype.login=function(){this.router.navigate(["/login"])},t=n.__decorate([Object(a.n)({selector:"app-password-reset-finish",template:e("fHC2"),styles:[e("hRIN")]}),n.__param(5,Object(a.B)(a.T)),n.__metadata("design:paramtypes",[l,s.h,s.a,a.u,c.g,Object])],t)}(),u={path:"reset/finish",component:m,data:{authorities:[],pageTitle:"Password"}},p=function(){function t(t){this.http=t}return t.prototype.save=function(t){return this.http.post(o.a.apiUrl+"api/account/reset-password/init",t)},t=n.__decorate([Object(a.C)({providedIn:"root"}),n.__metadata("design:paramtypes",[i.b])],t)}(),f=function(){function t(t,r,e,n){this.passwordResetInitService=t,this.elementRef=r,this.renderer=e,this.router=n}return t.prototype.ngOnInit=function(){this.resetAccount={}},t.prototype.ngAfterViewInit=function(){},t.prototype.requestReset=function(){var t=this;o.a.design&&this.router.navigate(["/reset/finish"]),this.error=null,this.errorEmailNotExists=null,this.passwordResetInitService.save(this.email).subscribe(function(){t.success="OK"},function(r){t.success=null,400===r.status?t.errorEmailNotExists="ERROR":t.error="ERROR"})},t=n.__decorate([Object(a.n)({selector:"app-password-reset-init",template:e("4880"),styles:[e("VNx/")]}),n.__metadata("design:paramtypes",[p,a.u,a.Y,s.h])],t)}(),g={path:"reset/request",component:f,data:{authorities:[],pageTitle:"Qu\xean m\u1eadt kh\u1ea9u"}},h=(e("ha1a"),e("0ic7"),e("Knwe"),e("XYlm")),v=e("WEc/"),w=e("ZaiN"),y=e("9wtx"),b=(h.a.concat(v.a,w.b,y.b),function(){return function(t,r,e,n,a,s,i,o,l,d,c,m,u,p,f,g){this.login=t,this.firstName=r,this.lastName=e,this.fullName=n,this.address=a,this.telephone=s,this.avatar=i,this.vaiTroId=o,this.email=l,this.activated=d,this.lastModifiedBy=c,this.lastModifiedDate=m,this.langKey=u,this.password=p,this.confirmPassword=f,this.authorities=g,this.login=t||null,this.firstName=r||null,this.lastName=e||null,this.fullName=n||null,this.address=a||null,this.telephone=s||null,this.avatar=i||null,this.email=l||null,this.vaiTroId=o||1,this.activated=d||!0,this.lastModifiedBy=c||null,this.lastModifiedDate=m||null,this.langKey=u||"en",this.password=p||null,this.confirmPassword=f||null,this.authorities=g||null}}()),x=e("ey9i"),I=function(){function t(t,r){this.titleService=t,this.accountService=r}return t.prototype.ngOnInit=function(){this.titleService.setTitle("\u0110\u0103ng k\xfd \u0111\u01a1n v\u1ecb"),this.item=new b,this.isSaving=!1},t.prototype.ngAfterViewInit=function(){},t.prototype.requestRegister=function(){this.accountService.requestRegister(this.item).subscribe(function(t){})},t.prototype.clear=function(){this.item=new b},t.prototype.onSaveSuccess=function(){this.isSaving=!0,this.clear()},t.prototype.onSaveError=function(){this.isSaving=!1},t=n.__decorate([Object(a.n)({selector:"app-register",template:e("QFkj"),styles:[e("1zK7")]}),n.__metadata("design:paramtypes",[c.g,x.b])],t)}(),k=e("Qk2S"),S=function(){function t(t,r,e,n,a){this.eventManager=t,this.loginService=r,this.stateStorageService=e,this.router=n,this.titleService=a,this.rememberMe=!0,this.hide=!0,this.credentials={}}return t.prototype.ngAfterViewInit=function(){},t.prototype.login=function(){var t=this;o.a.design&&this.router.navigateByUrl("/dashboard",{replaceUrl:!0}),this.loginService.login({username:this.username,password:this.password,remember:this.rememberMe}).then(function(){var r="/dashboard";t.stateStorageService.storeUrl(null),t.router.navigateByUrl(r,{replaceUrl:!0}),t.eventManager.broadcast({name:"authenticationSuccess",content:"Sending Authentication Success"})}).catch(function(){})},t=n.__decorate([Object(a.n)({selector:"app-login",template:e("9ZhQ"),styles:[e("qnEE")]}),n.__metadata("design:paramtypes",[k.b,x.c,x.f,s.h,c.g])],t)}(),q=[u,g].concat([{path:"login",component:S,data:{pageTitle:"login.title"}},{path:"register",component:I,data:{pageTitle:"\u0110\u0103ng k\xed"}}]).slice(),M=e("M0ag"),R=e("REUf"),_=function(){function t(){}return t=n.__decorate([Object(a.K)({imports:[M.e,R.a],declarations:[f,m,I,S]})],t)}();e.d(r,"GuestModule",function(){return O});var O=function(){function t(){}return t=n.__decorate([Object(a.K)({declarations:[],imports:[M.e,_,s.i.forChild(q)]})],t)}()},"9ZhQ":function(t,r){t.exports='<form role="form" (ngSubmit)="login()">\r\n  <mat-card class="mat-elevation-z4">\r\n    <mat-card-header>\r\n      <mat-card-title>{{\'login.title\'|translate}}</mat-card-title>\r\n      <mat-card-subtitle>{{\'login.messages.introduction\'|translate}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    \x3c!-- <img mat-card-image src="assets/images/logo.png" alt="APP"> --\x3e\r\n    <mat-card-content>\r\n      <div fxLayout="column">\r\n        <mat-form-field>\r\n          <input matInput [placeholder]="\'login.form.usernameOrEmail.placeholder\'|translate" required autofocus id="username"\r\n                 [(ngModel)]="username" [ngModelOptions]="{standalone: true}">\r\n          <mat-icon matSuffix>home</mat-icon>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder="M\u1eadt kh\u1ea9u" [type]="hide ? \'password\' : \'text\'" id="inputPassword" required\r\n                 [(ngModel)]="password" [ngModelOptions]="{standalone: true}">\r\n          <mat-icon matSuffix (click)="hide = !hide">{{hide ? \'visibility_off\' : \'visibility\'}}</mat-icon>\r\n        </mat-form-field>\r\n        <div class="text-left">\r\n          <a class="blank-layout-card-link" [routerLink]="[\'../\', \'reset\', \'request\']">{{\'login.password.forgot\'|translate}}</a>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <div>\r\n        <div style="padding-bottom: 10px;">\r\n            <button class="bt-login" mat-raised-button color="primary" type="submit">{{\'login.form.button\'|translate}}</button>\r\n        </div>\r\n      </div>\r\n    </mat-card-actions>\r\n    <div>\r\n      <a class="blank-layout-card-link" routerLink="/register" >{{\'login.messages.register\'|translate}}</a>\r\n    </div>\r\n  </mat-card>\r\n</form>'},QFkj:function(t,r){t.exports='<form role="form" (ngSubmit)="requestRegister()">\r\n  <mat-card class="mat-elevation-z4">\r\n    <mat-card-header>\r\n      <mat-card-title>{{\'register.title\'|translate}}</mat-card-title>\r\n      <mat-card-subtitle>{{\'register.messages.introduction\'|translate}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    \x3c!-- <img mat-card-image src="assets/images/logo.png" alt="APP"> --\x3e\r\n    <mat-card-content>\r\n      <div fxLayout="column">\r\n        <mat-form-field>\r\n          <input matInput [placeholder]="\'register.form.login\'|translate" required autofocus id="login"\r\n                 [(ngModel)]="item.login" [ngModelOptions]="{standalone: true}">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput [placeholder]="\'register.form.fullName\'|translate" required autofocus id="fullName"\r\n                 [(ngModel)]="item.fullName" [ngModelOptions]="{standalone: true}">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput  type="email"  [placeholder]="\'register.form.email\'|translate" required autofocus id="email"\r\n                 [(ngModel)]="item.email" [ngModelOptions]="{standalone: true}">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type="password" [placeholder]="\'register.form.password\'|translate" required autofocus id="password"\r\n                 [(ngModel)]="item.password" [ngModelOptions]="{standalone: true}">\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <div>\r\n        <div style="padding-bottom: 10px;">\r\n            <button class="bt-login" mat-raised-button color="primary" type="submit">{{\'register.form.button\'|translate}}</button>\r\n        </div>\r\n      </div>\r\n    </mat-card-actions>\r\n    <div>\r\n      <a class="small" routerLink="/login">{{\'login.title\'|translate}}</a>\r\n    </div>\r\n  </mat-card>\r\n</form>\r\n'},"VNx/":function(t,r){t.exports=""},fHC2:function(t,r){t.exports='\r\n<form *ngIf="!success" role="form" (ngSubmit)="finishReset()" #passwordForm="ngForm">\r\n  <mat-card class="mat-elevation-z4">\r\n    <mat-card-header>\r\n      <mat-card-title>{{\'reset.finish.title\'|translate}}</mat-card-title>\r\n\r\n    </mat-card-header>\r\n\x3c!--      <img mat-card-image src="assets/images/logoAzpro.png" alt="Logo ">--\x3e\r\n    <mat-card-content>\r\n\r\n      <div fxLayout="column">\r\n        <mat-card-subtitle>\r\n          <div class="alert alert-danger" *ngIf="keyMissing">\r\n            <strong>{{\'reset.finish.messages.invalidcode\'|translate}}</strong>\r\n          </div>\r\n\r\n\x3c!--            <div class="alert alert-warning" *ngIf="!success && !keyMissing">--\x3e\r\n\x3c!--              <p>M\u1eadt kh\u1ea9u m\u1edbi</p>--\x3e\r\n\x3c!--            </div>--\x3e\r\n\r\n          <div class="alert alert-danger" *ngIf="error">\r\n            <p>{{\'reset.finish.messages.error\'|translate}}</p>\r\n          </div>\r\n\r\n          <p class="alert alert-success" *ngIf="success">\r\n            <span><strong>{{\'reset.finish.messages.success\'|translate}}</strong></span>\r\n            <a class="alert-link" (click)="login()">{{\'login.title\'|translate}}</a>.\r\n          </p>\r\n\r\n          <div class="alert alert-danger" *ngIf="doNotMatch">{{\'reset.finish.messages.invalidnewpass\'|translate}}</div>\r\n        </mat-card-subtitle>\r\n        <mat-form-field>\r\n          <input matInput [type]="hide ? \'password\' : \'text\'" name="newPassword" id="newPassword"\r\n                  class="form-control form-control-sm" #passwordInput="ngModel" placeholder="New password" autofocus\r\n                  [(ngModel)]="resetAccount.password" minlength=4 maxlength=50 required>\r\n        </mat-form-field>\r\n        <div\r\n          [hidden]="!(passwordForm.controls.newPassword?.touched && passwordForm.controls.newPassword?.invalid && passwordForm.controls.newPassword?.errors?.required)"\r\n          class="help-block">{{\'reset.finish.messages.invalidnewpass\'|translate}}\r\n        </div>\r\n        <div *ngIf="passwordInput.dirty && passwordInput.invalid">\r\n          <small class="form-text text-danger" *ngIf="passwordInput.errors.required">{{\'entity.validation.required\'|translate}}</small>\r\n          <small class="form-text text-danger" *ngIf="passwordInput.errors.minlength">{{\'entity.validation.minlength\'|translate: {min:4} }}</small>\r\n          <small class="form-text text-danger" *ngIf="passwordInput.errors.maxlength">{{\'entity.validation.maxlength\'|translate: {max:50} }}</small>\r\n        </div>\r\n\r\n        <mat-form-field>\r\n          <input matInput [type]="hide ? \'password\' : \'text\'" name="confirmPassword" id="confirmPassword"\r\n                  class="form-control form-control-sm mb-3" #confirmPasswordInput="ngModel" placeholder="Confirm password"\r\n                  [(ngModel)]="confirmPassword" minlength=4 maxlength=50 required>\r\n        </mat-form-field>\r\n        <div\r\n          [hidden]="!(passwordForm.controls.confirmPassword?.touched && passwordForm.controls.confirmPassword?.invalid && passwordForm.controls.confirmPassword?.errors?.required)"\r\n          class="help-block">{{\'entity.messages.fill\'|translate}}\r\n        </div>\r\n\r\n        <div *ngIf="confirmPasswordInput.dirty && confirmPasswordInput.invalid">\r\n          <small class="form-text text-danger" *ngIf="confirmPasswordInput.errors.required">\r\n            {{\'entity.validation.required\'|translate}}\r\n          </small>\r\n          <small class="form-text text-danger" *ngIf="confirmPasswordInput.errors.minlength">\r\n            {{\'entity.validation.minlength\'|translate: {min:4} }}\r\n          </small>\r\n          <small class="form-text text-danger" *ngIf="confirmPasswordInput.errors.maxlength">\r\n            {{\'entity.validation.maxlength\'|translate: {max:50} }}\r\n          </small>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color="primary" type="submit" [disabled]="passwordForm.form.invalid">{{\'global.send\'|translate}}</button>\r\n    </mat-card-actions>\r\n    <div>\r\n      <a class="blank-layout-card-link" href="/login">{{\'login.title\'|translate}}</a>\r\n    </div>\r\n  </mat-card>\r\n</form>'},hRIN:function(t,r){t.exports=""},qnEE:function(t,r){t.exports=""}}]);