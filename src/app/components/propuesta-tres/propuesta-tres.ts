import { Component } from '@angular/core';

@Component({
  selector: 'app-propuesta-tres',
  standalone: true,
  template: `
    <div class="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#0b132b] text-white">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#38bdf8]/30 mb-6">
        <span class="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
        <span class="text-xs uppercase tracking-widest text-[#38bdf8] font-semibold">ESPACIO DISPONIBLE</span>
      </div>
      <h1 class="font-display text-5xl md:text-7xl text-white tracking-wide mb-4">PROPUESTA 3</h1>
      <p class="text-sm text-slate-400 max-w-md">Componente listo para la tercera propuesta de diseño.</p>
    </div>
  `
})
export class PropuestaTresComponent {}
