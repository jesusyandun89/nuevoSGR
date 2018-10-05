import { YtblSgrAlmacenes } from "./ytblSgrAlmacenes";
import { YtblSgrRol } from "./ytblSgrRol";

export interface ConsultaUsuarios {
    idUser: number;
    dateFrom: Date;
    dateTo?: Date;
    isValid: string;
    userSgr: string;
    ytblSgrAlmacenes: YtblSgrAlmacenes;
    ytblSgrRol: YtblSgrRol;
}