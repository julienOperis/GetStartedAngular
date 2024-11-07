import { Avis } from "./avis.interface";
import { User } from "./user.interface";

export interface Restaurant {
 
    id: number;
    name: string;
    adresse: string;
    avis: Avis[];
    users: User[];
}