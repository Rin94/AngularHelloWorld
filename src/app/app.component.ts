import { Component } from '@angular/core';

@Component({
  selector: 'app-roota',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miss app';
  saludos= 'es un Puto';
  currentCustomer= 'ElLokillo';

  getCustumer(){
    return this.currentCustomer;
  }
}


