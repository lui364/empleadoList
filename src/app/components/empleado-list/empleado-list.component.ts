import { Component } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
 
  listEmpleados: Empleado [] = [
    {legajo:1,nombre:"Luis",apellido:"Pichardo",sexo:"Masculino",salario:2000},
    {legajo:2,nombre:"Juan",apellido:"Rodriguez",sexo:"Masculino",salario:2500},
    {legajo:3,nombre:"Esmeralda",apellido:"Rondon",sexo:"Femenino",salario:4000},
    {legajo:4,nombre:"Carlos",apellido:"Perez",sexo:"Femenino",salario:5000},
    {legajo:5,nombre:"Francisco",apellido:"Gonzales",sexo:"Femenino",salario:3000},
    {legajo:6,nombre:"Ramon",apellido:"Baez",sexo:"Masculino",salario:6000}
    ]
    radioButtonSeleccionado = "Todos"; 

    getTotalEmpleado():number{
      return this.listEmpleados.length;
    }

    getTotalFemenino():number{
      return this.listEmpleados.filter(list => list.sexo ==='Femenino').length;
    }

    getTotalMasculino():number{
      return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
    }

    empleadoRadioButtonChange(radioButtonSelec:string):void{
      this.radioButtonSeleccionado = radioButtonSelec;
    }
}
