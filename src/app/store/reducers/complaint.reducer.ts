import { AddComplaintAction} from '../actions/complaint.actions';
import { Complaint } from '../models/complaint.model';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: Array<Complaint> = [
  {
    id: '1',
    title: "Complaint 1",
    userId: "user1",
    description: "This is the first complaint",
    status: "Open",
    Priority: "High"
  },
];

const reducer = createReducer(
   initialState,
   on(AddComplaintAction, (state, action) => {
    // console.log("payl: "+action.payload)
      return [...state, action.payload]
   })
);

export function ComplaintReducer(state: Array<Complaint> | undefined, action: Action) {
  return reducer(state, action);
}