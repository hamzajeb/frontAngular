import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Service1Service } from './service1.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  profile:any;
  constructor(private service1Service:Service1Service,private route:Router){
    
  }
  canActivate(){
    this.profile=this.service1Service.getProfile()
    if(this.service1Service.isLoggedin() && (this.profile==1)){
      return true;
    }else{
      this.route.navigateByUrl('');
      return false;
  }
  
}
  
}
