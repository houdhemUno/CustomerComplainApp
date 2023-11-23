import { createAction, props } from "@ngrx/store";
import { Complaint } from '../models/complaint.model';

export enum ComplaintActionType {
  ADD_ITEM = '[COMPLAINT] Add COMPLAINT',
}

export const AddComplaintAction = createAction(
  ComplaintActionType.ADD_ITEM,
  props<{payload: Complaint}>()
);