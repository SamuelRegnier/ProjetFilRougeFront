import { Matter } from "../entities/matter.model";
import { Training } from "../entities/training.model";
import { Classroom } from "./classroom.model";

export interface Session {

id: number;
dateDebut : Date; 
dateFin: Date;
nbParticipant: number;
training: Training;
classroom: Classroom;
matter: Matter; 
}