import { Reclamation } from './reclamation';

export interface State {
  readonly complaint: Array<Reclamation>;
}