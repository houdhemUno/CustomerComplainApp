import { AddReclamationAction} from '../actions/reclamation.actions';
import { Reclamation } from '../models/reclamation';
import { Action, createReducer, on } from '@ngrx/store';

const initialState: Array<Reclamation> = [
  // {
  //   id: '1',
  //   title: "Reclamation 1",
  //   userId: "user1",
  //   description: "This is the first Reclamation",
  //   status: "Open",
  //   Priority: "High"
  // },
];

const reducer = createReducer(
   initialState,
   on(AddReclamationAction, (state, action) => {
    // console.log("payl: "+action.payload)
      return [...state, action.payload]
   })
);

export function ReclamationReducer(state: Array<Reclamation> | undefined, action: Action) {
  return reducer(state, action);
}