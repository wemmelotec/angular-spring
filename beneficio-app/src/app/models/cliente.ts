import { Beneficio } from './beneficio';

export interface Cliente {
  id: number;
  nome: string;
  beneficios: Beneficio[];
}
