import { ObjectId,Created } from './'; 
export interface Habilitation {
    _id: ObjectId;
    userId: string;
    id: string;
    intitule: string;
    created: Created;
    __v: number;
}
