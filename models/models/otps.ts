import { ObjectId, Otp, Created } from './'
export interface Otps {
    _id: ObjectId ;
    otp: Otp;
    created: Created ;
    __v: number;
}
