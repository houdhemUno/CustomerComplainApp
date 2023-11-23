import { Complaint } from './complaint.model';

export interface State {
  readonly complaint: Array<Complaint>;
}