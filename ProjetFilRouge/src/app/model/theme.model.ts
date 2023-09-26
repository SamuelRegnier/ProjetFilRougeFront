import { Matter } from "./matter.model";

export interface Theme {
    id: number;
    nom: string;
    listMatter: Matter[];
}