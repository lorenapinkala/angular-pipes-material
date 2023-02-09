import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { MaterialModule } from './material.module';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { DirectivaPersonalizadaDirective } from './directive/directiva-personalizada.directive';
import { NombrePipe } from './pipes/nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    EditarAlumnoDialogComponent,
    DirectivaPersonalizadaDirective,
    NombrePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
