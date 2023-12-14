import { createAction, props } from "@ngrx/store";
import { Reclamation } from '../models/reclamation';

export enum ReclamationActionType {
  ADD_ITEM = '[Reclamation] Add Reclamation',
}

export const AddReclamationAction = createAction(
  ReclamationActionType.ADD_ITEM,
  props<{payload: Reclamation}>()
);