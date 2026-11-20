import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetenciasService } from '../../shared/services/competencias.service';
import { Competencia } from '../../shared/models/competencia';
import { DetalleCompetenciaModalComponent } from '../detalle-competencia-modal/detalle-competencia-modal';
import { InscripcionModalComponent } from '../inscripcion-modal/inscripcion-modal';

@Component({
  selector: 'app-propuesta-tres',
  standalone: true,
  imports: [FormsModule, DetalleCompetenciaModalComponent, InscripcionModalComponent],
  template: `
    <div class="bg-[#050811] text-white min-h-screen selection:bg-[#38bdf8] selection:text-[#050811] font-sans antialiased">
      
      <div class="bg-[#0b132b] border-b border-white/5 py-2 px-4 sm:px-8 text-center">
        <p class="text-[11px] font-bold tracking-widest uppercase text-slate-300">
          CONVOCATORIA NACIONAL DE STREET WORKOUT <span class="text-[#38bdf8] mx-2">•</span> TEMPORADA 2026/2027 ABIERTA
        </p>
      </div>

      <header class="sticky top-0 z-40 bg-[#050811]/90 backdrop-blur-xl border-b border-white/10">
        <div class="max-w-[1300px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" class="flex items-center gap-3 active:scale-97 transition-transform">
            <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-9 w-9 object-contain" />
            <div class="flex flex-col">
              <span class="font-black text-xl tracking-tighter uppercase italic text-white leading-none">SPACE OF COMPETITIONS</span>
              <span class="text-[9px] uppercase tracking-widest text-[#38bdf8] font-bold">LIGA DE CALISTENIA • CLUB LEGENDS</span>
            </div>
          </a>

          <nav class="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-300">
            <a href="#nike-intro" class="hover:text-white transition-colors">VISIÓN SOC</a>
            <a href="#nike-competencias" class="hover:text-white transition-colors">TORNEOS OFICIALES</a>
            <a href="#nike-legends" class="hover:text-white transition-colors">CLUB LEGENDS</a>
            <a href="#nike-inscripciones" class="hover:text-[#38bdf8] transition-colors">INSCRIPCIONES</a>
          </nav>

          <div class="flex items-center gap-3">
            <a 
              href="#nike-inscripciones" 
              class="hidden sm:inline-flex px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-[#050811] hover:bg-[#38bdf8] transition-all active:scale-95 shadow-md"
            >
              INSCRIBIRSE AHORA
            </a>

            <button 
              type="button" 
              (click)="menuAbierto.set(!menuAbierto())"
              class="lg:hidden p-2.5 rounded-full bg-white/10 text-white active:scale-95"
              aria-label="Menú móvil"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <nav class="lg:hidden bg-[#070c1b] border-b border-white/10 px-6 py-5 flex flex-col gap-3 text-xs font-black uppercase tracking-wider shadow-2xl animate-in fade-in duration-150">
            <a (click)="menuAbierto.set(false)" href="#nike-intro" class="py-2 hover:text-[#38bdf8] border-b border-white/5">VISIÓN SOC</a>
            <a (click)="menuAbierto.set(false)" href="#nike-competencias" class="py-2 hover:text-[#38bdf8] border-b border-white/5">TORNEOS OFICIALES</a>
            <a (click)="menuAbierto.set(false)" href="#nike-legends" class="py-2 hover:text-[#38bdf8] border-b border-white/5">CLUB LEGENDS</a>
            <a (click)="menuAbierto.set(false)" href="#nike-inscripciones" class="py-2 text-[#38bdf8]">INSCRIPCIÓN DE ATLETAS</a>
          </nav>
        }
      </header>

      <section class="relative min-h-[90vh] flex flex-col justify-end px-4 sm:px-8 pb-16 pt-32 overflow-hidden border-b border-white/10 bg-[#050811]">
        <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-25">
          <img 
            src="assets/planeta%20blanco.png" 
            alt="SOC Universo" 
            class="w-[1250px] sm:w-[1450px] md:w-[1650px] max-w-none select-none object-contain"
            loading="eager"
            decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/30 to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-[1300px] mx-auto w-full">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span class="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
            <span class="text-[11px] font-black uppercase tracking-widest text-[#38bdf8]">
              DOMINA LA GRAVEDAD • SPACE OF COMPETITIONS
            </span>
          </div>

          <h1 class="text-6xl sm:text-8xl md:text-[110px] lg:text-[130px] font-black italic uppercase tracking-tighter leading-[0.85] mb-8 select-none">
            EL PODER ESTÁ <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bae6fd] to-[#38bdf8]">
              EN LAS BARRAS.
            </span>
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <p class="md:col-span-7 text-base sm:text-xl text-slate-300 font-medium leading-relaxed tracking-tight max-w-2xl">
              SOC es la liga y organización oficial que profesionaliza el street workout en Chile. Sin excusas. Sin atajos. Normativas implacables, jurados de clase mundial y los atletas de élite de nuestro club emblema: <strong>Legends Street Workout</strong>.
            </p>

            <div class="md:col-span-5 flex flex-col sm:flex-row gap-4">
              <a 
                href="#nike-competencias"
                class="px-8 py-4 rounded-full bg-white text-[#050811] hover:bg-[#38bdf8] font-black text-sm uppercase tracking-wider transition-all active:scale-95 text-center shadow-lg"
              >
                VER COMPETENCIAS
              </a>
              <a 
                href="#nike-inscripciones"
                class="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-sm uppercase tracking-wider transition-all active:scale-95 text-center backdrop-blur-md"
              >
                REGISTRARTE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nike-intro" class="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 bg-[#070c1b]">
        <div class="max-w-[1300px] mx-auto">
          <div class="max-w-3xl mb-16">
            <span class="text-xs font-black uppercase tracking-widest text-[#38bdf8] block mb-3">LA REVOLUCIÓN DEL STREET WORKOUT</span>
            <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
              NO ENTRENAS PARA PARTICIPAR. ENTRENAS PARA SER LEYENDA.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#0b132b]/80 border border-white/10 rounded-3xl p-8 hover:border-[#38bdf8]/50 transition-all group">
              <div class="text-3xl font-black text-[#38bdf8] mb-4">01</div>
              <h3 class="text-2xl font-black italic uppercase tracking-tight mb-3">REGLAMENTO Y JUECES PRO</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Evaluaciones de máxima exigencia. Penalizaciones por balanceo innecesario, ángulos estrictos y reconocimiento real a la fuerza pura.
              </p>
            </div>

            <div class="bg-[#0b132b]/80 border border-white/10 rounded-3xl p-8 hover:border-[#38bdf8]/50 transition-all group">
              <div class="text-3xl font-black text-[#38bdf8] mb-4">02</div>
              <h3 class="text-2xl font-black italic uppercase tracking-tight mb-3">CIRCUITO Y RANKING</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cada batalla ganada suma al ranking anual de Space Of Competitions. Los mejores atletas acceden a plazas en torneos sudamericanos.
              </p>
            </div>

            <div class="bg-[#0b132b]/80 border border-white/10 rounded-3xl p-8 hover:border-[#38bdf8]/50 transition-all group">
              <div class="text-3xl font-black text-[#38bdf8] mb-4">03</div>
              <h3 class="text-2xl font-black italic uppercase tracking-tight mb-3">EL FÉNIX DE LEGENDS</h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El club deportivo nacido en Lo Prado desde 2019 que encarna la disciplina, la superación personal y la hermandad en las barras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="nike-competencias" class="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 bg-[#050811]">
        <div class="max-w-[1300px] mx-auto">
          
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span class="text-xs font-black uppercase tracking-widest text-[#38bdf8] block mb-3">TEMPORADA OFICIAL</span>
              <h2 class="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                CALENDARIO DE BATALLAS
              </h2>
            </div>
            <p class="text-xs sm:text-sm text-slate-400 max-w-md">
              Asegura tu cupo en la tarima oficial de Space Of Competitions y compite frente a los mejores exponentes del país.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (comp of servicioCompetencias.competencias(); track comp.id) {
              <div class="bg-[#0b132b] rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-[#38bdf8]/60 transition-all hover:-translate-y-1 duration-200">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span 
                      class="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                      [class.bg-[#38bdf8]]="comp.estado === 'inscripciones_abiertas'"
                      [class.text-[#050811]]="comp.estado === 'inscripciones_abiertas'"
                      [class.bg-white/10]="comp.estado !== 'inscripciones_abiertas'"
                      [class.text-slate-400]="comp.estado !== 'inscripciones_abiertas'"
                    >
                      {{ comp.estado === 'inscripciones_abiertas' ? 'CONVOCATORIA ABIERTA' : 'PRÓXIMAMENTE' }}
                    </span>
                    <span class="text-sm font-black text-white">{{ comp.valorInscripcionFormateado }}</span>
                  </div>

                  <div class="w-full h-40 rounded-2xl bg-black/60 overflow-hidden mb-6 flex items-center justify-center p-4 border border-white/5">
                    <img 
                      [src]="comp.id === 'battle-of-legends-2026' ? 'assets/logo_battleoflegends.png' : 'assets/foto%20de%20perfil.png'" 
                      [alt]="comp.titulo" 
                      class="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h3 class="text-2xl font-black italic uppercase tracking-tight mb-2 text-white">
                    {{ comp.titulo }}
                  </h3>
                  <p class="text-xs text-slate-400 mb-6 leading-relaxed">
                    {{ comp.subtitulo }}
                  </p>

                  <div class="space-y-2 text-xs bg-black/40 p-4 rounded-2xl border border-white/5 mb-6 text-slate-300">
                    <div class="flex items-center gap-2">
                      <span class="text-[#38bdf8] font-bold">FECHA:</span>
                      <span>{{ comp.fecha }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[#38bdf8] font-bold">LUGAR:</span>
                      <span class="truncate">{{ comp.lugar }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[#38bdf8] font-bold">ORGANIZA:</span>
                      <span class="truncate">{{ comp.organizador }}</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <button 
                    type="button"
                    (click)="abrirModalDetalle(comp)"
                    class="flex-1 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 text-center"
                  >
                    Bases
                  </button>
                  @if (comp.estado === 'inscripciones_abiertas') {
                    <button 
                      type="button"
                      (click)="abrirModalInscripcion(comp)"
                      class="flex-1 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#38bdf8] hover:bg-white text-[#050811] transition-all active:scale-95 text-center font-bold"
                    >
                      Inscribirme
                    </button>
                  }
                </div>
              </div>
            }
          </div>

        </div>
      </section>

      <section id="nike-legends" class="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/10 bg-white text-[#050811]">
        <div class="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          <div class="lg:col-span-7">
            <span class="text-xs font-black uppercase tracking-widest text-[#0284c7] block mb-3">CLUB FEDERADO EMBLEMA</span>
            <h2 class="text-5xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.88] mb-6">
              LEGENDS STREET WORKOUT
            </h2>
            <p class="text-base text-slate-700 leading-relaxed font-medium mb-6">
              Fundado en 2019 en la comuna de <strong>Lo Prado, Santiago de Chile</strong>, Legends es el corazón atlético que impulsa el circuito competitivo de SOC.
            </p>
            <p class="text-base text-slate-700 leading-relaxed font-medium mb-8">
              Inspirados en la resiliencia del <strong>Fénix</strong>, enseñamos que cada caída es solo el inicio del renacer con mayor fuerza. Nuestros atletas entrenan día a día en las barras para elevar el estándar de la calistenia nacional.
            </p>

            <div class="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <span class="text-4xl sm:text-5xl font-black italic text-[#0284c7] block leading-none">2019</span>
                <span class="text-[10px] sm:text-xs font-bold uppercase text-slate-500 tracking-wider">AÑO FUNDACIÓN</span>
              </div>
              <div>
                <span class="text-4xl sm:text-5xl font-black italic text-[#0284c7] block leading-none">+150</span>
                <span class="text-[10px] sm:text-xs font-bold uppercase text-slate-500 tracking-wider">ATLETAS ACTIVOS</span>
              </div>
              <div>
                <span class="text-4xl sm:text-5xl font-black italic text-[#0284c7] block leading-none">LO PRADO</span>
                <span class="text-[10px] sm:text-xs font-bold uppercase text-slate-500 tracking-wider">SANTIAGO 🇨🇱</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl bg-[#050811] p-3">
              <img 
                src="assets/nuevo.png" 
                alt="Legends Workout" 
                class="w-full aspect-square object-cover rounded-2xl" 
              />
            </div>
          </div>

        </div>
      </section>

      <section id="nike-inscripciones" class="py-20 sm:py-28 px-4 sm:px-8 bg-[#050811]">
        <div class="max-w-[1000px] mx-auto bg-gradient-to-br from-[#0b132b] to-[#070c1b] border border-white/15 rounded-3xl p-6 sm:p-14 shadow-2xl">
          
          <div class="text-center mb-12">
            <span class="text-xs font-black uppercase tracking-widest text-[#38bdf8] block mb-3">CONVOCATORIA DIRECTA</span>
            <h2 class="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">
              REGISTRO OFICIAL DE ATLETAS
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Elige tu competencia y completa la ficha de postulación. Los cupos son limitados por categoría.
            </p>
          </div>

          @if (envioDirectoExitoso()) {
            <div class="bg-white/5 border border-[#38bdf8]/40 rounded-2xl p-8 text-center animate-in fade-in duration-200">
              <div class="w-14 h-14 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black border border-[#38bdf8]/40">
                ✓
              </div>
              <h3 class="text-2xl sm:text-3xl font-black italic uppercase text-white mb-2">¡POSTULACIÓN ENVIADA!</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                Tu solicitud ha sido recibida por la comisión de Space Of Competitions. Nos pondremos en contacto contigo para coordinar tu acreditación.
              </p>
              <button 
                type="button" 
                (click)="reiniciarFormularioDirecto()"
                class="px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-[#050811] hover:bg-[#38bdf8] transition-all active:scale-95"
              >
                REGISTRAR OTRA POSTULACIÓN
              </button>
            </div>
          } @else {
            <form (ngSubmit)="enviarFormularioDirecto()" class="space-y-5">
              <div>
                <label class="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">TORNEO OFICIAL *</label>
                <select 
                  [(ngModel)]="formularioDirecto.torneoSeleccionado" 
                  name="torneoSeleccionado"
                  required
                  class="w-full px-5 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-bold focus:outline-none focus:border-[#38bdf8]"
                >
                  @for (comp of competenciasDisponibles(); track comp.id) {
                    <option [value]="comp.titulo" class="bg-[#0b132b]">
                      {{ comp.titulo }} ({{ comp.valorInscripcionFormateado }})
                    </option>
                  }
                </select>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">NOMBRE COMPLETO *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formularioDirecto.nombreCompleto" 
                    name="nombreCompleto"
                    required
                    placeholder="Ej. Matías Silva" 
                    class="w-full px-5 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-bold focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">RUT O PASAPORTE *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formularioDirecto.rut" 
                    name="rut"
                    required
                    placeholder="12.345.678-9" 
                    class="w-full px-5 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-bold focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">CORREO ELECTRÓNICO *</label>
                  <input 
                    type="email" 
                    [(ngModel)]="formularioDirecto.email" 
                    name="email"
                    required
                    placeholder="atleta@ejemplo.com" 
                    class="w-full px-5 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-bold focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
                <div>
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">TELÉFONO (WHATSAPP) *</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="formularioDirecto.telefono" 
                    name="telefono"
                    required
                    placeholder="+56 9 1234 5678" 
                    class="w-full px-5 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-bold focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>
              </div>

              <div class="pt-4 flex justify-end">
                <button 
                  type="submit"
                  [disabled]="cargandoDirecto()"
                  class="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-[#050811] hover:bg-[#38bdf8] font-black text-sm uppercase tracking-wider transition-all active:scale-95 shadow-xl disabled:opacity-50"
                >
                  @if (cargandoDirecto()) {
                    <span>REGISTRANDO...</span>
                  } @else {
                    <span>ENVIAR INSCRIPCIÓN</span>
                  }
                </button>
              </div>
            </form>
          }

        </div>
      </section>

      <footer class="border-t border-white/10 py-12 px-4 sm:px-8 text-xs text-slate-400 bg-black">
        <div class="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div class="flex items-center gap-3">
            <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-6 w-6 object-contain" />
            <span class="font-bold">© 2019 - 2026 Space Of Competitions. Todos los derechos reservados. Club asociado: Legends Street Workout.</span>
          </div>
          <div class="flex flex-wrap justify-center sm:justify-end items-center gap-6 font-bold uppercase">
            <a href="#nike-intro" class="hover:text-white transition-colors">Visión</a>
            <a href="#nike-competencias" class="hover:text-white transition-colors">Torneos</a>
            <a href="#nike-legends" class="hover:text-white transition-colors">Legends</a>
            <a href="#nike-inscripciones" class="hover:text-white transition-colors">Inscripciones</a>
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
export class PropuestaTresComponent {
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
