import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class UserService {
    getUserName() :string {
        return "abadi ihab"
    }
    getAge():number {
        return 34
    }
    //Ajouter un exemple avec un faux positif
    getData() {

    }
    //En fonction du boolean, on renvoie la chaine connecté ou non connecté
    getIsLogged(logged:boolean) : string {

    }
}