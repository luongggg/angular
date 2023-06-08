import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  key: string = "";
  constructor(
    private router: Router,
  ) { }
  onSearch() {
    this.router.navigateByUrl(`/search?key=${this.key}`);
  }
  logout(){
    localStorage.removeItem('auth')
    this.router.navigateByUrl(`/account`);
  }
  getLocalstorage(){
    if (!localStorage.getItem('auth')) return null;
    else return JSON.parse(localStorage.getItem('auth') as string)
  }
}