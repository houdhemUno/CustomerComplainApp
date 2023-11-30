import { ObjectId, Groupe, Created, Updated } from './'
export interface MotifReclamation {
    _id: ObjectId;
    groupe: Groupe[];
    created: Created;
    __v: number;
    updated: Updated;
}
