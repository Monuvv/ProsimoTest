
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing Module - Route Guards Demo';
  selectedId = '';
  hoverItem = 'Filter info';

  name: string = '';
  price: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isLoggedIn = false;
  isSubmitted = false;
  registrationForm!: FormGroup;
  selected: any;

  rating: Rating[] = [
    { value: "Select", viewValue: 'Select a Rating' },
    { value: "1", viewValue: '=' },
    { value: "2", viewValue: '>' },
    { value: "3", viewValue: '<' },
    { value: "4", viewValue: '>=' },
    { value: "5", viewValue: '<=' },
  ];
  selectedRating = this.rating[0].value;
  filterBooks: any;
  books: { title: string, rating: string, content: string, price: string, availability: string }[] = [
    { title: 'Book1', rating: '1', content: 'Author1', price: '100', availability: 'NO' },
    { title: 'Book2', rating: '2', content: 'Author1', price: '40', availability: 'NO' },
    { title: 'Book3', rating: '3', content: 'Author3', price: '100', availability: 'YES' },
    { title: 'Book4', rating: '1', content: 'Author1', price: '60', availability: 'YES' },
    { title: 'Book5', rating: '3', content: 'Author5', price: '20', availability: 'NO' },
    { title: 'Book6', rating: '3', content: 'Author4', price: '10', availability: 'NO' },
    { title: 'Book7', rating: '4', content: 'Author7', price: '10', availability: 'YES' },
    { title: 'Book8', rating: '5', content: 'Author8', price: '50', availability: 'NO' },
    { title: 'Book16', rating: '4', content: 'Author16', price: '30', availability: 'NO' },
    { title: 'Book9', rating: '5', content: 'Author1', price: '500', availability: 'NO' },
    { title: 'Book10', rating: '1', content: 'Author1', price: '200', availability: 'YES' },
    { title: 'Book11', rating: '2', content: 'Author4', price: '300', availability: 'NO' },
    { title: 'Book12', rating: '3', content: 'Author1', price: '100', availability: 'NO' },
    { title: 'Book13', rating: '2', content: 'Author5', price: '300', availability: 'YES' },
    { title: 'Book14', rating: '2', content: 'Author3', price: '10', availability: 'YES' },
    { title: 'Book15', rating: '5', content: 'Author1', price: '104', availability: 'NO' }
  ];

  constructor(private authService: AuthService, private observer: BreakpointObserver, public fb: FormBuilder) {

    this.filterBooks = this.books;
    this.authService.dataObsevable.subscribe(val => {
      this.selectedId = val;
      this.navShow();
    })
  }

  get myForm() { return this.registrationForm.controls; }

  //set selected Emailid
  setSelectedId(eve: any) {
    this.selectedId = eve;
    console.log(this.selectedId);
  }

  // Submit Filter Form
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      this.filterBooks = this.books.filter(d => d.content == this.registrationForm.value.name || d.title == this.registrationForm.value.name
        || d.rating == this.selectedRating || d.price == this.registrationForm.value.price);
      this.navShow();
      return true;
    }
  }

  //show hover
  setHoverInfo(availability: string) {
    return `Availability is :: ${availability}
  and Date is :: ${this.registrationForm.value.toDate}`;
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      availability: ['', [Validators.required]],
      name: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      price: ['']
    });
  }

   //show/hide navbar
  navShow() {
    this.observer
      .observe(['(max-width: 500px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }


  //reset form
  resetForm() {
    this.filterBooks = this.books;
    this.registrationForm.reset();
  }

  //selected rating
  selectRating(event: Event) {
    this.selectedRating = (event.target as HTMLSelectElement).value;
  }
}


