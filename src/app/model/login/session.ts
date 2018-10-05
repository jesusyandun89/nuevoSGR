import { ConsultaUsuarios } from "./consultaUsuarios";

export interface Session {
    consultaUsuario: ConsultaUsuarios;
    token: string;
}