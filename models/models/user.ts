import { ObjectId, DateObject, Desactive, Created, Updated, Habilitation } from './'
export interface User {

    _id: ObjectId;
    email: string;
    password: string;
    confirmpassword: string;
    firstname: string;
    lastname: string;
    civilite: string;
    role: string;
    connected: boolean;
    desactive: Desactive;
    created: Created;
    accessToken: string;
    __v: number;
    updated: Updated;
    habilitation: Habilitation[];
}
