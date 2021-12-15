import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginActivateService } from '../login-activate.service';
import { Customer } from '../models/customer';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit { 
  @Output() setSelectedId: EventEmitter<string> = new EventEmitter<string>();
  loading = false;
  submitted = false;
  retUrl:string="dashboard";
  userForm!: FormGroup;
  show:boolean = false;

  members: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ];
  
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthService,
      private formBuilder:FormBuilder
  ) {
     
  }

  ngOnInit() {
   this.userForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    })

    console.log(localStorage.getItem('state'));
      this.activatedRoute.queryParamMap
      .subscribe(params => {
  console.log( 'LoginComponent/ngOnInit '+ params.get('retUrl'));

  if (localStorage.getItem('state')) {
    this.setSelectedId.emit("true");
    this.authenticationService.sendMsg((localStorage.getItem('state')));
    } 
});

  }
  get f() { return this.userForm.controls; }
  // // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  addCustomer(customerName:any) {

    if (this.userForm.invalid) {
      return;
  }

     this.authenticationService.login(customerName, customerName).subscribe(data => {
         console.log( 'return to '+ this.retUrl);

         if (this.retUrl!=null) {
              this.router.navigate( [this.retUrl]);
              localStorage.setItem('state',customerName);
              this.authenticationService.sendMsg(customerName);
         } else {
              this.router.navigate( ['entry']);
         }
     });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    else{
      this.authenticationService.login(this.userForm.value.email, this.userForm.value.email).subscribe(data => {
        console.log( 'return to '+ this.retUrl);

        if (this.retUrl!=null) {
             this.router.navigate( [this.retUrl]);
             localStorage.setItem('state',this.userForm.value.email);
             this.authenticationService.sendMsg(this.userForm.value.email);
        } else {
             this.router.navigate( ['entry']);
        }
    });
    }
}

}
