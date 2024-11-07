import { Restaurant } from "./restaurant.interface";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string; // URL ou chemin de la photo de profil
    favoriteRestaurants: Restaurant[]; // Liste de restaurants préférés
}

export interface UserRequest {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
}