import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class UserService {
    getUserName() :string {
        return "abadi ihab"
    }
}