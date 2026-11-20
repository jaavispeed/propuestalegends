import { Component, input, output } from '@angular/core';
import { Competencia } from '../../shared/models/competencia';

@Component({
  selector: 'app-detalle-competencia-modal',
  standalone: true,
  template: `
    @if (competencia(); as comp) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b132b]/80 backdrop-blur-md"
        (click)="cerrarModal()"
      >
        <div 
          class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1c2541] border border-[#38bdf8]/30 rounded-3xl p-6 md:p-8 text-white shadow-2xl transition-transform duration-200"
          (click)="$event.stopPropagation()"
        >
          <div class="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
            <div>
              <span class="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-[#0b132b] bg-[#38bdf8] rounded-full uppercase">
                Detalle Oficial de Competencia
              </span>
              <h3 class="font-display text-3xl md:text-4xl text-white tracking-wide">
                {{ comp.titulo }}
              </h3>
              <p class="text-sm text-[#38bdf8] mt-1">{{ comp.subtitulo }}</p>
            </div>
            <button 
              type="button"
              (click)="cerrarModal()"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors active:scale-95 focus-visible:outline-[#38bdf8]"
              aria-label="Cerrar modal"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5">
              <span class="text-xs uppercase tracking-wider text-slate-400 block mb-1">Fecha y Horario</span>
              <p class="text-white font-medium flex items-center gap-2">
                <span class="text-[#38bdf8]">🗓</span> {{ comp.fecha }}
              </p>
              <p class="text-xs text-slate-400 mt-1">🕒 {{ comp.hora }}</p>
            </div>

            <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5">
              <span class="text-xs uppercase tracking-wider text-slate-400 block mb-1">Valor de Inscripción</span>
              <p class="text-2xl font-bold text-[#38bdf8]">{{ comp.valorInscripcionFormateado }}</p>
              <p class="text-xs text-slate-400 mt-1">Cupos disponibles: {{ comp.cuposDisponibles }} / {{ comp.cuposTotales }}</p>
            </div>

            <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5">
              <span class="text-xs uppercase tracking-wider text-slate-400 block mb-1">Lugar y Recinto</span>
              <p class="text-white font-medium flex items-center gap-2">
                <span class="text-[#38bdf8]">📍</span> {{ comp.lugar }}
              </p>
              <p class="text-xs text-slate-400 mt-1">{{ comp.direccion }}, {{ comp.comuna }}</p>
            </div>

            <div class="bg-[#0b132b] p-4 rounded-2xl border border-white/5">
              <span class="text-xs uppercase tracking-wider text-slate-400 block mb-1">Organizador Responsable</span>
              <p class="text-white font-medium flex items-center gap-2">
                <span class="text-[#38bdf8]">🛡</span> {{ comp.organizador }}
              </p>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-xs uppercase tracking-wider text-[#38bdf8] font-bold mb-2">Categorías en Competencia</h4>
            <div class="flex flex-wrap gap-2">
              @for (cat of comp.categorias; track cat) {
                <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-200">
                  {{ cat }}
                </span>
              }
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-xs uppercase tracking-wider text-[#38bdf8] font-bold mb-2">Requisitos y Normativa</h4>
            <ul class="space-y-1.5 text-xs text-slate-300">
              @for (req of comp.requisitos; track req) {
                <li class="flex items-start gap-2">
                  <span class="text-[#38bdf8]">✔</span>
                  <span>{{ req }}</span>
                </li>
              }
            </ul>
          </div>

          <div class="mb-6 bg-gradient-to-r from-[#0b132b] to-[#1c2541] p-4 rounded-2xl border border-[#38bdf8]/20">
            <h4 class="text-xs uppercase tracking-wider text-[#38bdf8] font-bold mb-2">Premiación Oficial</h4>
            <ul class="space-y-1.5 text-xs text-slate-200">
              @for (premio of comp.premios; track premio) {
                <li class="flex items-start gap-2">
                  <span class="text-[#38bdf8]">🏆</span>
                  <span>{{ premio }}</span>
                </li>
              }
            </ul>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button 
              type="button"
              (click)="cerrarModal()"
              class="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors active:scale-95"
            >
              Cerrar
            </button>
            @if (comp.estado === 'inscripciones_abiertas') {
              <button 
                type="button"
                (click)="iniciarInscripcion(comp)"
                class="px-6 py-2.5 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-colors shadow-lg shadow-[#38bdf8]/20 active:scale-95"
              >
                Inscribirme Ahora ({{ comp.valorInscripcionFormateado }})
              </button>
            }
          </div>
        </div>
      </div>
    }
  `
})
export class DetalleCompetenciaModalComponent {
  readonly competencia = input<Competencia | null>(null);
  readonly cerrar = output<void>();
  readonly inscribir = output<Competencia>();

  protected cerrarModal(): void {
    this.cerrar.emit();
  }

  protected iniciarInscripcion(comp: Competencia): void {
    this.inscribir.emit(comp);
  }
}
