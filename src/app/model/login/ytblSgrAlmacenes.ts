import { YtblSgrEmpresa } from "./ytblSgrEmpresa";

export interface YtblSgrAlmacenes {
    idAlma: number;
    ciudad: string;
    idEbusiness?: number;
    idHiperk?: number;
    nombreEbusiness: string;
    nombreHiperk: string;
    isValid: string;
    ytblSgrEmpresa: YtblSgrEmpresa[];
}