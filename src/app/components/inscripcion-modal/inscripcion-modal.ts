import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Competencia, FormularioInscripcion } from '../../shared/models/competencia';

@Component({
  selector: 'app-inscripcion-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (competencia(); as comp) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b132b]/85 backdrop-blur-md"
        (click)="cerrarModal()"
      >
        <div 
          class="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#1c2541] border border-[#38bdf8]/40 rounded-3xl p-6 md:p-8 text-white shadow-2xl transition-transform duration-200"
          (click)="$event.stopPropagation()"
        >
          @if (!registroExitoso()) {
            <div class="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <span class="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-[#0b132b] bg-[#38bdf8] rounded-full uppercase">
                  Ficha de Inscripción
                </span>
                <h3 class="font-display text-2xl md:text-3xl text-white tracking-wide">
                  {{ comp.titulo }}
                </h3>
                <p class="text-xs text-slate-300 mt-1">Completa tus datos para registrar tu postulación al torneo</p>
              </div>
              <button 
                type="button"
                (click)="cerrarModal()"
                class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors active:scale-95"
                aria-label="Cerrar modal"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5 mb-6 flex items-center justify-between text-xs">
              <div>
                <span class="text-slate-400 block">Valor de Referencia</span>
                <span class="text-lg font-bold text-[#38bdf8]">{{ comp.valorInscripcionFormateado }}</span>
              </div>
              <div class="text-right">
                <span class="text-slate-400 block">Lugar</span>
                <span class="text-white font-medium">{{ comp.lugar }}</span>
              </div>
            </div>

            <form (ngSubmit)="enviarInscripcion()" class="space-y-4">
              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1">Nombre Completo *</label>
                <input 
                  type="text" 
                  [(ngModel)]="formulario.nombreCompleto" 
                  name="nombreCompleto"
                  required
                  placeholder="Ej. Matías Silva" 
                  class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">RUT o Pasaporte *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formulario.rut" 
                    name="rut"
                    required
                    placeholder="12.345.678-9" 
                    class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Teléfono Móvil *</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="formulario.telefono" 
                    name="telefono"
                    required
                    placeholder="+56 9 1234 5678" 
                    class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1">Correo Electrónico *</label>
                <input 
                  type="email" 
                  [(ngModel)]="formulario.email" 
                  name="email"
                  required
                  placeholder="tu-correo@ejemplo.com" 
                  class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Categoría a Competir *</label>
                  <select 
                    [(ngModel)]="formulario.categoria" 
                    name="categoria"
                    class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                  >
                    @for (cat of comp.categorias; track cat) {
                      <option [value]="cat">{{ cat }}</option>
                    }
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Club o Comuna</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formulario.clubProcedencia" 
                    name="clubProcedencia"
                    placeholder="Legends / Independiente / Otro" 
                    class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
              </div>

              <div class="pt-4 flex items-center justify-between gap-4 border-t border-white/10">
                <button 
                  type="button"
                  (click)="cerrarModal()"
                  class="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 transition-colors active:scale-95"
                >
                  Cancelar
                </button>

                <button 
                  type="submit"
                  [disabled]="cargando()"
                  class="px-6 py-2.5 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-all shadow-lg shadow-[#38bdf8]/20 flex items-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  @if (cargando()) {
                    <svg class="animate-spin h-4 w-4 text-[#0b132b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Registrando...</span>
                  } @else {
                    <span>Enviar Inscripción</span>
                  }
                </button>
              </div>
            </form>
          } @else {
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-[#38bdf8]/40">
                ✓
              </div>
              <h3 class="font-display text-3xl text-white mb-2">¡INSCRIPCIÓN REGISTRADA!</h3>
              <p class="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Te has registrado correctamente para <strong>{{ comp.titulo }}</strong>. La organización revisará tus antecedentes y te contactará al correo o WhatsApp para coordinar los detalles.
              </p>

              <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                <div class="flex justify-between">
                  <span class="text-slate-400">Atleta:</span>
                  <span class="text-white font-medium">{{ formulario.nombreCompleto || 'Atleta Registrado' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Categoría:</span>
                  <span class="text-white font-medium">{{ formulario.categoria || 'Competencia Oficial' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Estado:</span>
                  <span class="text-[#38bdf8] font-bold">REGISTRO RECIBIDO ✓</span>
                </div>
              </div>

              <button 
                type="button" 
                (click)="cerrarModal()" 
                class="px-8 py-3 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-colors active:scale-95"
              >
                Volver al Sitio
              </button>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class InscripcionModalComponent {
  readonly competencia = input<Competencia | null>(null);
  readonly cerrar = output<void>();

  protected cargando = signal<boolean>(false);
  protected registroExitoso = signal<boolean>(false);

  protected formulario: FormularioInscripcion = {
    nombreCompleto: '',
    rut: '',
    email: '',
    telefono: '',
    categoria: '',
    clubProcedencia: ''
  };

  protected enviarInscripcion(): void {
    this.cargando.set(true);
    setTimeout(() => {
      this.cargando.set(false);
      this.registroExitoso.set(true);
    }, 600);
  }

  protected cerrarModal(): void {
    this.registroExitoso.set(false);
    this.cargando.set(false);
    this.cerrar.emit();
  }
}
