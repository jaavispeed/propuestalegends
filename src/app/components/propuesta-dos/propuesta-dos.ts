import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetenciasService } from '../../shared/services/competencias.service';
import { Competencia } from '../../shared/models/competencia';
import { DetalleCompetenciaModalComponent } from '../detalle-competencia-modal/detalle-competencia-modal';
import { InscripcionModalComponent } from '../inscripcion-modal/inscripcion-modal';

@Component({
  selector: 'app-propuesta-dos',
  standalone: true,
  imports: [FormsModule, DetalleCompetenciaModalComponent, InscripcionModalComponent],
  template: `
    <div class="bg-[#ffffff] text-[#0f172a] min-h-screen selection:bg-[#38bdf8] selection:text-[#0b132b]">
      
      <header class="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#0f172a]/8">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" class="flex items-center gap-2.5 sm:gap-3 active:scale-97 transition-transform">
            <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
            <div class="flex flex-col">
              <span class="font-bold text-xs sm:text-sm tracking-tight text-[#0f172a] leading-none">Space Of Competitions</span>
              <span class="text-[9px] sm:text-[10px] tracking-tight text-[#475569]">Liga Oficial • Club Legends</span>
            </div>
          </a>

          <nav class="hidden lg:flex items-center gap-7 text-xs font-normal text-[#475569]">
            <a href="#p2-soc" class="hover:text-[#0f172a] transition-colors">Ecosistema</a>
            <a href="#p2-competencias" class="hover:text-[#0f172a] transition-colors">Torneos</a>
            <a href="#p2-taxonomy" class="hover:text-[#0f172a] transition-colors">Pilares</a>
            <a href="#p2-legends" class="hover:text-[#0f172a] transition-colors">Legends Workout</a>
            <a href="#p2-inscripciones" class="hover:text-[#0f172a] transition-colors">Registro</a>
          </nav>

          <div class="flex items-center gap-2.5">
            <a 
              href="#p2-inscripciones"
              class="hidden sm:inline-flex px-4 py-2 rounded-lg text-xs font-medium bg-[#0f172a] hover:bg-[#0b132b] text-white transition-all active:scale-95 shadow-sm"
            >
              Inscribirse
            </a>

            <button 
              type="button" 
              (click)="menuAbierto.set(!menuAbierto())"
              class="lg:hidden p-2 rounded-lg bg-black/5 hover:bg-black/10 text-[#0f172a] transition-colors active:scale-95"
              aria-label="Menú móvil"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if (menuAbierto()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        @if (menuAbierto()) {
          <nav class="lg:hidden bg-white border-b border-[#0f172a]/8 px-6 py-4 flex flex-col gap-3 text-xs font-normal text-[#475569] shadow-lg animate-in fade-in duration-150">
            <a (click)="menuAbierto.set(false)" href="#p2-soc" class="py-2 hover:text-[#0f172a] border-b border-slate-100">Ecosistema SOC</a>
            <a (click)="menuAbierto.set(false)" href="#p2-competencias" class="py-2 hover:text-[#0f172a] border-b border-slate-100">Torneos</a>
            <a (click)="menuAbierto.set(false)" href="#p2-taxonomy" class="py-2 hover:text-[#0f172a] border-b border-slate-100">Pilares Deportivos</a>
            <a (click)="menuAbierto.set(false)" href="#p2-legends" class="py-2 hover:text-[#0f172a] border-b border-slate-100">Club Legends</a>
            <a (click)="menuAbierto.set(false)" href="#p2-inscripciones" class="py-2 font-medium text-[#0284c7]">Inscribirme</a>
          </nav>
        }
      </header>

      <section class="relative pt-16 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#ffffff] to-[#ffffff]">
        <div class="max-w-[1200px] mx-auto text-center flex flex-col items-center relative z-10">
          
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#bae6fd] shadow-sm mb-6 sm:mb-8">
            <span class="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span class="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#0284c7] font-semibold">
              Propuesta Editorial & Ecosistema Deportivo
            </span>
          </div>

          <h1 class="text-4xl sm:text-7xl md:text-8xl font-black text-[#0f172a] uppercase tracking-[-1.5px] sm:tracking-[-2.5px] leading-[0.92] sm:leading-[0.88] max-w-4xl mb-6 sm:mb-8">
            SPACE OF <span class="text-[#0284c7]">COMPETITIONS</span>
          </h1>

          <p class="text-sm sm:text-xl font-normal text-[#475569] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed tracking-[-0.2px] sm:tracking-[-0.4px] px-2">
            La infraestructura que profesionaliza la calistenia en Chile. Normativas unificadas, jurados certificados y torneos oficiales para atletas de élite y su club insignia <strong>Legends</strong>.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 mb-12 sm:mb-16">
            <a 
              href="#p2-competencias"
              class="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-normal bg-[#0f172a] hover:bg-[#0b132b] text-white transition-all active:scale-95 shadow-sm text-center"
            >
              Ver Calendario Oficial
            </a>
            <a 
              href="#p2-legends"
              class="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-normal bg-[#e0f2fe] hover:bg-[#bae6fd] text-[#0284c7] transition-all active:scale-95 text-center"
            >
              Sobre Club Legends
            </a>
          </div>

          <div class="w-full max-w-4xl rounded-2xl bg-[#0b132b] border border-[#0f172a]/10 overflow-hidden shadow-2xl p-2 sm:p-4 text-left">
            <div class="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black relative flex items-center justify-center group">
              <img 
                src="assets/precentacion.png" 
                alt="Presentación Space Of Competitions" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-8">
                <div>
                  <span class="text-[10px] sm:text-xs uppercase font-bold text-[#38bdf8] tracking-widest block mb-1">CIRCUITO NACIONAL</span>
                  <h3 class="text-xl sm:text-3xl font-medium text-white tracking-tight">Ecosistema Federado de Street Workout</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="p2-taxonomy" class="py-16 sm:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#0f172a]/6">
        <div class="mb-10 sm:mb-14">
          <span class="text-xs font-semibold uppercase tracking-wider text-[#0284c7] block mb-2">Estructura por Categorías</span>
          <h2 class="text-2xl sm:text-5xl font-normal text-[#0f172a] tracking-[-1.5px] max-w-xl">
            Cuatro pilares que impulsan el rendimiento atlético.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-[#bae6fd] rounded-xl p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#0369a1] block mb-2">01 / REGLAMENTO</span>
              <h3 class="text-lg sm:text-xl font-normal text-[#0f172a] tracking-tight mb-2">Jueces Certificados</h3>
              <p class="text-xs text-[#0f172a]/80 leading-relaxed">
                Rúbricas internacionales para evaluar dinamia, estáticos y fluidez sin ambigüedades.
              </p>
            </div>
            <span class="text-xs font-medium text-[#0369a1] mt-4">Auditoría SOC →</span>
          </div>

          <div class="bg-[#a5f3fc] rounded-xl p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#0e7490] block mb-2">02 / RANKING</span>
              <h3 class="text-lg sm:text-xl font-normal text-[#0f172a] tracking-tight mb-2">Puntaje Nacional</h3>
              <p class="text-xs text-[#0f172a]/80 leading-relaxed">
                Cada evento computa puntos para el ranking chileno con proyección a torneos mundiales.
              </p>
            </div>
            <span class="text-xs font-medium text-[#0e7490] mt-4">Tabla de Posiciones →</span>
          </div>

          <div class="bg-[#bfdbfe] rounded-xl p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#1d4ed8] block mb-2">03 / COMUNIDAD</span>
              <h3 class="text-lg sm:text-xl font-normal text-[#0f172a] tracking-tight mb-2">Club Legends</h3>
              <p class="text-xs text-[#0f172a]/80 leading-relaxed">
                Semillero comunal en Lo Prado forjando atletas con disciplina, técnica y valores.
              </p>
            </div>
            <span class="text-xs font-medium text-[#1d4ed8] mt-4">Conocer Club →</span>
          </div>

          <div class="bg-[#e0e7ff] rounded-xl p-6 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#4338ca] block mb-2">04 / SEGURIDAD</span>
              <h3 class="text-lg sm:text-xl font-normal text-[#0f172a] tracking-tight mb-2">Infraestructura</h3>
              <p class="text-xs text-[#0f172a]/80 leading-relaxed">
                Estructuras probadas, colchonetas de amortiguación certificadas y apoyo médico en recintos.
              </p>
            </div>
            <span class="text-xs font-medium text-[#4338ca] mt-4">Estándares Seguros →</span>
          </div>
        </div>
      </section>

      <section id="p2-competencias" class="py-16 sm:py-24 px-4 sm:px-6 bg-[#f0f9ff] border-t border-b border-[#0f172a]/6">
        <div class="max-w-[1200px] mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-[#0284c7] block mb-2">Temporada Activa</span>
              <h2 class="text-3xl sm:text-5xl font-normal text-[#0f172a] tracking-[-1.5px]">
                Calendario de Competencias
              </h2>
            </div>
            <p class="text-xs text-[#475569] max-w-sm leading-relaxed">
              Fechas homologadas por Space Of Competitions. Conoce los recintos, organizadores y valor referencial.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (comp of servicioCompetencias.competencias(); track comp.id) {
              <div class="bg-white rounded-xl p-5 sm:p-6 border border-[#0f172a]/8 flex flex-col justify-between shadow-[rgba(17,17,17,0.02)_0px_-6px_6px_0px]">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-4">
                    <span 
                      class="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full"
                      [class.bg-[#bae6fd]]="comp.estado === 'inscripciones_abiertas'"
                      [class.text-[#0369a1]]="comp.estado === 'inscripciones_abiertas'"
                      [class.bg-[#f1f5f9]]="comp.estado !== 'inscripciones_abiertas'"
                      [class.text-[#64748b]]="comp.estado !== 'inscripciones_abiertas'"
                    >
                      {{ comp.estado === 'inscripciones_abiertas' ? 'Inscripciones Abiertas' : 'Próximamente' }}
                    </span>
                    <span class="text-xs font-bold text-[#0284c7]">{{ comp.valorInscripcionFormateado }}</span>
                  </div>

                  <h3 class="text-xl font-normal text-[#0f172a] tracking-tight mb-2">
                    {{ comp.titulo }}
                  </h3>
                  <p class="text-xs text-[#475569] mb-6 leading-relaxed">
                    {{ comp.subtitulo }}
                  </p>

                  <div class="space-y-2 text-xs text-[#475569] mb-6 p-3 bg-[#f0f9ff] rounded-lg border border-[#bae6fd]/50">
                    <div class="flex items-center gap-2">
                      <span class="text-[#0284c7]">🗓</span>
                      <span>{{ comp.fecha }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[#0284c7]">📍</span>
                      <span class="truncate">{{ comp.lugar }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[#0284c7]">🛡</span>
                      <span class="truncate">{{ comp.organizador }}</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2 pt-4 border-t border-[#0f172a]/6">
                  <button 
                    type="button"
                    (click)="abrirModalDetalle(comp)"
                    class="flex-1 py-2 px-3 rounded-lg text-xs font-normal bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] transition-all active:scale-95 text-center"
                  >
                    Detalle
                  </button>
                  @if (comp.estado === 'inscripciones_abiertas') {
                    <button 
                      type="button"
                      (click)="abrirModalInscripcion(comp)"
                      class="py-2 px-4 rounded-lg text-xs font-medium bg-[#0f172a] hover:bg-[#0b132b] text-white transition-all active:scale-95"
                    >
                      Inscribirse
                    </button>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <section id="p2-legends" class="py-16 sm:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#0284c7] block mb-2">Club Insignia</span>
            <h2 class="text-3xl sm:text-5xl font-normal text-[#0f172a] tracking-[-1.5px] leading-tight mb-6">
              Legends Street Workout
            </h2>
            <p class="text-sm text-[#475569] leading-relaxed mb-4">
              Perteneciente al ecosistema SOC, <strong>Legends</strong> nació en 2019 en la comuna de Lo Prado (Santiago). Es el hogar donde la disciplina y el entrenamiento de calistenia se transforman en hermandad comunitaria.
            </p>
            <p class="text-sm text-[#475569] leading-relaxed mb-8">
              Guiados por el símbolo del Fénix, sus atletas compiten en las citas más exigentes del país y lideran el torneo <em>Battle of Legends</em>.
            </p>

            <div class="flex items-center gap-6 sm:gap-8 border-t border-[#0f172a]/8 pt-6">
              <div>
                <span class="text-2xl sm:text-3xl font-normal text-[#0f172a] block tracking-tight">2019</span>
                <span class="text-[10px] sm:text-[11px] text-[#475569] uppercase tracking-wider">Fundación</span>
              </div>
              <div>
                <span class="text-2xl sm:text-3xl font-normal text-[#0f172a] block tracking-tight">+150</span>
                <span class="text-[10px] sm:text-[11px] text-[#475569] uppercase tracking-wider">Atletas</span>
              </div>
              <div>
                <span class="text-2xl sm:text-3xl font-normal text-[#0f172a] block tracking-tight">Lo Prado</span>
                <span class="text-[10px] sm:text-[11px] text-[#475569] uppercase tracking-wider">Cuna Deportiva</span>
              </div>
            </div>
          </div>

          <div class="bg-[#0b132b] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div class="w-full aspect-square rounded-xl overflow-hidden bg-black/40 mb-6 border border-white/10">
              <img 
                src="assets/nuevo.png" 
                alt="Arte SOC & Legends" 
                class="w-full h-full object-cover" 
              />
            </div>
            <h3 class="text-xl sm:text-2xl font-normal text-white mb-2 tracking-tight">Cultura y Superación</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              En las barras cada atleta aprende a superar sus límites con constancia y humildad. La unión entre SOC y Legends forja el futuro del street workout en Chile.
            </p>
          </div>
        </div>
      </section>

      <section id="p2-inscripciones" class="py-16 sm:py-24 px-4 sm:px-6 bg-[#0b132b] text-white">
        <div class="max-w-[1200px] mx-auto">
          
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-semibold uppercase tracking-wider text-[#38bdf8] block mb-2">Convocatorias Abiertas</span>
            <h2 class="text-3xl sm:text-5xl font-normal text-white tracking-[-1.5px] leading-tight mb-3">
              Registra tu participación en los torneos oficiales.
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Completa el formulario de inscripción para reservar tu cupo de competencia en el circuito SOC.
            </p>
          </div>

          <div class="max-w-2xl mx-auto bg-[#1c2541] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            @if (envioDirectoExitoso()) {
              <div class="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
                <div class="w-12 h-12 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto mb-4 text-xl border border-[#38bdf8]/40">
                  ✓
                </div>
                <h3 class="text-xl font-medium text-white mb-2">¡Inscripción recibida!</h3>
                <p class="text-xs text-slate-300 max-w-md mx-auto mb-6">
                  Nos comunicaremos a la brevedad contigo para coordinar el proceso de acreditación.
                </p>
                <button 
                  type="button" 
                  (click)="reiniciarFormularioDirecto()"
                  class="px-5 py-2.5 rounded-lg text-xs font-medium bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#0b132b] transition-all active:scale-95"
                >
                  Registrar otro atleta
                </button>
              </div>
            } @else {
              <form (ngSubmit)="enviarFormularioDirecto()" class="space-y-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Competencia *</label>
                  <select 
                    [(ngModel)]="formularioDirecto.torneoSeleccionado" 
                    name="torneoSeleccionado"
                    required
                    class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                  >
                    @for (comp of competenciasDisponibles(); track comp.id) {
                      <option [value]="comp.titulo">
                        {{ comp.titulo }} ({{ comp.valorInscripcionFormateado }})
                      </option>
                    }
                  </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">Nombre Completo *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.nombreCompleto" 
                      name="nombreCompleto"
                      required
                      placeholder="Ej. Matías Silva" 
                      class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">RUT o Pasaporte *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.rut" 
                      name="rut"
                      required
                      placeholder="12.345.678-9" 
                      class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      [(ngModel)]="formularioDirecto.email" 
                      name="email"
                      required
                      placeholder="atleta@ejemplo.com" 
                      class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">Teléfono Móvil *</label>
                    <input 
                      type="tel" 
                      [(ngModel)]="formularioDirecto.telefono" 
                      name="telefono"
                      required
                      placeholder="+56 9 1234 5678" 
                      class="w-full px-4 py-2.5 bg-[#0b132b] border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div class="pt-2 flex justify-end">
                  <button 
                    type="submit"
                    [disabled]="cargandoDirecto()"
                    class="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-medium bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#0b132b] transition-all active:scale-95 disabled:opacity-50"
                  >
                    @if (cargandoDirecto()) {
                      <span>Enviando...</span>
                    } @else {
                      <span>Enviar Inscripción</span>
                    }
                  </button>
                </div>
              </form>
            }
          </div>

        </div>
      </section>

      <footer class="py-10 px-4 sm:px-6 border-t border-[#0f172a]/8 text-xs text-[#475569] bg-white">
        <div class="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div class="flex items-center gap-3">
            <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-6 w-6 object-contain" />
            <span>© 2019 - 2026 Space Of Competitions. Propuesta de Diseño 2 (Editorial & Taxonomy).</span>
          </div>
          <div class="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
            <a href="#p2-soc" class="hover:text-[#0f172a] transition-colors">Ecosistema</a>
            <a href="#p2-competencias" class="hover:text-[#0f172a] transition-colors">Torneos</a>
            <a href="#p2-legends" class="hover:text-[#0f172a] transition-colors">Club Legends</a>
            <a href="#p2-inscripciones" class="hover:text-[#0f172a] transition-colors">Inscripciones</a>
          </div>
        </div>
      </footer>

      <app-detalle-competencia-modal 
        [competencia]="competenciaDetalleSeleccionada()"
        (cerrar)="cerrarModalDetalle()"
        (inscribir)="manejarInscripcionDesdeDetalle($event)"
      />

      <app-inscripcion-modal 
        [competencia]="competenciaInscripcionSeleccionada()"
        (cerrar)="cerrarModalInscripcion()"
      />

    </div>
  `
})
export class PropuestaDosComponent {
  protected readonly servicioCompetencias = inject(CompetenciasService);

  protected readonly menuAbierto = signal<boolean>(false);
  protected readonly competenciaDetalleSeleccionada = signal<Competencia | null>(null);
  protected readonly competenciaInscripcionSeleccionada = signal<Competencia | null>(null);

  protected readonly cargandoDirecto = signal<boolean>(false);
  protected readonly envioDirectoExitoso = signal<boolean>(false);

  protected formularioDirecto = {
    torneoSeleccionado: 'BATTLE OF LEGENDS CHILE 2026',
    nombreCompleto: '',
    rut: '',
    email: '',
    telefono: ''
  };

  protected competenciasDisponibles(): Competencia[] {
    return this.servicioCompetencias.competencias().filter(c => c.estado === 'inscripciones_abiertas');
  }

  protected abrirModalDetalle(comp: Competencia): void {
    this.competenciaDetalleSeleccionada.set(comp);
  }

  protected cerrarModalDetalle(): void {
    this.competenciaDetalleSeleccionada.set(null);
  }

  protected abrirModalInscripcion(comp: Competencia): void {
    this.competenciaInscripcionSeleccionada.set(comp);
  }

  protected cerrarModalInscripcion(): void {
    this.competenciaInscripcionSeleccionada.set(null);
  }

  protected manejarInscripcionDesdeDetalle(comp: Competencia): void {
    this.cerrarModalDetalle();
    this.abrirModalInscripcion(comp);
  }

  protected enviarFormularioDirecto(): void {
    this.cargandoDirecto.set(true);
    setTimeout(() => {
      this.cargandoDirecto.set(false);
      this.envioDirectoExitoso.set(true);
    }, 600);
  }

  protected reiniciarFormularioDirecto(): void {
    this.formularioDirecto = {
      torneoSeleccionado: 'BATTLE OF LEGENDS CHILE 2026',
      nombreCompleto: '',
      rut: '',
      email: '',
      telefono: ''
    };
    this.envioDirectoExitoso.set(false);
  }
}
