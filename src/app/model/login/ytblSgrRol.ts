import { YtblSgrProfile } from "./ytblSgrProfile";

export interface YtblSgrRol {
    idRol: number;
    description: string;
    isValid: string;
    nameRol: string;
    ytblSgrProfile: YtblSgrProfile[];
}