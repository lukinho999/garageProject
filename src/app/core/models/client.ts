import { Employe } from './employe';

export interface Client {
    id:number;
    nom:string;
    prenom:string;
    adresse:string;
	codePostal:string;
	ville:string;
	telephone:string;
    mobile:string;
    employe:Employe;
}
