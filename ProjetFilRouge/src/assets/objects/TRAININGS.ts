import { Training } from "../../app/entities/training.model";

export const trainings:Training[]=[
    {
        "id": 1,
        "nom": "POEC Java",
        "duree": 57,
        "nbParticipants": 14,
        "certifiante": true,
        "prerequis": false,
        "prix": 800,
        "description": "Une formation pour apprendre le Java afin de devenir développeur Java."
    },    
    {
        "id": 2,
        "nom": "BackEnd Java",
        "duree": 57,
        "nbParticipants": 14,
        "certifiante": true,
        "prerequis": true,
        "prix": 1250,
        "description": "Cette formation est dispensée aux développeurs en herbe qui souhaitent apprendre davantage de choses sur le BackEnd."
    },
    {
        "id": 3,
        "nom": "Expert Java",
        "duree": 38,
        "nbParticipants": 20,
        "certifiante": false,
        "prerequis": true,
        "prix": 2000,
        "description": "Dans cette formation, des notions très compliquées sur Java sont apprises à nos stagiaires. Souvent à la demande des entreprises."
    },
    {
        "id": 4,
        "nom": "POEI Python",
        "duree": 57,
        "nbParticipants": 14,
        "certifiante": true,
        "prerequis": false,
        "prix": 1500,
        "description": "Cette POEC Python est là pour permettre à des entreprises qui veulent recruter des gens inexpérimenter d'apprendre à ces gens le Python."
    },
]