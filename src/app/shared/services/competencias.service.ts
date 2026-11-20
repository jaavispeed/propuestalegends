import { Injectable, signal } from '@angular/core';
import { Competencia } from '../models/competencia';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {
  private readonly listaCompetencias = signal<Competencia[]>([
    {
      id: 'battle-of-legends-2026',
      titulo: 'BATTLE OF LEGENDS CHILE 2026',
      subtitulo: 'Torneo Nacional de Calistenia & Street Workout — 5ta Edición',
      fecha: '20 de Diciembre, 2026',
      hora: '09:00 - 19:30 hrs',
      lugar: 'Parque Deportivo Lo Prado (Sector Barras Calistenia)',
      direccion: 'Av. Gabriela Mistral con Guatemala s/n',
      comuna: 'Lo Prado, Santiago de Chile',
      organizador: 'Club Deportivo Legends Street Workout & SOC (Space Of Competitions)',
      valorInscripcion: 15000,
      valorInscripcionFormateado: '$15.000 CLP',
      cuposTotales: 64,
      cuposDisponibles: 18,
      estado: 'inscripciones_abiertas',
      categorias: [
        'Freestyle Pro (Masculino)',
        'Freestyle Pro (Femenino)',
        'Power & Repeticiones (Max Dips & Pullups)',
        'Street Lifting (+32kg Pullup / +48kg Dip)'
      ],
      requisitos: [
        'Mayor de 16 años (menores con autorización notarial/apoderado)',
        'Firma de consentimiento y deslinde de responsabilidad deportiva',
        'Presentar cédula de identidad en acreditación matutina',
        'Uso de indumentaria deportiva adecuada y magnesio personal'
      ],
      premios: [
        '1er Lugar: $350.000 CLP + Trofeo Fénix Dorado + Clasificación Directa SOC',
        '2do Lugar: $150.000 CLP + Medalla de Honor + Kit Deportivo Legends',
        '3er Lugar: $75.000 CLP + Reconocimiento Oficial + Indumentaria SOC'
      ],
      descripcion: 'El campeonato insignia de nuestro club. Los mejores exponentes nacionales se enfrentan en batallas 1v1 con jueces certificados SOC bajo reglamento internacional.'
    },
    {
      id: 'copa-soc-resistencia-2027',
      titulo: 'COPA RESISTENCIA & POWER SOC',
      subtitulo: 'Clasificatorio Regional Zona Centro de Street Workout',
      fecha: '24 de Enero, 2027',
      hora: '10:00 - 18:00 hrs',
      lugar: 'Complejo Deportivo Municipal Lo Prado',
      direccion: 'San Pablo 5959',
      comuna: 'Lo Prado, Santiago de Chile',
      organizador: 'SOC (Space Of Competitions) en alianza con Legends',
      valorInscripcion: 12000,
      valorInscripcionFormateado: '$12.000 CLP',
      cuposTotales: 50,
      cuposDisponibles: 32,
      estado: 'inscripciones_abiertas',
      categorias: [
        'Resistencia Estricta (Circuito de dominadas, fondos y muscle-ups)',
        'Estáticos Puros (Front Lever, Back Lever, Planche, Maltese)'
      ],
      requisitos: [
        'Cédula de identidad vigente',
        'Inscripción previa confirmada con comprobante de pago',
        'Puntualidad en pesaje y acreditación (09:30 AM)'
      ],
      premios: [
        '1er Lugar: $200.000 CLP + Medalla de Oro + Puntos para Ranking Nacional SOC',
        '2do Lugar: $100.000 CLP + Medalla de Plata',
        '3er Lugar: Medalla de Bronce + Suplementación Deportiva'
      ],
      descripcion: 'Jornada orientada a la fuerza pura y resistencia aeróbica en barra fija y paralelas. Prueba definitiva de disciplina y control corporal.'
    },
    {
      id: 'legends-rookie-clash',
      titulo: 'LEGENDS ROOKIE & TALENTOS',
      subtitulo: 'Encuentro Formativo y Competitivo para Atletas Emergentes',
      fecha: '28 de Febrero, 2027',
      hora: '11:00 - 17:00 hrs',
      lugar: 'Plaza Isla Walton (Espacio Calistenia)',
      direccion: 'Isla Walton con Gabriela Mistral',
      comuna: 'Lo Prado, Santiago de Chile',
      organizador: 'Legends Street Workout Academy',
      valorInscripcion: 8000,
      valorInscripcionFormateado: '$8.000 CLP',
      cuposTotales: 40,
      cuposDisponibles: 40,
      estado: 'proximamente',
      categorias: [
        'Amateur Freestyle',
        'Básicos Máximos (Flexiones, Dominadas, Sentadillas)'
      ],
      requisitos: [
        'Atletas que no hayan alcanzado podio en torneos Pro federados',
        'Espíritu deportivo, compañerismo y ganas de aprender'
      ],
      premios: [
        'Beca de Entrenamiento 1 año en Legends Club',
        'Medallas oficiales para todos los finalistas',
        'Kits de calistenia y bandas elásticas de competición'
      ],
      descripcion: 'Nuestra plataforma para impulsar a las nuevas promesas de las barras de Lo Prado y todo Chile.'
    }
  ]);

  readonly competencias = this.listaCompetencias.asReadonly();
}
