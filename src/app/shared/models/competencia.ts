export interface Competencia {
  id: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  direccion: string;
  comuna: string;
  organizador: string;
  valorInscripcion: number;
  valorInscripcionFormateado: string;
  cuposTotales: number;
  cuposDisponibles: number;
  estado: 'inscripciones_abiertas' | 'proximamente' | 'finalizada';
  categorias: string[];
  requisitos: string[];
  premios: string[];
  descripcion: string;
}

export interface FormularioInscripcion {
  nombreCompleto: string;
  rut: string;
  email: string;
  telefono: string;
  categoria: string;
  clubProcedencia: string;
}
