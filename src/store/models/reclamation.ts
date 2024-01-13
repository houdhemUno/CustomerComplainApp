import { ObjectId, Changement, Statut, Created, Updated, Transaction } from './'
export interface Reclamation {
    _id: ObjectId ;
    userId: string;
    transactions: Transaction[]; 
    changements: Changement[];
    statut: Statut[];
    created: Created ;
    refprefixe: string;
    ref: string;
    __v: number;
    updated: Updated ;
}
