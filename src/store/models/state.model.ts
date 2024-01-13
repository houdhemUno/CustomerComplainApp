import { Reclamation } from './reclamation';
import { User } from './user';

export interface State {
  readonly complaint: Array<Reclamation>;
  readonly auth: Array<User>;
}