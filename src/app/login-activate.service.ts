import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateService implements CanActivate {
  private isloggedIn: boolean = false;
  constructor( private router: Router,private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {

if (localStorage.getItem('state') == null) {
alert('You are not allowed to view this page. You are redirected to login Page');

this.router.navigate(["entry"],{ queryParams: { retUrl: "entry"} });
return false;

//var urlTree = this.router.createUrlTree(['login']);
//return urlTree;
} 
else{
  return true;
}

}
}
