import { Matter } from "../model/matter.model";
import { Training } from "../model/training.model";
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