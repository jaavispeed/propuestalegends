import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetenciasService } from '../../shared/services/competencias.service';
import { Competencia, FormularioInscripcion } from '../../shared/models/competencia';
import { DetalleCompetenciaModalComponent } from '../detalle-competencia-modal/detalle-competencia-modal';
import { InscripcionModalComponent } from '../inscripcion-modal/inscripcion-modal';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, DetalleCompetenciaModalComponent, InscripcionModalComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-40 bg-[#0b132b]/85 backdrop-blur-md border-b border-white/10">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2.5 sm:gap-3 active:scale-97 transition-transform">
          <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-9 w-9 sm:h-10 sm:w-10 object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]" width="40" height="40" fetchpriority="high" />
          <div class="flex flex-col">
            <span class="font-display text-lg sm:text-xl tracking-wider text-white leading-none">SPACE OF COMPETITIONS</span>
            <span class="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#38bdf8] font-bold">ORGANIZACIÓN MATRIZ • CLUB LEGENDS</span>
          </div>
        </a>

        <nav class="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-slate-300">
          <a href="#soc" class="hover:text-[#38bdf8] transition-colors">QUÉ ES SOC</a>
          <a href="#competencias" class="hover:text-[#38bdf8] transition-colors">TORNEOS & CALENDARIO</a>
          <a href="#legends" class="hover:text-[#38bdf8] transition-colors">CLUB LEGENDS</a>
          <a href="#galeria" class="hover:text-[#38bdf8] transition-colors">IDENTIDAD & VISIÓN</a>
          <a href="#inscripciones" class="hover:text-[#38bdf8] transition-colors">INSCRIPCIONES</a>
        </nav>

        <div class="flex items-center gap-3">
          <a 
            href="#inscripciones" 
            class="hidden sm:inline-flex px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-colors shadow-md shadow-[#38bdf8]/20 active:scale-95"
          >
            INSCRIBIRSE
          </a>

          <button 
            type="button" 
            (click)="menuAbierto.set(!menuAbierto())"
            class="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors active:scale-95"
            aria-label="Abrir menú de navegación"
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
        <nav class="lg:hidden bg-[#0b132b] border-b border-white/10 px-6 py-4 flex flex-col gap-3 text-xs font-semibold tracking-wider text-slate-300 animate-in fade-in slide-in-from-top-2 duration-150">
          <a (click)="menuAbierto.set(false)" href="#soc" class="py-2 hover:text-[#38bdf8] transition-colors border-b border-white/5">QUÉ ES SOC</a>
          <a (click)="menuAbierto.set(false)" href="#competencias" class="py-2 hover:text-[#38bdf8] transition-colors border-b border-white/5">TORNEOS & CALENDARIO</a>
          <a (click)="menuAbierto.set(false)" href="#legends" class="py-2 hover:text-[#38bdf8] transition-colors border-b border-white/5">CLUB LEGENDS</a>
          <a (click)="menuAbierto.set(false)" href="#galeria" class="py-2 hover:text-[#38bdf8] transition-colors border-b border-white/5">IDENTIDAD & VISIÓN</a>
          <a (click)="menuAbierto.set(false)" href="#inscripciones" class="py-2 hover:text-[#38bdf8] transition-colors text-[#38bdf8]">INSCRIPCIONES DISPONIBLES</a>
        </nav>
      }
    </header>

    <main class="pt-16">
      <section class="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 sm:py-24 overflow-hidden border-b border-white/10 bg-[#0b132b]">
        <div class="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
          <img src="assets/planeta%20blanco.png" alt="SOC Universo" class="w-[340px] sm:w-[600px] md:w-[900px] max-w-full h-auto object-contain" loading="eager" decoding="async" />
        </div>

        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div class="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-[#38bdf8]/30 mb-6 sm:mb-8 backdrop-blur-sm">
            <img src="assets/foto%20de%20perfil.png" alt="Insignia SOC" class="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#38bdf8] font-semibold">
              ORGANIZACIÓN & LIGA OFICIAL DE CALISTENIA
            </span>
          </div>

          <h1 class="font-display text-5xl sm:text-7xl md:text-9xl text-white tracking-tight leading-[0.88] mb-6 select-none">
            SPACE OF <span class="text-[#38bdf8]">COMPETITIONS</span>
          </h1>

          <p class="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            La organización matriz que profesionaliza la calistenia y el street workout en Chile y Sudamérica. SOC estructura los grandes campeonatos oficiales, audita normativas e impulsa a sus clubes federados como <strong>Legends Street Workout</strong>.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4">
            <a 
              href="#competencias" 
              class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-all shadow-lg shadow-[#38bdf8]/20 active:scale-95 text-center"
            >
              CALENDARIO DE TORNEOS SOC
            </a>
            <a 
              href="#legends" 
              class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95 text-center"
            >
              CONOCE AL CLUB LEGENDS
            </a>
          </div>
        </div>
      </section>

      <section id="soc" class="py-16 sm:py-24 px-4 sm:px-6 bg-[#0b132b] border-b border-white/10">
        <div class="max-w-[1200px] mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span class="text-xs font-bold uppercase tracking-widest text-[#38bdf8] block mb-2">Estructura Global</span>
            <h2 class="font-display text-4xl sm:text-6xl text-white tracking-wide mb-4">
              ¿QUÉ ES SOC?
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Space Of Competitions (SOC)</strong> es la organización rectora y ecosistema competitivo donde convergen clubes, atletas de alto rendimiento, normativas federadas y eventos de máxima exigencia. SOC alberga, respalda y potencia a clubes como <strong>Legends Street Workout</strong>, garantizando competencias transparentes y seguras.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-[#1c2541] p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#38bdf8]/40 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center text-xl mb-6">
                🏛
              </div>
              <h3 class="font-display text-2xl text-white mb-2">ORGANIZACIÓN MATRIZ</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                SOC regula el circuito competitivo, fiscaliza reglamentos internacionales y articula a los clubes deportivos bajo un mismo estándar de calidad.
              </p>
            </div>

            <div class="bg-[#1c2541] p-8 rounded-3xl border border-white/10 hover:border-[#38bdf8]/40 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center text-xl mb-6">
                ⚡
              </div>
              <h3 class="font-display text-2xl text-white mb-2">LIGA & RANKING OFICIAL</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Cada fecha oficial permite a los atletas sumar puntajes auditados, acceder a podios categorizados y clasificar a eventos internacionales.
              </p>
            </div>

            <div class="bg-[#1c2541] p-8 rounded-3xl border border-white/10 hover:border-[#38bdf8]/40 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center text-xl mb-6">
                🛡
              </div>
              <h3 class="font-display text-2xl text-white mb-2">INFRAESTRUCTURA Y GESTIÓN</h3>
              <p class="text-xs text-slate-300 leading-relaxed">
                Certificación de barras de competición, seguridad médica en recintos y coordinación ordenada de inscripciones de atletas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="competencias" class="py-16 sm:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#38bdf8] block mb-2">Circuito Oficial SOC 2026 - 2027</span>
            <h2 class="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-wide">
              CALENDARIO DE COMPETENCIAS
            </h2>
          </div>
          <p class="text-xs text-slate-400 max-w-md">
            Consulta los campeonatos organizados por SOC en conjunto con Legends y sedes federadas. Abre cada ficha para ver bases, organizador, recinto y registrar tu postulación.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (comp of servicioCompetencias.competencias(); track comp.id) {
            <article class="group bg-[#1c2541] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-colors">
              <div>
                <div class="flex items-center justify-between gap-2 mb-4">
                  <span class="text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                    [class.bg-[#38bdf8]]="comp.estado === 'inscripciones_abiertas'"
                    [class.text-[#0b132b]]="comp.estado === 'inscripciones_abiertas'"
                    [class.bg-white/10]="comp.estado !== 'inscripciones_abiertas'"
                    [class.text-slate-300]="comp.estado !== 'inscripciones_abiertas'"
                  >
                    {{ comp.estado === 'inscripciones_abiertas' ? 'Inscripciones Abiertas' : 'Próximamente' }}
                  </span>
                  <span class="text-xs text-[#38bdf8] font-bold">{{ comp.valorInscripcionFormateado }}</span>
                </div>

                <div class="w-full h-36 rounded-2xl bg-[#0b132b] mb-4 overflow-hidden border border-white/5 flex items-center justify-center p-3">
                  <img 
                    [src]="comp.id === 'battle-of-legends-2026' ? 'assets/logo_battleoflegends.png' : 'assets/foto%20de%20perfil.png'" 
                    [alt]="comp.titulo" 
                    class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 class="font-display text-2xl text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {{ comp.titulo }}
                </h3>
                <p class="text-xs text-slate-300 mb-6 line-clamp-2">
                  {{ comp.subtitulo }}
                </p>

                <div class="space-y-2 text-xs text-slate-300 mb-6 bg-[#0b132b]/50 p-3.5 rounded-2xl border border-white/5">
                  <div class="flex items-center gap-2">
                    <span class="text-[#38bdf8]">🗓</span>
                    <span>{{ comp.fecha }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[#38bdf8]">📍</span>
                    <span class="truncate">{{ comp.lugar }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[#38bdf8]">🛡</span>
                    <span class="truncate">{{ comp.organizador }}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-4 border-t border-white/5">
                <button 
                  type="button"
                  (click)="abrirModalDetalle(comp)"
                  class="flex-1 py-2.5 px-4 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors active:scale-95 text-center"
                >
                  Ver Detalle Completo
                </button>
                @if (comp.estado === 'inscripciones_abiertas') {
                  <button 
                    type="button"
                    (click)="abrirModalInscripcion(comp)"
                    class="py-2.5 px-4 rounded-full text-xs font-bold bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#0b132b] transition-colors active:scale-95"
                    title="Inscribirme"
                  >
                    Inscribirme
                  </button>
                }
              </div>
            </article>
          }
        </div>
      </section>

      <section id="legends" class="py-16 sm:py-24 px-4 sm:px-6 bg-[#ffffff] text-[#0f172a] relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none">
          <img src="assets/marca%20de%20agua%20blanca%20full.png" alt="Emblema Fénix" class="w-full h-full object-contain invert" loading="lazy" decoding="async" />
        </div>

        <div class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/10 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-4">
              <span>🦅</span>
              <span>Club Deportivo Federado SOC</span>
            </div>
            <h2 class="font-display text-4xl sm:text-6xl text-[#0f172a] tracking-tight leading-[0.9] mb-6">
              SOBRE EL CLUB LEGENDS
            </h2>
            <p class="text-sm text-slate-600 mb-6 leading-relaxed">
              <strong>Legends Street Workout</strong> es el club deportivo insignia perteneciente a la organización SOC. Fundado en 2019 en la comuna de <strong>Lo Prado (Santiago de Chile)</strong>, el club es el semillero de atletas y la fuerza comunitaria que da vida a las competencias.
            </p>
            <p class="text-sm text-slate-600 mb-8 leading-relaxed">
              Identificado con el <strong>Fénix</strong>, el club Legends representa la resiliencia y el espíritu callejero que forja campeones. Bajo el paraguas y fiscalización de SOC, Legends organiza entrenamientos masivos, talleres formativos y torneos emblemáticos como el <em>Battle of Legends</em>.
            </p>

            <div class="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <span class="font-display text-2xl sm:text-4xl text-[#0284c7] block">2019</span>
                <span class="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Año Fundación</span>
              </div>
              <div>
                <span class="font-display text-2xl sm:text-4xl text-[#0284c7] block">+150</span>
                <span class="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Atletas en el Club</span>
              </div>
              <div>
                <span class="font-display text-2xl sm:text-4xl text-[#0284c7] block">Lo Prado</span>
                <span class="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Sede Principal</span>
              </div>
            </div>
          </div>

          <div class="relative bg-[#0b132b] rounded-3xl p-6 sm:p-8 border border-slate-200 text-white overflow-hidden shadow-2xl">
            <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-6">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-[#0b132b] bg-[#38bdf8] rounded-full uppercase">
                  Código Deportivo
                </span>
                <img src="assets/logo_battleoflegends.png" alt="Insignia Fénix" class="h-10 w-auto object-contain opacity-80" />
              </div>
              <h3 class="font-display text-2xl sm:text-3xl text-white mb-6">EL FÉNIX DE LEGENDS</h3>
              
              <ul class="space-y-4 text-xs text-slate-300">
                <li class="flex items-start gap-3">
                  <span class="text-[#38bdf8] font-bold text-sm">01.</span>
                  <div>
                    <strong class="text-white block mb-0.5">Semillero y Comunidad:</strong>
                    Legends recibe a todo joven y atleta que busque superarse en las barras de Lo Prado.
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#38bdf8] font-bold text-sm">02.</span>
                  <div>
                    <strong class="text-white block mb-0.5">Alto Rendimiento:</strong>
                    Preparación técnica y física de cara al ranking oficial de Space Of Competitions.
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#38bdf8] font-bold text-sm">03.</span>
                  <div>
                    <strong class="text-white block mb-0.5">Hermandad Deportiva:</strong>
                    El club es una familia donde la resiliencia y el compañerismo priman sobre cualquier resultado individual.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" class="py-16 sm:py-24 px-4 sm:px-6 bg-[#0b132b] border-t border-b border-white/10">
        <div class="max-w-[1200px] mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span class="text-xs font-bold uppercase tracking-widest text-[#38bdf8] block mb-2">Diseño & Presencia</span>
            <h2 class="font-display text-4xl sm:text-6xl text-white tracking-wide mb-4">
              IDENTIDAD VISUAL Y CAMPAÑAS
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El universo gráfico oficial de Space Of Competitions y sus campeonatos asociados, fusionando la fuerza del cosmos y el rigor de la calistenia.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-[#1c2541] rounded-3xl p-4 border border-white/10 hover:border-[#38bdf8]/50 transition-all overflow-hidden group">
              <div class="w-full aspect-square rounded-2xl overflow-hidden bg-[#0b132b]">
                <img 
                  src="assets/nuevo.png" 
                  alt="Campaña Oficial Space Of Competitions" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="p-4">
                <span class="text-[11px] font-bold uppercase text-[#38bdf8] block mb-1">Campaña Oficial SOC</span>
                <h3 class="font-display text-2xl text-white">SPACE OF COMPETITIONS</h3>
                <p class="text-xs text-slate-300 mt-1">Ecosistema integral de torneos, atletas y estandarización.</p>
              </div>
            </div>

            <div class="bg-[#1c2541] rounded-3xl p-4 border border-white/10 hover:border-[#38bdf8]/50 transition-all overflow-hidden group">
              <div class="w-full aspect-square rounded-2xl overflow-hidden bg-[#0b132b]">
                <img 
                  src="assets/precentacion.png" 
                  alt="Presentación y Torneos SOC" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="p-4">
                <span class="text-[11px] font-bold uppercase text-[#38bdf8] block mb-1">Presentación del Circuito</span>
                <h3 class="font-display text-2xl text-white">CIRCUITO NACIONAL & FORMATIVO</h3>
                <p class="text-xs text-slate-300 mt-1">Alineado al Fénix de Legends y las barras de alta competencia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inscripciones" class="py-16 sm:py-24 px-4 sm:px-6 max-w-[1200px] mx-auto">
        <div class="bg-gradient-to-br from-[#1c2541] to-[#0b132b] rounded-3xl border border-[#38bdf8]/30 p-6 sm:p-12 relative overflow-hidden">
          <div class="max-w-3xl mx-auto">
            
            <div class="text-center mb-10">
              <span class="inline-block px-3 py-1 mb-3 text-xs font-semibold text-[#0b132b] bg-[#38bdf8] rounded-full uppercase">
                Registro de Atletas
              </span>
              <h2 class="font-display text-3xl sm:text-5xl md:text-6xl text-white mb-3">
                FORMULARIO DE INSCRIPCIÓN
              </h2>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Selecciona la competencia oficial e ingresa tus datos personales y deportivos para confirmar tu postulación en el circuito SOC.
              </p>
            </div>

            @if (envioDirectoExitoso()) {
              <div class="bg-[#0b132b] border border-[#38bdf8]/40 rounded-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-200">
                <div class="w-14 h-14 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-[#38bdf8]/40">
                  ✓
                </div>
                <h3 class="font-display text-2xl sm:text-3xl text-white mb-2">¡INSCRIPCIÓN REGISTRADA CON ÉXITO!</h3>
                <p class="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Hemos registrado tus datos para la competencia. La comisión técnica de SOC se contactará contigo por correo o WhatsApp para la acreditación.
                </p>
                <button 
                  type="button" 
                  (click)="reiniciarFormularioDirecto()"
                  class="px-6 py-2.5 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-all active:scale-95"
                >
                  Registrar otra inscripción
                </button>
              </div>
            } @else {
              <form (ngSubmit)="enviarFormularioDirecto()" class="bg-[#0b132b] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1.5">Torneo al que deseas postular *</label>
                  <select 
                    [(ngModel)]="formularioDirecto.torneoSeleccionado" 
                    name="torneoSeleccionado"
                    required
                    class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
                  >
                    @for (comp of competenciasDisponibles(); track comp.id) {
                      <option [value]="comp.titulo">
                        {{ comp.titulo }} ({{ comp.fecha }} • {{ comp.valorInscripcionFormateado }})
                      </option>
                    }
                  </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">Nombre Completo *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.nombreCompleto" 
                      name="nombreCompleto"
                      required
                      placeholder="Ej. Matías Silva" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">RUT o Pasaporte *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.rut" 
                      name="rut"
                      required
                      placeholder="12.345.678-9" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      [(ngModel)]="formularioDirecto.email" 
                      name="email"
                      required
                      placeholder="tu-correo@ejemplo.com" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">Teléfono Móvil (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      [(ngModel)]="formularioDirecto.telefono" 
                      name="telefono"
                      required
                      placeholder="+56 9 1234 5678" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">Modalidad / Categoría</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.categoria" 
                      name="categoria"
                      placeholder="Freestyle Pro / Power / Amateur" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">Club o Comuna de Procedencia</label>
                    <input 
                      type="text" 
                      [(ngModel)]="formularioDirecto.clubProcedencia" 
                      name="clubProcedencia"
                      placeholder="Legends / Independiente / Lo Prado" 
                      class="w-full px-4 py-3 bg-[#1c2541] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div class="pt-2 flex justify-end">
                  <button 
                    type="submit"
                    [disabled]="cargandoDirecto()"
                    class="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-[#0b132b] bg-[#38bdf8] hover:bg-[#38bdf8]/90 transition-all shadow-lg shadow-[#38bdf8]/20 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    @if (cargandoDirecto()) {
                      <svg class="animate-spin h-4 w-4 text-[#0b132b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Enviando Registro...</span>
                    } @else {
                      <span>Enviar Mi Inscripción Oficial</span>
                    }
                  </button>
                </div>
              </form>
            }

          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#0b132b] border-t border-white/10 py-10 px-4 sm:px-6 text-xs text-slate-400">
      <div class="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div class="flex items-center gap-3">
          <img src="assets/foto%20de%20perfil.png" alt="SOC" class="h-7 w-7 object-contain opacity-80" />
          <span>© 2019 - 2026 Space Of Competitions (SOC). Club asociado: Legends Street Workout.</span>
        </div>
        <div class="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
          <a href="#soc" class="hover:text-white transition-colors">Sobre SOC</a>
          <a href="#competencias" class="hover:text-white transition-colors">Torneos</a>
          <a href="#legends" class="hover:text-white transition-colors">Club Legends</a>
          <a href="#galeria" class="hover:text-white transition-colors">Identidad</a>
          <a href="#inscripciones" class="hover:text-white transition-colors">Inscripciones</a>
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
  `
})
export class InicioComponent {
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
    telefono: '',
    categoria: '',
    clubProcedencia: ''
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
      telefono: '',
      categoria: '',
      clubProcedencia: ''
    };
    this.envioDirectoExitoso.set(false);
  }
}
