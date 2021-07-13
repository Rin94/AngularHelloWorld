import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados=
    ["Jared Daniel Salinas González",
      "Jonathan Martínez de Casas",
      'David Del Real Sifuentes',];

  constructor() { }

  ngOnInit(): void {
  }

}
