import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno} from 'src/app/models/alumnos';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnos: Alumno[] = [
    {nombre: 'Juana', apellido:'Garcia', comision: '3434', materia: 'Matematicas'},
    {nombre: 'Pamela', apellido:'Sosa', comision: '5454', materia: 'Ciencias'},
    {nombre: 'Anacleto', apellido:'Ramallo', comision: '7676', materia: 'Gramatica'},
    {nombre: 'Filomena', apellido:'Rivas', comision: '9898', materia: 'Historia'},
  ];
  
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['nombre', 'comision', 'materia', 'acciones'];

  constructor(
    private dialog: MatDialog
  ){

  }

  agregar(){
    console.log('agrego estudiante')
  }

  modificar(element:Alumno){
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data:element
    });
    
  }

  eliminar(){
    console.log('elimino estudiante')
  }
}
