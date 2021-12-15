import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;
  private userName:string = '';
  public dataObsevable: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() {
      this.isloggedIn=false;
  }

  login(username: string, password:string) {

      //Assuming users are provided the correct credentials.
      //In real app you will query the database to verify.
      this.isloggedIn=true;
      this.userName=username;
      return of(this.isloggedIn);
  }

  sendMsg(msg:any)
  {
      this.dataObsevable.next(msg);
  }

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }

  isAdminUser():boolean {
      if (this.userName=='Admin') {
          return true; 
      }
      return false;
  }
}
