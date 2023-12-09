import { Date } from './'

export interface Changement {
    id: number;
    commentaire: string;
    statut: string;
    motif: string;
    date: Date;
    acteur: string;
    ficheUrl: string;
}
