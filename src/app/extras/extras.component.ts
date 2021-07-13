import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras',
  //templateUrl: './extras.component.html',
  template:"<p>I'am a software enginner</p>",
  //styleUrls: ['./extras.component.css']
  styles:["p{background-color: red; text-align: center}"]
})
export class ExtrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
