import {Client} from '../../core/models/client';


export interface Devis {
    id:number;
    numerodevis:string,
    reference:string,
    client:Client[]

}


