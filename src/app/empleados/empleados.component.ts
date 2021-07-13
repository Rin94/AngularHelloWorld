import {Component} from "@angular/core";
//acceder a esta clase
@Component({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",
  styleUrls: ["../app.component.css"]
})



export class EmpleadosComponent{
  textRegistro="No hay nadie registrado";

  setTextRegistro(event: Event,str: string){
    alert(event.target)//objeto del evento
    if ((<HTMLInputElement>event.target).value=="si"){
      this.textRegistro="Hay un usuario registrado un poco pendejo";
    }
    else {
      this
      this.textRegistro="No hay un usuario registrado. Pero como sea esta pendejo";
    }


  }
  extras="Google";
  cambiarExtras(event:Event){
    this.extras=(<HTMLInputElement>event.target).value

  }
  empleado=new EmpleadoEX("David", "Salinas",35,"Pildoras");
  llamaEmpresa(value:string){

  }
  habilitacionCuadro=false;//binding entre la propiedad y el input
  usRegistrado=false;

  getRegistroUsuario(){
    this.usRegistrado=false;
  }
  setUsuarioRegistrado(){
    alert("El usuario se acaba de registrar");
  }
}

export class EmpleadoEX{
  nombre="";
  apellido="";
  edad=15;
  empresa="";
  constructor(nombre:string, apellido:string, edad:number,empresa:string) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.empresa=empresa;
  }
  public setNombre(nombre:string){
    this.nombre=nombre;
  }
  public getNombre(){
    return this.nombre;
  }
  public setApellido(nombre:string){
    this.apellido=nombre;
  }
  public getApellido(){
    return this.apellido;
  }
  public setEdad(nombre:number){
    this.edad=nombre;
  }
  public getEdad(){
    return this.edad;
  }
  public setEmpresa(nombre:string){
    this.empresa=nombre;
  }
  public getEmpresa(){
    return this.empresa;
  }
}
