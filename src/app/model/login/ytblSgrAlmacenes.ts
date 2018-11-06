import { YtblSgrEmpresa } from "./ytblSgrEmpresa";

export interface YtblSgrAlmacenes {
    idAlma: number;
    ciudad: string;
    idEbusiness?: string;
    idHiperk?: string;
    nombreEbusiness: string;
    nombreHiperk: string;
    isValid: string;
    ytblSgrEmpresa: YtblSgrEmpresa[];
}