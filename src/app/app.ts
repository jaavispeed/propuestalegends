import { Component, signal } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio';
import { PropuestaDosComponent } from './components/propuesta-dos/propuesta-dos';
import { PropuestaTresComponent } from './components/propuesta-tres/propuesta-tres';

@Component({
  imports: [InicioComponent, PropuestaDosComponent, PropuestaTresComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly propuestaActiva = signal<1 | 2 | 3>(1);

  protected seleccionarPropuesta(numero: 1 | 2 | 3): void {
    this.propuestaActiva.set(numero);
  }
}
