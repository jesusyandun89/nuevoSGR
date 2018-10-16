import { ConsultaUsuarios } from "./consultaUsuarios";

export interface Session {
    userLogin: string;
    mail: string;
    msg: string;
    ytblSgrUser: ConsultaUsuarios[];
}