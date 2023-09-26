import { Matter } from "./matter.model";

export interface Theme {
    id: number;
    name: string;
    listMatter: Matter[];
}