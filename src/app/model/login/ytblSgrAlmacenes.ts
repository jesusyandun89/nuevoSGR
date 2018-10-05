import { YtblSgrEmpresa } from "./ytblSgrEmpresa";

export interface YtblSgrAlmacenes {
    idAlma: number;
    idEbusiness?: number;
    idHiperk?: number;
    nombreEbusiness: string;
    nombreHiperk: string;
    ytblSgrEmpresa: YtblSgrEmpresa[];
}