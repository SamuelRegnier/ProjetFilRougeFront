import { User } from "./user.modele";

export const Users : User[] = [
    { "id": 1, "nom": "Dupont"    , "prenom": "Didier"    ,"dateNaissance": new Date("1984-05-16"),"adresse": "10 rue du toto" ,"mail":"didier@gmail.fr" ,"telephone":"0689504162" ,"statut":"Etudiant" ,"photo": "assets/photos/homme.png"},
    { "id": 2, "nom": "Rodriguez" , "prenom": "Michele"    ,"dateNaissance": new Date("1999-12-12"),"adresse": "25 rue du titi" ,"mail":"michele@gmail.fr" ,"telephone":"0689504162" ,"statut":"Professeur" ,"photo": "assets/photos/femme.png"} , 
    { "id": 3, "nom": "Snow"      , "prenom": "John"    ,"dateNaissance": new Date("2000-10-12"),"adresse": "100 rue du tata" ,"mail":"john@gmail.fr" ,"telephone":"0689504162" ,"statut":"Etudiant" ,"photo": "assets/photos/homme.png"}  ,
    { "id": 4, "nom": "Mejean"    , "prenom": "Liliane"    ,"dateNaissance": new Date("1995-06-01"),"adresse": "1 rue du tutu" ,"mail":"liliane@gmail.fr" ,"telephone":"0689504162" ,"statut":"Professeur" ,"photo": "assets/photos/femme.png"} ,
    { "id": 5, "nom": "Brail"     , "prenom": "Eric"    , "dateNaissance": new Date("1985-05-26"),"adresse": "500 rue tete" ,"mail":"eric@gmail.fr" ,"telephone":"0689504162" ,"statut":"Etudiant" ,"photo": "assets/photos/homme.png"} ];